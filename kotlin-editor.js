/* Shared, opt-in Kotlin Playground support. See kotlin-editor.md for authoring. */
(() => {
  const dependencyCache = new Map();

  // SmallImage.show emits PNG markers, as in playground.html. Replace only
  // complete markers with images; ordinary output remains text, never HTML.
  function renderImages(mount, label) {
    mount.querySelectorAll(".standard-output").forEach((output) => {
      const walker = document.createTreeWalker(output, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      for (const node of nodes) {
        const pattern = /RENDER_IMAGE:::(data:image\/png;base64,[A-Za-z0-9+/=\s]+):::RENDER_END/g;
        const text = node.textContent;
        const matches = [...text.matchAll(pattern)];
        if (!matches.length) continue;
        const fragment = document.createDocumentFragment();
        let offset = 0;
        for (const match of matches) {
          fragment.append(document.createTextNode(text.slice(offset, match.index)));
          const image = document.createElement("img");
          image.className = "kotlin-rendered-image";
          image.alt = `Image produced by ${label.toLowerCase()}`;
          image.src = match[1].replace(/\s/g, "");
          fragment.append(image);
          offset = match.index + match[0].length;
        }
        fragment.append(document.createTextNode(text.slice(offset)));
        node.replaceWith(fragment);
      }
    });
  }

  function loadDependency(path) {
    const url = new URL(path, document.baseURI).href;
    if (!dependencyCache.has(url)) {
      dependencyCache.set(url, fetch(url).then((response) => {
        if (!response.ok) throw new Error(`Could not load Kotlin dependency: ${path}`);
        return response.text();
      }));
    }
    return dependencyCache.get(url);
  }

  async function mountEditor(original) {
    if (original.dataset.kotlinMounted) return;
    original.dataset.kotlinMounted = "true";
    const example = original.closest(".kotlin-example");
    const source = original.textContent;
    const label = original.getAttribute("aria-label") || "Kotlin example";
    const toolbar = document.createElement("div");
    toolbar.className = "kotlin-editor-toolbar";
    const run = document.createElement("button");
    run.type = "button";
    run.className = "kotlin-run";
    run.textContent = "Run code";
    run.setAttribute("aria-label", `Run ${label.toLowerCase()}`);
    run.disabled = true;
    const reset = document.createElement("button");
    reset.type = "button";
    reset.className = "kotlin-reset";
    reset.textContent = "Reset";
    reset.setAttribute("aria-label", `Reset ${label.toLowerCase()}`);
    reset.disabled = true;
    const status = document.createElement("span");
    status.className = "kotlin-editor-status";
    status.setAttribute("role", "status");
    status.textContent = "Loading editor…";
    toolbar.append(run, reset, status);
    original.before(toolbar);

    let host;
    let mountedNode;
    let observer;
    let supportingCode;
    try {
      if (typeof window.KotlinPlayground !== "function") throw new Error("Playground unavailable");
      const paths = (original.dataset.kotlinDependencies || "").split(/\s+/).filter(Boolean);
      const dependencies = await Promise.all(paths.map(loadDependency));
      host = document.createElement("div");
      host.className = "kotlin-editor-host";
      host.setAttribute("theme", "darcula");
      host.setAttribute("lines", "true");
      host.setAttribute("auto-indent", "true");
      host.setAttribute("match-brackets", "true");
      host.setAttribute("data-target-platform", "java");
      const input = document.createElement("textarea");
      input.value = source;
      input.textContent = source;
      host.append(input);
      for (const dependency of dependencies) {
        const hidden = document.createElement("textarea");
        hidden.className = "hidden-dependency";
        hidden.value = dependency;
        hidden.textContent = dependency;
        host.append(hidden);
      }
      original.after(host);
      if (dependencies.length && original.dataset.kotlinShowDependencies === "true") {
        supportingCode = document.createElement("details");
        supportingCode.className = "kotlin-support";
        const summary = document.createElement("summary");
        summary.textContent = "Supporting code included with this example";
        supportingCode.append(summary);
        const explanation = document.createElement("p");
        explanation.textContent = "These definitions are loaded automatically each time you run. The editable program above supplies this example's inputs.";
        supportingCode.append(explanation);
        dependencies.forEach((dependency, index) => {
          const heading = document.createElement("h4");
          heading.textContent = paths[index].split("/").pop();
          const pre = document.createElement("pre");
          const code = document.createElement("code");
          code.textContent = dependency;
          pre.append(code);
          supportingCode.append(heading, pre);
        });
        host.after(supportingCode);
      }
      const playgrounds = await window.KotlinPlayground(host, {
        getInstance(instance) {
          run.disabled = false;
          status.textContent = "Editable Kotlin";
          run.addEventListener("click", () => instance.execute());
        },
        callback(_target, mount) {
          mountedNode = mount;
          mount.classList.add("kotlin-editor-mount");
          original.hidden = true;
          example?.classList.add("kotlin-example-ready");
          const labelControls = () => {
            mount.querySelectorAll(".CodeMirror textarea").forEach((input) => {
              input.setAttribute("aria-label", `${label}: editable Kotlin code`);
            });
            mount.querySelectorAll(".code-output").forEach((output) => {
              output.setAttribute("role", "log");
              output.setAttribute("aria-label", "Program output");
            });
            if (original.dataset.kotlinOutput === "images") renderImages(mount, label);
          };
          labelControls();
          observer = new MutationObserver(labelControls);
          observer.observe(mount, { childList: true, characterData: true, subtree: true });
          // Keep keyboard navigation available through a multiline editor.
          mount.addEventListener("keydown", (event) => {
            if (event.key === "Tab") event.stopPropagation();
          }, true);
        }
      });
      if (run.disabled) throw new Error("Compiler service unavailable");
      reset.disabled = false;
      reset.addEventListener("click", async () => {
        // Playground can replace its CodeMirror instance while running. Rebuild
        // through its lifecycle API so Reset also clears output and diagnostics.
        observer?.disconnect();
        playgrounds.forEach((playground) => playground.destroy());
        mountedNode?.remove();
        host.remove();
        supportingCode?.remove();
        toolbar.remove();
        original.hidden = false;
        delete original.dataset.kotlinMounted;
        await mountEditor(original);
        example?.querySelector(".kotlin-reset")?.focus();
      });
    } catch (error) {
      observer?.disconnect();
      mountedNode?.remove();
      host?.remove();
      supportingCode?.remove();
      original.hidden = false;
      run.disabled = true;
      reset.disabled = true;
      status.textContent = "Editor unavailable. You can still read and copy the example; reload to try again.";
      console.warn("Kotlin editor could not load.", error);
    }
  }

  function initialize(root = document) {
    root.querySelectorAll("[data-kotlin-editor]").forEach(mountEditor);
  }

  // Generated reading pages can call this after inserting their content.
  window.CS1101Kotlin = { initialize };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initialize());
  } else {
    initialize();
  }
})();
