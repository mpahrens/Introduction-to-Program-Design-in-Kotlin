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
