const CS1101_GLOSSARY = {
  argument: {
    term: "Argument",
    definition: "A value supplied to a function when the function is called.",
    sourceTitle: "Lecture 1: What Is a Function?",
    sourceHref: "lecture-01-what-is-a-function.html"
  },
  boolean: {
    term: "Boolean",
    definition: "A type with exactly two values: true and false.",
    sourceTitle: "Lecture 1: Values Have Types",
    sourceHref: "lecture-01-values-and-types.html"
  },
  "function-body": {
    term: "Function body",
    definition: "The statements inside a function's curly braces that run when the function is called.",
    sourceTitle: "Lecture 1: What Is a Function?",
    sourceHref: "lecture-01-what-is-a-function.html"
  },
  call: {
    term: "Function call",
    definition: "An expression that asks a function to run, written with the function name followed by parentheses.",
    sourceTitle: "Lecture 1: What Is a Function?",
    sourceHref: "lecture-01-what-is-a-function.html"
  },
  expression: {
    term: "Expression",
    definition: "Code that produces a value, such as 1 + 1 or \"Hello\".",
    sourceTitle: "Lecture 1: Arithmetic Expressions",
    sourceHref: "lecture-01-arithmetic-expressions.html"
  },
  function: {
    term: "Function",
    definition: "A named computation or action that can be called, often with inputs, such as println(...).",
    sourceTitle: "Lecture 1: What Is a Function?",
    sourceHref: "lecture-01-what-is-a-function.html"
  },
  immutable: {
    term: "Immutable",
    definition: "Unable to be changed after it is created and initialized",
    sourceTitle: "Lecture 1: Immutable Names with val",
    sourceHref: "lecture-01-immutable-val.html"
  },
  import: {
    term: "Import",
    definition: "A line that makes a name from another package or library available in the current Kotlin file.",
    sourceTitle: "Lecture 1: What Is an Import?",
    sourceHref: "lecture-01-what-is-an-import.html"
  },
  index: {
    term: "Index",
    definition: "A numbered position in an ordered value such as a String. Kotlin indexes begin at 0.",
    sourceTitle: "Lecture 1: String Objects",
    sourceHref: "lecture-01-string-objects.html"
  },
  initialize: {
    term: "Initialize",
    definition: "To give a name its first value when the name is created.",
    sourceTitle: "Lecture 1: Immutable Names with val",
    sourceHref: "lecture-01-immutable-val.html"
  },
  library: {
    term: "Library",
    definition: "A collection of code written for reuse, such as Kotlin's math library or the Kotest testing library.",
    sourceTitle: "Lecture 1: What Is an Import?",
    sourceHref: "lecture-01-what-is-an-import.html"
  },
  method: {
    term: "Method",
    definition: "A function attached to an object and called with dot notation, such as \"Gompei\".substring(0, 3).",
    sourceTitle: "Lecture 1: String Objects",
    sourceHref: "lecture-01-string-objects.html"
  },
  object: {
    term: "Object",
    definition: "A value that carries data and operations together. In Kotlin, a String is an object, so it has properties and methods.",
    sourceTitle: "Lecture 1: String Objects",
    sourceHref: "lecture-01-string-objects.html"
  },
  operator: {
    term: "Operator",
    definition: "A symbol that asks Kotlin to perform an operation, such as +, %, or <.",
    sourceTitle: "Lecture 1: Arithmetic Expressions",
    sourceHref: "lecture-01-arithmetic-expressions.html"
  },
  package: {
    term: "Package",
    definition: "A named group used to organize related Kotlin definitions and distinguish them from definitions with similar names.",
    sourceTitle: "Lecture 1: Read a Library Path",
    sourceHref: "lecture-01-reading-library-paths.html"
  },
  property: {
    term: "Property",
    definition: "A named piece of information available on an object, such as the length of a String.",
    sourceTitle: "Lecture 1: String Objects",
    sourceHref: "lecture-01-string-objects.html"
  },
  reassign: {
    term: "Reassign",
    definition: "To make an existing name refer to a different value.",
    sourceTitle: "Lecture 1: Immutable Names with val",
    sourceHref: "lecture-01-immutable-val.html"
  },
  statement: {
    term: "Statement",
    definition: "A piece of code that tells the program to do one step, such as calling println.",
    sourceTitle: "Lecture 1: What Is a Function?",
    sourceHref: "lecture-01-what-is-a-function.html"
  },
  test: {
    term: "Test",
    definition: "A small executable example that compares what code produces with what was expected.",
    sourceTitle: "Lecture 1: Reading shouldBe",
    sourceHref: "lecture-01-reading-shouldbe.html"
  },
  tolerance: {
    term: "Tolerance",
    definition: "An allowed amount of difference between an approximate decimal result and its expected value.",
    sourceTitle: "Lecture 1: Reading shouldBe",
    sourceHref: "lecture-01-reading-shouldbe.html"
  },
  type: {
    term: "Type",
    definition: "A category that tells Kotlin what kind of value something is and which operations make sense, such as Int, Double, String, or Boolean.",
    sourceTitle: "Lecture 1: Values Have Types",
    sourceHref: "lecture-01-values-and-types.html"
  },
  value: {
    term: "Value",
    definition: "A piece of data the program computes or uses, such as 2, \"Hello\", or true.",
    sourceTitle: "Lecture 1: Values Have Types",
    sourceHref: "lecture-01-values-and-types.html"
  }
};

function addGlossaryEntries(sourceTitle, sourceHref, entries) {
  entries.forEach(([id, term, definition]) => {
    CS1101_GLOSSARY[id] = { term, definition, sourceTitle, sourceHref };
  });
}

addGlossaryEntries("Lecture 2: Function Design Recipe", "lecture-02-function-signature.html", [
  ["kdoc", "KDoc", "Kotlin documentation written immediately before a declaration to explain its purpose to readers and tools."],
  ["function-signature", "Function signature", "The first line of a function definition: its name, parameters, parameter types, and return type."],
  ["parameter", "Parameter", "A local input name listed in a function definition."],
  ["return-type", "Return type", "The type of value a function promises to produce, written after the parameter list."],
  ["stub", "Stub", "A temporary function body that returns a simple value of the promised type."],
  ["inventory", "Input inventory", "A planning list of what each function input represents and the operations or subproblems it suggests."],
  ["code-coverage", "Code coverage", "The extent to which tests exercise the important branches and cases in a program."],
  ["helper-function", "Helper function", "A function that solves a smaller named subproblem for another function."],
  ["decomposition", "Decomposition", "Breaking a problem into smaller, focused subproblems."]
]);

addGlossaryEntries("Lectures 3-4: Enum Classes", "lecture-03-enum-classes.html", [
  ["enum", "Enum", "A type whose values come from a short, fixed list of named choices."],
  ["case-analysis", "Case analysis", "Handling each possible form or condition in a separate branch."],
  ["data-class", "Data class", "A Kotlin class used primarily to combine named fields into one data value."],
  ["field", "Field", "A named piece of data stored inside an object."],
  ["constructor", "Constructor", "A call that creates a new object by supplying its required field values."]
]);

addGlossaryEntries("Lectures 3-4: Construct a Book with Named Arguments", "lecture-04-named-constructor-arguments.html", [
  ["named-argument", "Named argument", "An argument written with a parameter or field name, such as pages = 96; sometimes called a keyword argument."]
]);

addGlossaryEntries("Lectures 3-4: Use copy with Named Arguments", "lecture-04-copy-with-named-arguments.html", [
  ["copy", "copy", "A data-class function that creates a new object while replacing selected named fields."]
]);

addGlossaryEntries("Lectures 3-4: Why this matters: Product Data in Computer Science", "lecture-04-product-types-in-computer-science.html", [
  ["product-data", "Product data", "A data type that combines every named field into one value; also called a record or struct in many languages."],
  ["record", "Record", "A structured value that keeps several named facts about one thing together."]
]);

addGlossaryEntries("Lecture 5: Boolean Operators", "lecture-05-boolean-operators.html", [
  ["predicate", "Predicate", "A function or expression that produces a Boolean answer."],
  ["boolean-operator", "Boolean operator", "An operator such as &&, ||, or ! that combines or reverses Boolean values."],
  ["nested-data", "Nested data", "Data in which one object's field contains another structured value."],
  ["short-circuit", "Short-circuit evaluation", "Stopping a Boolean expression once its result is already known."]
]);

addGlossaryEntries("Lectures 6-7: Sealed Interfaces", "lecture-06-sealed-interfaces.html", [
  ["sum-type", "Sum type", "A data type whose value can have one of several distinct forms."],
  ["sealed-interface", "Sealed interface", "A Kotlin interface whose complete family of implementations is restricted and known."],
  ["variant", "Variant", "One possible form of a sum-type value."],
  ["type-alias", "Type alias", "A second name for an existing type; it does not create a new type."],
  ["smart-cast", "Smart cast", "Kotlin's automatic use of a more specific type after a successful type check."],
  ["compile-time-error", "Compile-time error", "A problem Kotlin detects before a program can run, such as using a field that the current type does not provide."]
]);

addGlossaryEntries("Lectures 6-7: Why this matters: Sum Types in Computer Science", "lecture-07-sum-types-in-computer-science.html", [
  ["state", "State", "One meaningful condition a program, process, or value can currently be in."]
]);

addGlossaryEntries("Lectures 8-9: Base Case and Progress", "lecture-08-base-case-and-progress.html", [
  ["recursion", "Recursion", "A design in which a function calls itself on a smaller or simpler problem."],
  ["base-case", "Base case", "A recursive function branch that returns directly without another recursive call."],
  ["recursive-case", "Recursive case", "A branch that makes progress by calling the function on a smaller problem."],
  ["recursive-data", "Recursive data", "Data that contains a smaller value of its own type."],
  ["node", "Node", "A structured tree or list value that contains data and links to recursive subparts."],
  ["template", "Template", "A reusable function outline derived from the shape of a data definition."]
]);

addGlossaryEntries("Lecture 10: Conversion and Filtered Averages", "lecture-10-conversion-and-filtered-averages.html", [
  ["numeric-conversion", "Numeric conversion", "Changing a numeric value from one number type to another, such as Int to Double."],
  ["nullable", "Nullable type", "A type followed by ? whose value may be an ordinary value or null."]
]);

addGlossaryEntries("Lectures 11-13: Built-in Lists", "lecture-11-list-types-and-listof.html", [
  ["generic-type", "Generic type", "A type with a type parameter, such as List<String>, that describes the type of contained values."],
  ["function-reference", "Function reference", "A function value written with :: and a function name, without calling the function."],
  ["higher-order-function", "Higher-order function", "A function that receives or returns another function."],
  ["function-type", "Function type", "A type that states a function's input types and output type, such as (Int) -> Boolean."],
  ["fold", "Fold", "A list operation that combines elements into one accumulated result from an explicit initial value."],
  ["accumulator", "Accumulator", "A value that carries a partial result through repeated steps or recursive calls."]
]);

addGlossaryEntries("Lecture 13 Challenge: Lambda Expressions", "lecture-13-lambda-expressions.html", [
  ["lambda", "Lambda", "An unnamed function expression written inside curly braces."]
]);

addGlossaryEntries("Lecture 14: Binary Tree Data", "lecture-14-binary-tree-data.html", [
  ["binary-tree", "Binary tree", "Recursive data in which each node has at most two child subtrees."],
  ["leaf", "Leaf", "A tree endpoint with no recursive child subtrees."]
]);

addGlossaryEntries("Lectures 15-16: Search-Tree Invariants", "lecture-15-search-tree-invariants.html", [
  ["invariant", "Invariant", "A property intended to remain true for every valid state of a data structure."],
  ["pruning", "Pruning", "Using known structure to skip a branch that cannot affect the answer."]
]);

addGlossaryEntries("Lectures 17-18: Arbitrary-Arity Trees", "lecture-17-arbitrary-arity-tree-data.html", [
  ["arbitrary-arity-tree", "Arbitrary-arity tree", "A tree in which each node may have any number of children."],
  ["descendant", "Descendant", "Any node reachable below another node, including children and deeper levels."],
  ["set", "Set", "A collection that stores each equal value at most once."]
]);

addGlossaryEntries("Lectures 19-20: Search and Accumulators", "lecture-19-nullable-search-and-elvis.html", [
  ["elvis-operator", "Elvis operator", "The Kotlin operator ?:, which uses the left value unless it is null, then uses the right expression."],
  ["local-function", "Local function", "A function defined inside another function and available only within that enclosing function."],
  ["pair", "Pair", "A small product value with two components named first and second."]
]);

addGlossaryEntries("Lectures 21-23: Mutation and Loops", "lecture-21-var-and-assignment.html", [
  ["mutation", "Mutation", "A change to program state after a value or object has been created."],
  ["mutable-list", "MutableList", "A Kotlin list whose contents can be added, removed, or replaced."],
  ["side-effect", "Side effect", "An observable action besides returning a value, such as mutation, input, or output."],
  ["not-null-assertion", "Not-null assertion", "The Kotlin operator !!, which extracts a nullable value or crashes when it is null."],
  ["for-loop", "for loop", "A loop that runs its body once for each value in an iterable collection or range."],
  ["while-loop", "while loop", "A loop that repeats while its Boolean condition remains true."]
]);

addGlossaryEntries("Lectures 24-25: Graphs and Cycles", "lecture-24-graph-nodes-and-edges.html", [
  ["graph", "Graph", "A collection of nodes connected by edges."],
  ["edge", "Edge", "A connection from one graph node to another."],
  ["cycle", "Cycle", "A graph path that returns to a node already on the path."],
  ["visited-set", "Visited set", "A set of node identifiers already processed during graph traversal."],
  ["depth-first-search", "Depth-first search", "A graph traversal that follows one route deeply before trying alternatives."],
  ["breadth-first-search", "Breadth-first search", "A graph traversal that processes nodes in increasing distance from the start."],
  ["worklist", "Worklist", "A collection of discovered items that still need to be processed."]
]);

addGlossaryEntries("Extra Graph Lesson: Arrays and Matrices", "extra-kotlin-arrays.html", [
  ["array", "Array", "A fixed-size mutable indexed collection in Kotlin."],
  ["matrix", "Matrix", "A rectangular grid of values, often represented as an array of row arrays."],
  ["range", "Range", "An ordered sequence of values between endpoints, often used to control a loop."]
]);

function applyGlossaryTerms() {
  document.querySelectorAll(".term[data-term]").forEach((element) => {
    const entry = CS1101_GLOSSARY[element.dataset.term];
    if (!entry) return;

    const definition = `${entry.term}: ${entry.definition}`;
    element.dataset.definition = definition;
    element.tabIndex = 0;
    element.setAttribute("aria-label", definition);
  });
}

function renderGlossaryList() {
  const list = document.querySelector("[data-glossary-list]");
  if (!list) return;

  list.replaceChildren();

  Object.entries(CS1101_GLOSSARY)
    .sort(([, first], [, second]) => first.term.localeCompare(second.term))
    .forEach(([id, entry]) => {
      const wrapper = document.createElement("div");
      wrapper.className = "glossary-entry";
      wrapper.id = id;

      const term = document.createElement("dt");
      term.textContent = entry.term;

      const definition = document.createElement("dd");
      definition.textContent = entry.definition;

      const source = document.createElement("dd");
      source.className = "glossary-source";
      source.append("Introduced in ");

      const sourceLink = document.createElement("a");
      sourceLink.href = entry.sourceHref;
      sourceLink.textContent = entry.sourceTitle;
      source.append(sourceLink, ".");

      wrapper.append(term, definition, source);
      list.append(wrapper);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  applyGlossaryTerms();
  renderGlossaryList();
});
