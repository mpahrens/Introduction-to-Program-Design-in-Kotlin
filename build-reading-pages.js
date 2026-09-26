const fs = require("fs");
const path = require("path");
const sets = require("./reading-catalog.js");
require("./reading-examples.js")(sets);

const root = __dirname;

function pageShell(title, bodyAttribute, reading = null) {
  const hasEditor = reading?.examples.some(example => example.kind === "kotlin");
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <title>${title}</title>
  <link rel="stylesheet" href="styles.css">
${reading ? '  <link rel="stylesheet" href="kotlin-editor.css">' : ""}
  <script src="glossary.js" defer></script>
  <script src="reading-catalog.js" defer></script>
${reading ? '  <script src="reading-examples.js" defer></script>' : ""}
${hasEditor ? '  <script src="https://unpkg.com/kotlin-playground@1" defer></script>\n  <script src="kotlin-editor.js" defer></script>' : ""}
  <script src="reading-page.js" defer></script>
</head>
<body ${bodyAttribute}>
  <div id="reading-app">
    <noscript><main class="page"><p>Enable JavaScript to view this reading.</p></main></noscript>
  </div>
</body>
</html>
`;
}

for (const set of sets) {
  fs.writeFileSync(
    path.join(root, set.hub),
    pageShell(`${set.lecture} Reading Set: ${set.title}`, `data-reading-set="${set.id}"`)
  );

  for (const reading of set.readings) {
    fs.writeFileSync(
      path.join(root, reading.file),
      pageShell(`${set.lecture}: ${reading.title}`, `data-reading-id="${reading.id}"`, reading)
    );
  }
}

console.log(`Generated ${sets.length} reading-set pages and ${sets.flatMap((set) => set.readings).length} microskill pages.`);
