function findReadingContext() {
  const setId = document.body.dataset.readingSet;
  const readingId = document.body.dataset.readingId;
  const sets = window.CS1101_READING_SETS || [];

  if (setId) {
    return { set: sets.find((item) => item.id === setId), reading: null };
  }

  for (const set of sets) {
    const reading = set.readings.find((item) => item.id === readingId);
    if (reading) return { set, reading };
  }

  return { set: null, reading: null };
}

function readingBadge(status) {
  const label = status === "necessary" ? "Necessary" : "Optional";
  const className = status === "necessary" ? "required" : "optional";
  return `<span class="status-badge ${className}">${label}</span>`;
}

function renderReadingSet(set) {
  document.title = `${set.lecture} Reading Set: ${set.title}`;

  const groups = [
    {
      status: "necessary",
      heading: "Before class",
      readings: set.readings.filter((reading) => reading.status === "necessary")
    },
    {
      status: "optional",
      heading: "Look closer",
      readings: set.readings.filter((reading) => reading.status === "optional")
    }
  ].filter((group) => group.readings.length > 0);

  const readingGroups = groups.map((group) => `
    <div class="reading-set">
      <h2 class="reading-set-heading">${readingBadge(group.status)} ${group.heading}</h2>
      ${group.readings.map((reading, index) => `
        <article class="reading-card">
          <span class="reading-number">${group.status === "necessary" ? index + 1 : "+"}</span>
          <div>
            <h3><a href="${reading.file}">${reading.title}</a></h3>
            <p>${reading.summary}</p>
          </div>
          <span class="reading-time">${reading.time}</span>
        </article>
      `).join("")}
    </div>
  `).join("");

  document.getElementById("reading-app").innerHTML = `
    <header class="site-header">
      <div class="header-inner">
        <a class="crumb" href="index.html">Back to all lectures</a>
        <p class="topic-kicker">${set.lecture} reading set</p>
        <h1>${set.title}</h1>
        <p class="subtitle">${set.summary}</p>
        <div class="meta">
          <span class="pill">${groups[0].readings.length} necessary</span>
          <span class="pill">${groups.find((group) => group.status === "optional")?.readings.length || 0} optional</span>
          <span class="pill">About ${set.minutes} minutes necessary</span>
        </div>
      </div>
    </header>
    <main class="page layout">
      <section>
        ${readingGroups}
        <nav class="lesson-nav">
          <a href="index.html">All lectures</a>
          <a href="${set.nextHref}">${set.nextLabel}</a>
        </nav>
      </section>
      <aside class="panel">
        <h2>Lecture Goal</h2>
        <p>${set.goal}</p>
        <p><a class="button-link" href="glossary.html">Open Glossary</a></p>
      </aside>
    </main>
  `;
}

function vocabularyMarkup(keys) {
  return keys.map((key) => {
    const entry = CS1101_GLOSSARY[key];
    if (!entry) return "";
    return `<li><span class="term" data-term="${key}">${entry.term}</span></li>`;
  }).join("");
}

function renderReading(set, reading) {
  document.title = `${set.lecture}: ${reading.title}`;
  const readingIndex = set.readings.indexOf(reading);
  const previous = set.readings[readingIndex - 1];
  const next = set.readings[readingIndex + 1];
  const previousHref = previous?.file || set.hub;
  const previousLabel = previous ? `Previous: ${previous.shortTitle || previous.title}` : `${set.lecture} contents`;
  const nextHref = next?.file || set.nextHref;
  const nextLabel = next ? `Next: ${next.shortTitle || next.title}` : set.nextLabel;

  document.getElementById("reading-app").innerHTML = `
    <header class="site-header">
      <div class="header-inner">
        <a class="crumb" href="${set.hub}">Back to ${set.lecture} readings</a>
        <p class="topic-kicker">${set.lecture} | ${reading.status === "necessary" ? `Reading ${set.readings.filter((item) => item.status === "necessary").indexOf(reading) + 1}` : "Optional reading"} | ${reading.status === "necessary" ? "Necessary" : "Optional"}</p>
        <h1>${reading.title}</h1>
        <p class="subtitle">${reading.summary}</p>
        <div class="meta">
          ${readingBadge(reading.status)}
          <span class="pill">${reading.time}</span>
          <span class="pill">Microskill: ${reading.microskill}</span>
        </div>
      </div>
    </header>
    <main class="page layout">
      <section>
        <article class="reading-block">
          <h2>What It Means</h2>
          <p>${reading.definition}</p>
          <p>${reading.why}</p>

          <h2>Read This Example</h2>
          <pre><code>${reading.code}</code></pre>
          <p>${reading.walkthrough}</p>

          <div class="callout"><strong>Notice:</strong> ${reading.notice}</div>

          ${supplementaryResourcesMarkup(reading.id, reading.file)}

          <div class="practice">
            <h2>Practice</h2>
            <ol>
              ${reading.practice.map((item) => `<li>${item.question}</li>`).join("")}
            </ol>
            <details class="answer">
              <summary>Check your answers</summary>
              <div>
                ${reading.practice.map((item, index) => `<p>${index + 1}. ${item.answer}</p>`).join("")}
              </div>
            </details>
          </div>
        </article>

        <nav class="lesson-nav">
          <a href="${previousHref}">${previousLabel}</a>
          <a href="${nextHref}">${nextLabel}</a>
        </nav>
      </section>

      <aside class="panel">
        <h2>Microskill</h2>
        <p>${reading.microskill}</p>
        <h3>Vocabulary</h3>
        <ul class="vocabulary-list">${vocabularyMarkup(reading.vocabulary)}</ul>
        <p><a class="button-link" href="glossary.html">Open Glossary</a></p>
      </aside>
    </main>
  `;

  if (typeof applyGlossaryTerms === "function") applyGlossaryTerms();
}

document.addEventListener("DOMContentLoaded", () => {
  const { set, reading } = findReadingContext();
  if (!set) {
    document.getElementById("reading-app").innerHTML = "<p class=\"page\">This reading could not be found.</p>";
    return;
  }

  if (reading) {
    renderReading(set, reading);
  } else {
    renderReadingSet(set);
  }
});
