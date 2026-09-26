/* Compile the actual published programs with their hidden dependencies, then
 * compare stdout (or an intentional error) with each example's expectation.
 * Usage: node verify-reading-examples.js <Kotlin home> <JDK home>
 * Temporary compilation files are created outside the reading website. */
const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");
const vm = require("vm");
const sets = require("./reading-catalog.js");
require("./reading-examples.js")(sets);

const kotlinHome = process.argv[2] || process.env.KOTLIN_HOME;
const javaHome = process.argv[3] || process.env.JAVA_HOME;
if (!kotlinHome || !javaHome) throw new Error("Supply Kotlin home and JDK home, or set KOTLIN_HOME and JAVA_HOME.");
const java = path.join(javaHome, "bin", process.platform === "win32" ? "java.exe" : "java");
const temp = fs.mkdtempSync(path.join(os.tmpdir(), "cs1101-examples-"));
const classes = path.join(temp, "classes");
const programs = [];
const sources = [];
const readingList = sets.flatMap(set => set.readings);

// Check the shared renderer as well as the Kotlin. No remote scripts are needed.
const app = { innerHTML: "" };
const context = { window: {}, CS1101_GLOSSARY: {}, supplementaryResourcesMarkup: () => "",
  document: { getElementById: () => app, addEventListener: () => {} } };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(__dirname, "reading-page.js"), "utf8"), context);
for (const set of sets) {
  context.renderReadingSet(set);
  for (const reading of set.readings) {
    context.renderReading(set, reading);
    const count = (app.innerHTML.match(/data-kotlin-editor/g) || []).length;
    if (count !== reading.examples.filter(example => example.kind === "kotlin").length) {
      throw new Error(`Wrong number of editors rendered for ${reading.id}`);
    }
    for (const match of app.innerHTML.matchAll(/href="([^"#]+)"/g)) {
      if (!fs.existsSync(path.join(__dirname, match[1]))) throw new Error(`Broken reading link: ${match[1]}`);
    }
  }
}

function writeSource(name, code) {
  const file = path.join(temp, name);
  fs.writeFileSync(file, code);
  sources.push(file);
}

try {
  for (const reading of readingList) {
    const shell = fs.readFileSync(path.join(__dirname, reading.file), "utf8");
    const scripts = reading.examples.some(example => example.kind === "kotlin")
      ? ["reading-examples.js", "kotlin-editor.js", "kotlin-playground@1"] : ["reading-examples.js"];
    for (const script of scripts) {
      if (!shell.includes(script)) throw new Error(`${reading.file} is missing ${script}`);
    }
    reading.examples.forEach((example, index) => {
      if (example.kind !== "kotlin") return;
      if (!example.prompt || (example.expected == null && !example.expectedError)) {
        throw new Error(`Missing prompt or expectation: ${reading.id}`);
      }
      const id = reading.id.replace(/-/g, "_") + "_" + index;
      const pkg = `qa.${id}`;
      const filename = `Program_${id}`;
      writeSource(filename + ".kt", `package ${pkg}\n\n${example.code}\n`);
      example.dependencies.forEach((file, dependencyIndex) => {
        writeSource(`${id}_dependency_${dependencyIndex}.kt`, `package ${pkg}\n\n${fs.readFileSync(path.join(__dirname, file), "utf8")}`);
      });
      programs.push({ ...example, id: reading.id, className: `${pkg}.${filename}Kt` });
    });
  }
  const argumentsFile = path.join(temp, "sources.txt");
  fs.writeFileSync(argumentsFile, sources.map(file => '"' + file.replace(/\\/g, "/") + '"').join("\n"));
  console.log(`Compiling ${programs.length} independent programs and their dependencies…`);
  const compiled = spawnSync(java, ["-cp", path.join(kotlinHome, "lib", "*"),
    "org.jetbrains.kotlin.cli.jvm.K2JVMCompiler", "-kotlin-home", kotlinHome,
    "-jvm-target", "1.8", "-d", classes, "@" + argumentsFile], { encoding: "utf8", timeout: 180000 });
  if (compiled.status !== 0) throw new Error(compiled.error?.message || compiled.stdout + compiled.stderr);
  const failures = [];
  for (const program of programs) {
    const result = spawnSync(java, ["-Dfile.encoding=UTF-8", "-cp", classes + path.delimiter + path.join(kotlinHome, "lib", "kotlin-stdlib.jar"), program.className], { encoding: "utf8", timeout: 10000 });
    const actual = result.stdout?.replace(/\r\n/g, "\n").trim();
    if (program.expectedError) {
      if (result.status === 0 || !result.stderr?.includes(program.expectedError)) {
        failures.push({ id: program.id, expectedError: program.expectedError, actual, error: result.stderr });
      }
    } else if (result.status !== 0 || actual !== program.expected.trim()) {
      failures.push({ id: program.id, expected: program.expected, actual, error: result.stderr });
    }
  }
  if (failures.length) throw new Error(JSON.stringify(failures, null, 2));
  console.log(`Passed: ${programs.length} programs, including the intentionally failing stub exercise; ${readingList.length} rendered readings and their local links; editor assets on every runnable reading.`);
} finally {
  // This exact temporary directory was allocated above, outside the project.
  fs.rmSync(temp, { recursive: true, force: true });
}
