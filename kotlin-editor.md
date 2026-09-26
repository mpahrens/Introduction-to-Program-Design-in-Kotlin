# Runnable reading examples

Include `kotlin-editor.css`, the Kotlin Playground CDN script, and `kotlin-editor.js`, in that order, as in `lecture-01-what-is-a-function.html`. Keep scripts deferred. Only examples explicitly marked with `data-kotlin-editor` become editors; inline code and other examples remain unchanged.

```html
<figure class="kotlin-example" aria-label="An example you can run">
  <figcaption>Try it <span>Change the greeting and run again.</span></figcaption>
  <pre data-kotlin-editor aria-label="Greeting"><code>fun main() {
    println("Hello")
}</code></pre>
</figure>
```

Supply a complete runnable program. Escape HTML characters inside the code as usual (`&lt;`, `&gt;`, `&amp;`). The original preformatted example remains readable if JavaScript or the remote editor cannot load, and is used when printing. Reset restores that example. Execution uses Kotlin Playground's remote compiler and requires internet access.

## Shared hidden dependencies

Set `data-kotlin-dependencies` on the `pre` to a space-separated list of Kotlin source paths relative to the reading page. The loader fetches each file once per page and adds it as a `textarea.hidden-dependency` before initializing the editor, following the pattern in `playground.html`.

```html
<pre data-kotlin-editor data-kotlin-dependencies="kotlin-dependencies/kotest-mini.kt"
     aria-label="An example test"><code>fun main() {
    2 + 2 shouldBe 4
}</code></pre>
```

`kotlin-dependencies/kotest-mini.kt` and `kotlin-dependencies/SmallImage.kt` contain the supplied playground libraries, extracted without changes. They are only loaded by examples that request them. These copies have no package declaration, so use their functions directly without the full Kotest or SmallImage imports. Preview dependency examples through an HTTP server, rather than opening a `file://` URL, so the browser can fetch the files.

The first function reading needs neither library. For SmallImage examples, add `data-kotlin-output="images"` alongside `data-kotlin-dependencies="kotlin-dependencies/SmallImage.kt"`. The shared renderer turns the PNG markers emitted by `show(image)` into inline images, including multiple images mixed with ordinary printed text. A checkerboard makes transparent areas visible. Each example must define its own image values. Animation markers are not supported by this renderer.

For pages that render their reading content dynamically, call `CS1101Kotlin.initialize()` after inserting that content. Repeated calls do not duplicate existing editors.

## Lecture 2 onward

`reading-catalog.js` contains the reading text and original focused snippets. `reading-examples.js` adds an explicit `examples` array to each reading. `reading-page.js` renders that array using the same editor as Lecture 1. This separates runnable programs from conceptual diagrams and allows one reading to include several examples (for instance, a planning sketch followed by a working implementation).

Example fields:

- `kind`: `kotlin` for an editable program, or `text` for a diagram, trace, or pseudocode.
- `title`, `code`: an accessible name and plain, **unescaped** source text. The renderer escapes it exactly once.
- `prompt`: a specific change or prediction for the student to try.
- `dependencies`: an array of reusable `.kt` paths. Inputs and calls stay visible in the editor.
- `note`: optional author-supplied HTML guidance, such as a precondition or expected failure. Supports tags such as `<code>`, `<em>`, `<strong>`, `<br>`, `<p>`, and `<ul>`. Use `&lt;` and `&amp;` for literal less-than signs and ampersands. Notes are rendered as HTML without escaping; use only trusted reading content.
- `expected`: original stdout, also available to readers in a collapsed disclosure.
- `expectedError`: a diagnostic substring for an intentionally failing exercise, instead of `expected`.

The `definition` and `statements` helpers reuse a catalog snippet and add a complete `main` with observable results. Use `example` for a program requiring a different structure. Every reading must be deliberately classified; adding a reading without an example configuration raises an authoring error. Keep explanatory diagrams and pseudocode as text. Unfinished Kotlin programs can be runnable: use `TODO()` for missing expressions, add explicit intended types where needed, and document the resulting `NotImplementedError` with `note` and `expectedError`. Lecture 2's working-backward reading presents each stage as a separate program with its own editor and visible heading.

The shared data types in `kotlin-dependencies/` support the later readings. The first example introducing a type shows its definition in the editor; subsequent examples load the definition as a hidden dependency. Generated examples add `data-kotlin-show-dependencies="true"`, which exposes a collapsed, read-only copy of the actual loaded support files. Reset restores the editable program and its support disclosure. `ConsoleInput.kt` supplies repeatable input to real Kotlin `readln()` calls through `provideInput`, avoiding an interactive terminal.

After changing example classifications or adding readings, regenerate the HTML shells:

```sh
node Readings/build-reading-pages.js
```

The builder preserves the favicon and only includes the remote editor on pages with runnable examples. Lecture 1's manually authored pages are not generated.

Verify the programs using an installed Kotlin compiler and JDK:

```sh
node Readings/verify-reading-examples.js "<Kotlin home>" "<JDK home>"
```

Alternatively set `KOTLIN_HOME` and `JAVA_HOME`. The verifier renders every reading, checks local links and editor assets, compiles each program with its own dependency copies in an isolated package, and runs each in a separate process. It compares output with `expected` or checks the documented intentional error. Temporary compiler files are removed afterward. Also preview representative pages over HTTP to check the remote compiler, editing, Reset, support disclosures, and appearance.
