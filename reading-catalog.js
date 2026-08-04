const CS1101_READING_SETS_DATA = (() => {
  const Q = (question, answer) => ({ question, answer });
  const R = (
    id,
    file,
    title,
    status,
    summary,
    microskill,
    vocabulary,
    definition,
    why,
    code,
    walkthrough,
    notice,
    practice
  ) => ({
    id,
    file,
    title,
    status,
    time: "2-3 minutes",
    summary,
    microskill,
    vocabulary,
    definition,
    why,
    code,
    walkthrough,
    notice,
    practice
  });

  const W = (id, file, title, summary, microskill, vocabulary, definition, why, code, walkthrough, notice, practice) =>
    R(id, file, title, "optional", summary, microskill, vocabulary, definition, why, code, walkthrough, notice, practice);

  const whyMattersBySet = {
    l02: W(
      "l02-why-functions-matter", "lecture-02-why-functions-matter.html", "Why this matters: Functions and Abstraction",
      "Functions let larger programs give names to useful behavior, making that behavior reusable, testable, and easier to understand.",
      "Recognize a repeated action that deserves one named operation.",
      ["function-signature", "helper-function", "decomposition"],
      "As programs grow, people cannot keep every detail in mind at once. A named operation lets a programmer focus on what a task accomplishes while another part of the program handles how it is carried out.",
      "This idea appears in software libraries, web services, algorithms, and team projects. A clear operation boundary lets one person improve an internal calculation without forcing every user of that operation to relearn the details.",
      "Library search service\ninput: search phrase\noutput: matching titles",
      "Someone using the search service only needs to know what information to provide and what result to expect. The service may later use a database, an index, or a different algorithm without changing that basic promise.",
      "Named operations are useful when an action has a clear purpose. They are less useful for a one-time detail with no meaningful idea of its own.",
      [Q("Why is a named operation useful in a team project?", "It gives collaborators a shared promise about one task without requiring everyone to know its internal details."), Q("What might change inside a search service without changing its public promise?", "Its search algorithm or how it stores titles."), Q("What does abstraction let a reader focus on?", "What a task accomplishes rather than every internal step.")]
    ),
    l05: W(
      "l05-why-conditions-matter", "lecture-05-why-conditions-matter.html", "Why this matters: Decisions in Programs",
      "Conditions let programs respond differently to meaningful situations, from checking input to enforcing rules and protecting users.",
      "Identify the information a program needs before it can make a responsible decision.",
      ["boolean", "predicate", "case-analysis"],
      "Programs are useful because they can react to information. A decision separates situations that need different responses instead of giving every input the same treatment.",
      "Later work uses decisions for input validation, access rules, game behavior, simulations, and error handling. Careful conditions also make policies visible: a reader can see which facts lead to which outcome.",
      "Account sign-in\ncorrect password -> allow access\nincorrect password -> show a helpful message",
      "The two outcomes should not be treated alike. The program needs a clear rule for distinguishing them, and each outcome needs an appropriate response.",
      "A decision should represent a reason, not a guess. Good conditions use the facts that actually matter to the situation.",
      [Q("Why does input validation need conditions?", "A program must respond differently to acceptable and unacceptable input."), Q("Name a program that makes decisions.", "For example, a game, a login system, or a course-registration system."), Q("What can conditions make visible to readers?", "The rules or policy that determine different outcomes.")]
    ),
    "l08-09": W(
      "l08-why-recursion-matters", "lecture-08-why-recursion-matters.html", "Why this matters: Recursive Structure",
      "Recursive thinking becomes useful whenever information is built from smaller versions of the same kind of information.",
      "Recognize a structure that can be understood by solving the same kind of problem on a smaller part.",
      ["recursion", "recursive-data", "base-case"],
      "Some information is naturally nested: folders contain folders, documents contain sections, and a family tree contains smaller family trees. A recursive design mirrors that shape instead of pretending the structure is flat.",
      "Future topics use recursive structure in file systems, web-page trees, compiler syntax trees, and many algorithms. The same pattern of a simple stopping case plus a smaller subproblem helps a program handle an arbitrarily large structure.",
      "Project folder\n- report\n- images\n  - chart\n  - logo",
      "To count files, a program can count the direct files and then use the same question on every nested folder. The task repeats on smaller pieces until a folder has no nested folders.",
      "The value of recursion is not that it is clever. It is that the structure of the information suggests a repeatable plan.",
      [Q("Why are folders a recursive structure?", "A folder may contain smaller folders of the same kind."), Q("Where might a compiler use recursive structure?", "When representing a nested expression or program as a syntax tree."), Q("What must eventually happen in a recursive process?", "It must reach a simple stopping case.")]
    ),
    l10: W(
      "l10-why-decomposition-matters", "lecture-10-why-decomposition-matters.html", "Why this matters: Breaking Problems into Parts",
      "Decomposition helps programmers turn a large question into smaller results that can be understood, tested, and combined.",
      "Name the smaller questions hidden inside a larger computing task.",
      ["decomposition", "helper-function", "accumulator"],
      "Many real tasks are too large to solve comfortably in one thought. Breaking a task into named pieces gives each piece a purpose and lets the final answer explain how those pieces fit together.",
      "This habit reappears in algorithms, data analysis, software design, and debugging. Smaller parts can be checked independently, which makes it easier to locate a mistaken assumption or improve one step without disturbing the rest.",
      "Travel estimate\nfind total distance\nfind travel speed\ncombine them to estimate time",
      "The final estimate depends on two understandable results. If it looks wrong, a programmer can examine distance and speed separately before questioning the final combination.",
      "A useful part has a meaningful job. Splitting a task into arbitrary tiny fragments can hide the idea instead of clarifying it.",
      [Q("Why does decomposition help with debugging?", "Each smaller result can be checked separately."), Q("What two subresults might a shopping-cart total need?", "For example, item subtotal and tax."), Q("When is a smaller part worth naming?", "When it represents a recognizable idea or can be checked independently.")]
    ),
    "l11-13": W(
      "l11-why-lists-matter", "lecture-11-why-lists-matter.html", "Why this matters: Collections of Data",
      "Lists are a common way to represent many related values, from search results and transaction histories to measurements and messages.",
      "Recognize a task that asks a program to work with a whole collection rather than one value.",
      ["list", "map", "filter"],
      "Programs rarely handle only one item. They often receive a collection of records, readings, files, or user actions and need to ask questions about the whole group.",
      "Later computer science work uses collections in databases, data science, user interfaces, and network services. Common collection patterns make it possible to transform every item, keep selected items, or summarize a group without losing the original organization.",
      "Daily temperatures\n68, 71, 69, 73, 70",
      "A weather program might keep only warm days, convert every value to another unit, or compute one summary such as the average. Each task concerns the collection as a whole, not just one temperature.",
      "Collections invite questions about patterns across many values: Which items match? How many are there? What is the total or average?",
      [Q("Why might a web site represent search results as a collection?", "A search can find any number of matching items."), Q("What is one useful question about a collection of measurements?", "For example, which measurement is largest or what the average is."), Q("Why keep a collection instead of unrelated separate values?", "A collection lets one operation work consistently across all related items.")]
    ),
    "l13-challenge": W(
      "l13c-why-functions-as-inputs-matter", "lecture-13-why-functions-as-inputs-matter.html", "Why this matters: Rules as Data",
      "Treating a rule as a value lets one general process adapt to many situations without being rewritten each time.",
      "Recognize when a program should receive a rule or action as input instead of choosing one fixed rule itself.",
      ["higher-order-function", "function-type", "predicate"],
      "Some programs repeat the same overall process while the rule changes. A survey tool, for example, can collect answers in the same way while using a different rule to decide which answers need follow-up.",
      "This idea appears later in event handling, sorting, simulations, testing, and configurable systems. Giving a process a rule makes the process reusable while leaving its behavior open to deliberate variation.",
      "Notification rule\nsend a reminder when an assignment is due soon\nchange the rule for a different course or deadline",
      "The notification system can keep the same scheduling machinery while receiving a different rule for each context. The rule is information the system can use, not a hard-coded decision it must always make.",
      "A general process should receive a rule when the process stays the same but the meaning of a match or action may change.",
      [Q("Why might a sorting tool accept a comparison rule?", "Different users may need the same items ordered in different ways."), Q("What stays the same in a configurable notification system?", "The machinery for scheduling and sending notifications."), Q("What can change?", "The rule that decides when to notify.")]
    ),
    l14: W(
      "l14-why-trees-matter", "lecture-14-why-trees-matter.html", "Why this matters: Hierarchical Information",
      "Trees represent information with levels, letting a program describe whole structures made of smaller contained structures.",
      "Recognize a hierarchy that is easier to understand as parent-and-child relationships than as one flat list.",
      ["binary-tree", "node", "leaf"],
      "Hierarchies are everywhere: a document has headings and subheadings, an organization has managers and reports, and a game scene has objects containing smaller objects. A tree makes those relationships explicit.",
      "Future computing topics use trees in file systems, compilers, search indexes, user-interface layouts, and decision systems. A tree shape gives a program a systematic way to visit or rebuild every part of a hierarchy.",
      "Document outline\nChapter\n  Section\n    Paragraph\n  Section",
      "Each part belongs beneath another part except the top-level chapter. A program can display the outline, count sections, or find a heading by following the same parent-and-child structure.",
      "A hierarchy is not merely a list with indentation. The connections between parents and children are information the program needs.",
      [Q("Why is a document outline naturally a tree?", "Each heading can contain smaller subheadings."), Q("Name another hierarchy a program might model.", "For example, a file system, an organization chart, or a menu."), Q("What does a tree preserve that a flat list might lose?", "Which items contain or belong beneath other items.")]
    ),
    "l15-16": W(
      "l15-why-search-trees-matter", "lecture-15-why-search-trees-matter.html", "Why this matters: Efficient Search",
      "Search-tree organization helps a program rule out large parts of ordered information instead of examining every item one by one.",
      "Explain how an ordering rule can make finding information faster.",
      ["invariant", "binary-tree", "pruning"],
      "When information has an order, a program can use that order to make a choice about where to look next. It does not need to inspect every possibility if some possibilities are already known to be too small or too large.",
      "This principle appears in indexes, dictionaries, autocomplete, databases, and scheduling systems. The important idea is not memorizing one tree algorithm; it is learning how a reliable organization rule can save work.",
      "Alphabetical contacts\nAda\nMina\nZoe",
      "If a search is looking for Zoe and reaches Mina, it can ignore names that belong before Mina. The ordering rule eliminates places where the answer cannot be.",
      "Fast search depends on maintaining the ordering rule. If entries are placed unpredictably, the program loses its reason for skipping work.",
      [Q("Why can an ordered index be faster than scanning every entry?", "The order can rule out groups of entries that cannot match."), Q("Where might a program use efficient search?", "For example, a database index, dictionary, or autocomplete system."), Q("What must remain true for the search rule to work?", "The information must continue to follow its ordering rule.")]
    ),
    "l17-18": W(
      "l17-why-general-trees-matter", "lecture-17-why-general-trees-matter.html", "Why this matters: Many-Child Hierarchies",
      "Many real hierarchies allow each item to contain any number of subitems, so programs need a flexible way to represent and explore them.",
      "Recognize a hierarchy where an item can have zero, one, or many direct children.",
      ["arbitrary-arity-tree", "descendant", "set"],
      "A course site can contain many modules, a folder can contain many files, and a family member can have many descendants. These structures cannot assume that every item has exactly two children.",
      "This shape appears in web navigation, document models, organizational data, and game worlds. Learning to process every child prepares students for problems where the amount of branching is determined by the data itself.",
      "Course site\nModule 1\n  Reading A\n  Reading B\n  Practice\nModule 2",
      "One module may have three direct children while another has none. A program that displays or searches the site needs to visit however many children actually exist.",
      "The number of children is part of the information, not a fixed property of the program.",
      [Q("Why is a course site a many-child hierarchy?", "A module can contain any number of readings, practices, or other items."), Q("Name another structure with an unpredictable number of children.", "For example, folders, menus, or organization-chart entries."), Q("What must a traversal do for each item?", "Process all of that item's actual children.")]
    ),
    "l19-20": W(
      "l19-why-search-context-matters", "lecture-19-why-search-context-matters.html", "Why this matters: Search Needs Context",
      "Some searches need more than yes-or-no answers, so they carry context such as a path, a partial result, or an explanation of where an answer came from.",
      "Identify the extra information a search must remember to produce a useful answer.",
      ["accumulator", "nullable", "pair"],
      "Finding something is often only the beginning. A navigation tool must report the route, a diagnostic tool must report where it found a problem, and a recommendation tool may need to return both an item and a reason.",
      "This pattern appears in path finding, parsers, debuggers, and data analysis. Carrying context lets a program build a complete answer while it works instead of trying to reconstruct lost information afterward.",
      "Museum directions\nstart: entrance\npath so far: entrance -> gallery -> stairs\ntarget: sculpture room",
      "The path so far explains how the visitor reached the current location. If the target is found, the program can return useful directions rather than only saying that the room exists.",
      "Ask what a user needs from the answer. If they need an explanation or route, the search must remember that information along the way.",
      [Q("Why is a route more useful than a yes-or-no answer in a navigation tool?", "It tells the user how to reach the destination."), Q("What might a debugger carry while searching a program?", "A location or path showing where it found a problem."), Q("What is context in a search?", "Extra information remembered while the search proceeds.")]
    ),
    "l21-23": W(
      "l21-why-state-and-loops-matter", "lecture-21-why-state-and-loops-matter.html", "Why this matters: State Changes Over Time",
      "Some programs model a changing world, so they need to repeat steps and remember the current state as time passes.",
      "Recognize a problem where the next step depends on a state that changes after each action.",
      ["mutation", "side-effect", "for-loop"],
      "Not every program is one fixed calculation. A simulation advances one time step at a time, a game responds to many player actions, and a file reader moves through a stream of input. These tasks need a model of what is true now and how one step changes it.",
      "Later courses use changing state and repetition in simulations, graphics, operating systems, networking, and performance-focused algorithms. The key is to make each update intentional and to keep track of what must remain true after every step.",
      "Queue at a help desk\nstart: 3 people waiting\none person is helped\nnext state: 2 people waiting",
      "The number waiting changes after each service step. A program can repeat the same update until nobody remains, while still checking that the queue count never becomes negative.",
      "Changing state is powerful because it models time. It also needs care, because later behavior depends on every earlier update.",
      [Q("Why does a simulation need changing state?", "Each time step changes the current situation."), Q("Name a process that repeats until a condition is reached.", "For example, serving a queue, reading a file, or running a game loop."), Q("Why should updates be intentional?", "A mistaken update can affect every later step.")]
    ),
    "l24-25": W(
      "l24-why-graph-search-matters", "lecture-24-why-graph-search-matters.html", "Why this matters: Connected Systems",
      "Graphs help programs reason about connections, and graph search helps them find routes, dependencies, and reachable possibilities.",
      "Recognize a network of connected things and state a useful question a program could ask about it.",
      ["graph", "depth-first-search", "breadth-first-search"],
      "Many systems are about relationships rather than simple sequences: cities connect by roads, courses connect by prerequisites, web pages connect by links, and people connect through friendships. A graph records those connections.",
      "Graph search appears in maps, recommendation systems, build tools, network routing, and games. It lets a program ask whether one thing can reach another, find a route, or discover what depends on a change.",
      "Course prerequisites\nProgramming I -> Data Structures\nData Structures -> Algorithms\nAlgorithms -> Machine Learning",
      "A planning tool can follow the connections to explain which courses must come first. It can also detect a cycle if two requirements accidentally depend on each other.",
      "Connections can lead back to places already visited, so a search needs a way to remember what it has already explored.",
      [Q("Why are course prerequisites a graph?", "Each course can be connected to the courses that depend on it."), Q("What could a routing program ask about a road network?", "Whether a destination is reachable or which route leads there."), Q("Why remember visited places?", "To avoid following cycles forever or repeating work.")]
    ),
    "extra-graphs": W(
      "extra-why-matrices-matter", "extra-why-graph-matrices-matter.html", "Why this matters: Relationship Tables",
      "Matrices give programs a compact way to represent many possible relationships when each position has a clear row-and-column meaning.",
      "Recognize a grid of relationships and state what its rows and columns represent.",
      ["matrix", "array", "index"],
      "A table is useful when a program needs to answer many questions of the same form. Rows and columns can represent people, places, pixels, or network nodes, while each cell records the relationship between one row item and one column item.",
      "This idea appears in image processing, scientific computing, scheduling, game boards, and network analysis. A consistent row-and-column convention lets a program look up or update one relationship directly.",
      "Train connections\nrow: departure station\ncolumn: arrival station\ncell: whether a direct train exists",
      "The cell at one row and one column answers one precise question: does this departure have a direct connection to this arrival? The same table can answer every station pair using the same rule.",
      "A table is only as clear as its labels. Decide what rows and columns mean before interpreting any cell.",
      [Q("How can an image be viewed as a matrix?", "Rows and columns identify pixels, and each cell stores information about one pixel."), Q("Why are consistent row and column meanings important?", "Otherwise a program may read or change the wrong relationship."), Q("Name another relationship table.", "For example, a seating chart, schedule, or game board.")]
    )
  };

  const lecture2Readings = [
    R(
      "l02-signature", "lecture-02-function-signature.html", "Start with a Purpose, Signature, and Stub", "necessary",
      "A function design begins by stating its purpose, promising its inputs and result, and adding a placeholder body that compiles.",
      "Write a KDoc purpose, a function signature, and a type-correct stub.",
      ["kdoc", "function-signature", "stub", "return-type"],
      "A <strong>KDoc</strong> purpose tells a future reader what a function computes. The <strong>function signature</strong> names the function, lists its parameters and their types, and promises a return type. A <strong>stub</strong> is a temporary body that returns a placeholder of that promised type.",
      "Writing this plan before an implementation separates the question of what the function should do from the later question of how to compute it. The stub gives the rest of the program a valid function to call while the design is still incomplete.",
      "/**\n * Computes the cost to ship one package.\n */\nfun shippingCost(weightKg: Double, express: Boolean): Double {\n    return 0.0 // stub\n}",
      "The purpose describes the result in ordinary language. The signature promises a decimal result from a weight and an express choice. Returning <code>0.0</code> makes the body type-correct, but it is not yet the shipping-cost calculation.",
      "Choose a placeholder by the promised return type: <code>0</code> for an <code>Int</code>, <code>0.0</code> for a <code>Double</code>, <code>false</code> for a <code>Boolean</code>, or an empty value of the required structured type.",
      [Q("What should the KDoc purpose explain?", "What result the function computes for its caller."), Q("Why does the stub return <code>0.0</code>?", "The signature promises a <code>Double</code> result."), Q("Does the stub solve the shipping-cost problem?", "No. It only gives the unfinished function a body that compiles.")]
    ),
    R(
      "l02-tests-stubs", "lecture-02-tests-and-stubs.html", "Write Examples That Compile Before They Pass", "necessary",
      "Unit tests record the intended behavior before the real implementation exists; a stub lets those tests compile even though they should initially fail.",
      "Write example unit tests that distinguish cases and predict their eventual results.",
      ["test", "stub", "argument"],
      "An example unit test calls a function with one particular input and states the expected result. Because a stub has the correct signature, tests can compile immediately. Because the stub returns a placeholder, tests that expect real behavior should not pass yet.",
      "This is useful evidence, not a problem. Failing examples tell the programmer what the eventual implementation must make true. They also prevent the design from being shaped only by the first code idea that happens to come to mind.",
      "shippingCost(2.0, false) shouldBe 6.5\nshippingCost(2.0, true) shouldBe 12.5",
      "Both calls compile because the stub accepts a <code>Double</code> and a <code>Boolean</code> and returns a <code>Double</code>. With the placeholder return of <code>0.0</code>, both tests fail. That is expected until the real calculation is written.",
      "Examples should make a difference visible. Here, the second example changes only the express choice, showing that express shipping must affect the answer.",
      [Q("Why can the examples compile before the function is implemented?", "The stub already has the correct signature and return type."), Q("Why should these tests fail with the stub?", "The placeholder <code>0.0</code> is not the intended shipping cost."), Q("What difference do the two examples show?", "They show that the express choice changes the result.")]
    ),
    R(
      "l02-parameters-arguments", "lecture-02-parameters-and-arguments.html", "Make a Template and Input Inventory", "necessary",
      "Before coding, list what each input means, what can be learned from it, and which subcomputations or helpers might be useful.",
      "Create pseudocode that inventories inputs and names possible subproblems.",
      ["template", "inventory", "parameter", "helper-function"],
      "An <strong>input inventory</strong> records what each parameter represents and what operations make sense for it. A <strong>template</strong> is short pseudocode that uses that inventory to outline a solution before Kotlin details are chosen.",
      "The inventory keeps a function connected to its inputs. It also reveals potential helpers: a repeated or meaningful subcalculation can receive its own name instead of being buried inside a long final expression.",
      "Input inventory\nweightKg: decimal package weight\nexpress: true or false choice\nPossible helpers: baseCost(weightKg), expressSurcharge(express)\nDesired answer: base cost + express surcharge",
      "The two inputs suggest two different subcomputations. The desired answer combines them. This outline does not yet decide every formula; it records the information available and a path from that information to the result.",
      "A template is planning, not running code. Write it in terms of the problem's ideas so it can guide the implementation that follows.",
      [Q("What does the inventory say <code>weightKg</code> represents?", "The package's decimal weight."), Q("What two subresults might the final answer combine?", "A base cost and an express surcharge."), Q("Why name a helper in a template?", "It gives a meaningful subproblem its own clear place in the design.")]
    ),
    R(
      "l02-return", "lecture-02-return-a-value.html", "Implement by Working Backward", "necessary",
      "Use local names for subcomputations, then build the final return expression from the desired answer back to the available inputs.",
      "Introduce local values and return an expression that combines them.",
      ["expression", "return-type", "decomposition"],
      "Once the template identifies the desired answer, work backward: ask what values are needed for that answer, then ask what expressions can produce those values from the parameters. Name important subcomputations with local <code>val</code>s.",
      "Local names make the body read like the plan. They also let a programmer inspect one subresult at a time when an answer is surprising.",
      "fun shippingCost(weightKg: Double, express: Boolean): Double {\n    val base = if (weightKg <= 1.0) 5.0 else 5.0 + (weightKg - 1.0) * 1.5\n    val expressSurcharge = if (express) 6.0 else 0.0\n    return base + expressSurcharge\n}",
      "The desired answer is total shipping cost, so the return line adds two named pieces. <code>base</code> comes from the weight input. <code>expressSurcharge</code> comes from the express input. Each local name makes one part of the plan visible.",
      "The return expression must produce the type promised by the signature. Here, both local values and their sum are <code>Double</code>s.",
      [Q("What does the final return expression combine?", "The base cost and the express surcharge."), Q("Which local value depends on <code>express</code>?", "<code>expressSurcharge</code>."), Q("Why use local names instead of one long expression?", "They make the meaningful subcomputations easier to read and inspect.")]
    ),
    R(
      "l02-debug-coverage", "lecture-02-debug-and-coverage.html", "Debug and Grow the Test Set", "necessary",
      "After the first implementation passes its original examples, add cases that exercise boundaries and different branches until the function earns confidence.",
      "Use failed tests to debug and add examples that cover distinct cases.",
      ["test", "code-coverage", "boolean"],
      "Debugging compares an actual result with an expected result, then traces the smallest part of the design that could explain the difference. <strong>Code coverage</strong> asks whether tests exercise the important paths through a function, not only the first path that happened to work.",
      "More examples increase confidence when they cover different kinds of input: boundaries, each Boolean choice, empty or nonempty data, and unusual but valid cases. Tests cannot prove every program correct, but they can make untested assumptions visible.",
      "shippingCost(1.0, false) shouldBe 5.0   // weight boundary\nshippingCost(1.0, true) shouldBe 11.0    // express branch\nshippingCost(2.0, false) shouldBe 6.5   // heavier package\nshippingCost(2.0, true) shouldBe 12.5    // both differences",
      "The first two tests examine the boundary at one kilogram and both values of the express choice. The last two test the heavier-package calculation. Together, they exercise the important decisions in the design more thoroughly than two similar examples would.",
      "When a test fails, return to the purpose, examples, inventory, and local subcomputations. The earlier design steps give a map for finding the mistaken assumption.",
      [Q("Why test the weight <code>1.0</code>?", "It is the boundary where the base-cost rule changes."), Q("What does the final example test at once?", "A heavier package and the express choice."), Q("Where can a debugger look after a test fails?", "At the purpose, examples, inventory, and named subcomputations.")]
    ),
    R(
      "l02-helper", "lecture-02-helper-functions.html", "When the Inventory Suggests a Helper", "optional",
      "A helper function is useful when the input inventory reveals a meaningful subproblem that can be named, tested, and reused on its own.",
      "Decide whether a subcomputation deserves its own helper function.",
      ["helper-function", "decomposition", "function-signature"],
      "A <strong>helper function</strong> handles one smaller idea needed by a larger function. The template and inventory are good places to notice helpers because they reveal which subcomputations have a purpose independent of the final answer.",
      "A helper can make the main function read like its purpose, reduce repetition, and let a smaller rule receive focused examples. It should clarify a real concept, not merely hide one operator.",
      "fun baseCost(weightKg: Double): Double {\n    return if (weightKg <= 1.0) 5.0 else 5.0 + (weightKg - 1.0) * 1.5\n}\n\nfun shippingCost(weightKg: Double, express: Boolean): Double {\n    val expressSurcharge = if (express) 6.0 else 0.0\n    return baseCost(weightKg) + expressSurcharge\n}",
      "The inventory named <code>baseCost(weightKg)</code> as a possible subproblem. The helper now gives that idea a signature and separate tests, while <code>shippingCost</code> emphasizes how the two pieces combine.",
      "Keep a calculation inside the main function when extracting it would make the design harder to follow. Extract it when it has a clear name, repeats, or deserves its own examples.",
      [Q("What subproblem does <code>baseCost</code> name?", "The shipping cost determined by package weight before any express surcharge."), Q("Why can a helper be tested independently?", "It has its own inputs, promised result, and focused purpose."), Q("Should every operator become a helper?", "No. A helper should clarify a meaningful concept.")]
    )
  ];

  return [
    {
      id: "l02",
      hub: "lecture-02-functions-tests-helpers.html",
      lecture: "Lecture 2",
      title: "Designing Functions",
      minutes: 11,
      summary: "Four necessary readings separate a function's promise, inputs, result, and examples. The optional reading introduces helpers.",
      cardSummary: "Short readings on signatures, parameters, returns, tests, stubs, and helper functions.",
      goal: "Students arrive able to read a function design and understand what each design-recipe step contributes.",
      nextHref: "lecture-03-04-enums-data-classes.html",
      nextLabel: "Lectures 3-4 reading set",
      readings: [
        R(
          "l02-signature",
          "lecture-02-function-signature.html",
          "Read a Function Signature",
          "necessary",
          "A signature names a function and states the types of its inputs and result.",
          "Read a Kotlin function signature from left to right.",
          ["function-signature", "parameter", "return-type"],
          "A <strong>function signature</strong> is the first line of a function definition. It is a compact promise: the function's name, the names and types of its parameters, and the type of value it returns.",
          "Reading the signature before the body lets you understand how a function can be used without first following every calculation inside it.",
          `fun shippingCost(weightKg: Double, express: Boolean): Double`,
          "The function is named <code>shippingCost</code>. It receives a decimal weight and a true-or-false express choice. The final <code>Double</code> says that every completed call must produce a decimal number.",
          "The colon after a parameter introduces that parameter's type. The colon after the closing parenthesis introduces the return type.",
          [
            Q("How many parameters does <code>shippingCost</code> have?", "Two: <code>weightKg</code> and <code>express</code>."),
            Q("What type must the function return?", "<code>Double</code>."),
            Q("Which part is the function's name?", "<code>shippingCost</code>.")
          ]
        ),
        R(
          "l02-parameters-arguments",
          "lecture-02-parameters-and-arguments.html",
          "Parameters and Arguments",
          "necessary",
          "Parameters are names in a definition; arguments are values supplied by a call.",
          "Match each argument in a function call to its parameter.",
          ["parameter", "argument", "call"],
          "A <strong>parameter</strong> is a local name listed in a function definition. An <strong>argument</strong> is the value placed in that position when the function is called.",
          "The distinction matters when reading examples: the definition describes a general computation, while each call supplies one particular set of values.",
          `fun greet(name: String, excited: Boolean): String {
    return if (excited) "Hello, " + name + "!" else "Hello, " + name
}

greet("Mina", true)`,
          "During this call, <code>name</code> refers to <code>\"Mina\"</code> and <code>excited</code> refers to <code>true</code>. The arguments match parameters by position.",
          "The parameter names exist inside the function body. The argument expressions are written at the call site.",
          [
            Q("In the definition, which parameter has type <code>Boolean</code>?", "<code>excited</code>."),
            Q("In the call, which argument is matched with <code>name</code>?", "<code>\"Mina\"</code>."),
            Q("What value does the call produce?", "<code>\"Hello, Mina!\"</code>.")
          ]
        ),
        R(
          "l02-return",
          "lecture-02-return-a-value.html",
          "Return a Value",
          "necessary",
          "A return expression supplies the result promised by the function signature.",
          "Write and identify a return expression.",
          ["return-type", "expression"],
          "The keyword <code>return</code> sends a value back to the place where a function was called. The returned expression must produce the type promised after the signature's final colon.",
          "Returning is different from printing. A returned value can be saved, tested, or used inside another expression; printed text is only displayed.",
          `fun minutesToSeconds(minutes: Int): Int {
    return minutes * 60
}

val duration = minutesToSeconds(3)`,
          "The body substitutes the argument <code>3</code> for <code>minutes</code>, computes <code>3 * 60</code>, and returns <code>180</code>. The name <code>duration</code> receives that result.",
          "<code>println(minutes * 60)</code> would display a number but would not satisfy this function's promised <code>Int</code> result.",
          [
            Q("What expression is returned?", "<code>minutes * 60</code>."),
            Q("What value is saved in <code>duration</code>?", "<code>180</code>."),
            Q("Could this function return <code>\"180\"</code>?", "No. That is a <code>String</code>, but the signature promises an <code>Int</code>.")
          ]
        ),
        R(
          "l02-tests-stubs",
          "lecture-02-tests-and-stubs.html",
          "Example Tests and Stubs",
          "necessary",
          "A stub lets a function compile before its real body is designed; tests record intended examples.",
          "Recognize a temporary stub and write an example test.",
          ["stub", "test", "function-signature"],
          "A <strong>stub</strong> is a temporary body that returns a simple value of the correct type. It keeps the signature usable while the design is still in progress. Example tests state what selected calls should eventually produce.",
          "Writing examples before implementation clarifies the problem. The stub is not an attempted solution; it is a clearly temporary placeholder.",
          `fun isLongWord(word: String): Boolean {
    return false // stub
}

"pencil".length &gt; 7 shouldBe false
"encyclopedia".length &gt; 7 shouldBe true`,
          "The tests show both sides of the intended distinction. A later implementation of <code>isLongWord</code> should make equivalent calls pass, but the stub only satisfies Kotlin's need for a Boolean return.",
          "Choose a stub by return type: <code>0</code> for an <code>Int</code>, <code>\"\"</code> for a <code>String</code>, or <code>false</code> for a <code>Boolean</code>.",
          [
            Q("Why does the stub return <code>false</code>?", "Because the signature promises a <code>Boolean</code>."),
            Q("Does the stub solve the word-length problem?", "No. It is only a temporary type-correct body."),
            Q("What boundary do the examples suggest?", "Words longer than 7 characters count as long.")
          ]
        ),
        R(
          "l02-helper",
          "lecture-02-helper-functions.html",
          "Name a Subproblem with a Helper",
          "optional",
          "A helper function gives a reusable subcalculation its own name and tests.",
          "Extract a named helper for a meaningful subproblem.",
          ["helper-function", "decomposition"],
          "A <strong>helper function</strong> handles a smaller concept needed by another function. A good helper has a meaningful name, a clear signature, and behavior that can be tested independently.",
          "Helpers reduce repetition and let the main function read more like the problem statement. They are most useful when the subproblem has a recognizable idea of its own.",
          `fun rectangleArea(width: Double, height: Double): Double {
    return width * height
}

fun boxLabelArea(width: Double, height: Double): Double {
    return 2 * rectangleArea(width, height)
}`,
          "<code>boxLabelArea</code> delegates the reusable rectangle calculation to <code>rectangleArea</code>. The main body now emphasizes that two equal rectangular labels are needed.",
          "Extracting every tiny operator would add noise. Name a helper when the subcalculation has meaning, repeats, or deserves its own examples.",
          [
            Q("Which function is the helper?", "<code>rectangleArea</code>."),
            Q("What subproblem does it name?", "Computing the area of one rectangle."),
            Q("What does <code>boxLabelArea(3.0, 2.0)</code> return?", "<code>12.0</code>.")
          ]
        )
      ]
    },
    {
      id: "l03-04",
      hub: "lecture-03-04-enums-data-classes.html",
      lecture: "Lectures 3-4",
      title: "Choices and Product Data",
      minutes: 13,
      summary: "Five necessary readings introduce fixed choices, case analysis, and values that carry several fields. Optional readings explore structural equality, named arguments, data-class copy, and product data in wider computing.",
      cardSummary: "Short readings on enums, exhaustive when expressions, data classes, fields, named arguments, copy, and product data.",
      goal: "Students arrive able to define small data types and follow functions that consume or produce those values.",
      nextHref: "lecture-05-conditions-nested-data.html",
      nextLabel: "Lecture 5 reading set",
      readings: [
        R(
          "l03-enum",
          "lecture-03-enum-classes.html",
          "An Enum Is One Choice from a Fixed Set",
          "necessary",
          "An enum type lists every allowed value when the choices are few and known.",
          "Define and construct values from an enum class.",
          ["enum", "type", "value"],
          "An <strong>enum class</strong> defines a type whose values come from a short, fixed list. Each listed name is one complete value of that type.",
          "Enums prevent misspellings and impossible alternatives. Kotlin can verify that a value is one of the choices the program understands.",
          `enum class Season { WINTER, SPRING, SUMMER, FALL }

val semesterStart: Season = Season.FALL`,
          "<code>Season</code> is the type. <code>Season.FALL</code> is one value. Dot notation identifies the enum value through its type.",
          "Use an enum when the list of possibilities is closed. A free-form String such as <code>\"autumn-ish\"</code> would not be a <code>Season</code>.",
          [
            Q("What is the type of <code>Season.SPRING</code>?", "<code>Season</code>."),
            Q("How many values can this enum represent?", "Four."),
            Q("Write the enum value for winter.", "<code>Season.WINTER</code>.")
          ]
        ),
        R(
          "l03-when",
          "lecture-03-exhaustive-when.html",
          "Use when for Exhaustive Case Analysis",
          "necessary",
          "A when expression can give one result for every enum value.",
          "Write an exhaustive when expression over an enum.",
          ["case-analysis", "enum", "expression"],
          "<strong>Case analysis</strong> means handling each possible form of data separately. A <code>when</code> expression is exhaustive when it includes every value the input can have.",
          "Because Kotlin knows every enum value, it can warn when a branch is missing. This makes the structure of the data guide the structure of the function.",
          `fun clothing(season: Season): String {
    return when (season) {
        Season.WINTER -&gt; "coat"
        Season.SPRING -&gt; "jacket"
        Season.SUMMER -&gt; "shorts"
        Season.FALL -&gt; "sweater"
    }
}`,
          "Each branch matches one possible <code>Season</code> and produces a <code>String</code>. The entire <code>when</code> is an expression, so its result can be returned.",
          "For an enum, listing every case is usually clearer than adding a broad <code>else</code> branch that hides a missing value.",
          [
            Q("What type does the <code>when</code> expression produce?", "<code>String</code>."),
            Q("What does <code>clothing(Season.SUMMER)</code> return?", "<code>\"shorts\"</code>."),
            Q("Why is no <code>else</code> needed?", "Every possible <code>Season</code> value has its own branch.")
          ]
        ),
        R(
          "l04-data-class",
          "lecture-04-data-classes.html",
          "A Data Class Combines Several Fields",
          "necessary",
          "A data class defines one kind of value by naming the pieces carried together.",
          "Define a product-data type with a Kotlin data class.",
          ["data-class", "field", "constructor"],
          "A <strong>data class</strong> combines several fields into one value. Each field has a name and type. Together, the fields describe all the information needed for one instance.",
          "This is product data: making one value requires a value for every field. Grouping related fields prevents long collections of unrelated local names.",
          `data class Book(
    val title: String,
    val pages: Int,
    val format: String
)`,
          "Every <code>Book</code> has a title, page count, and format. The field names document what each position means, and their types limit what can be stored there.",
          "The class definition creates a new type. It does not yet create a particular book value.",
          [
            Q("How many fields does <code>Book</code> have?", "Three."),
            Q("What is the type of <code>pages</code>?", "<code>Int</code>."),
            Q("Does this definition create a specific book?", "No. It defines the shape of all <code>Book</code> values.")
          ]
        ),
        R(
          "l04-construct-select",
          "lecture-04-construct-and-select-fields.html",
          "Construct a Value and Select Its Fields",
          "necessary",
          "The class name constructs a data value; dot notation selects one field from it.",
          "Construct a data-class value and retrieve a field.",
          ["constructor", "field", "object"],
          "Calling a data class's name invokes its <strong>constructor</strong>, which creates a value from one argument per field. Dot notation then selects a named field from that object.",
          "Construction puts information together. Field selection takes one piece back out. These are the basic producer and consumer operations for product data.",
          `val handbook = Book("Kotlin Pocket Guide", 144, "paperback")

val count = handbook.pages
val label = handbook.title`,
          "The three constructor arguments match the fields in order. <code>handbook.pages</code> produces <code>144</code>, while <code>handbook.title</code> produces the book's title.",
          "Use field names when reading data. The original constructor position no longer needs to be remembered.",
          [
            Q("What is the type of <code>handbook</code>?", "<code>Book</code>."),
            Q("What value does <code>handbook.format</code> produce?", "<code>\"paperback\"</code>."),
            Q("Which expression retrieves the title?", "<code>handbook.title</code>.")
          ]
        ),
        R(
          "l04-produce-data",
          "lecture-04-produce-new-data.html",
          "Produce a New Data Value from an Old One",
          "necessary",
          "Functional programs represent an update by constructing a new value from selected old fields and new results.",
          "Build a new data object without changing the original.",
          ["data-class", "immutable", "call"],
          "With immutable data, a function does not edit its input object. It constructs and returns a new object, reusing unchanged fields and computing the fields that should differ.",
          "This makes the before and after states separate values. Tests can compare them directly, and calling the function does not surprise other code that still uses the original.",
          `fun addAppendix(book: Book, extraPages: Int): Book {
    return Book(
        book.title,
        book.pages + extraPages,
        book.format
    )
}`,
          "The new <code>Book</code> keeps the old title and format. Only the page count is computed differently. The input <code>book</code> remains unchanged.",
          "Work backward from the output constructor: decide what expression belongs in each field position.",
          [
            Q("Which field changes?", "<code>pages</code>."),
            Q("Does the function alter its <code>book</code> argument?", "No. It returns a new <code>Book</code>."),
            Q("What is the result type?", "<code>Book</code>.")
          ]
        ),
        R(
          "l04-equality",
          "lecture-04-data-class-equality.html",
          "Data-Class Equality",
          "optional",
          "Two data-class values compare as equal when all corresponding fields are equal.",
          "Predict equality comparisons between data-class values.",
          ["data-class", "boolean"],
          "Kotlin data classes automatically support structural equality. The <code>==</code> operator compares corresponding field values rather than asking whether two names were created by the same constructor call.",
          "Structural equality is especially useful in tests: an expected object can be written directly as a constructor expression.",
          `val first = Book("Tiny Types", 80, "ebook")
val second = Book("Tiny Types", 80, "ebook")
val third = Book("Tiny Types", 81, "ebook")

first == second  // true
first == third   // false`,
          "<code>first</code> and <code>second</code> have matching values in all three fields. The one-page difference makes <code>third</code> unequal.",
          "Every field participates in the generated equality check.",
          [
            Q("Why are <code>first</code> and <code>second</code> equal?", "All corresponding fields contain equal values."),
            Q("Which field makes <code>third</code> different?", "<code>pages</code>."),
            Q("What type does <code>first == second</code> produce?", "<code>Boolean</code>.")
          ]
        ),
        R(
          "l04-named-arguments",
          "lecture-04-named-constructor-arguments.html",
          "Construct a Book with Named Arguments",
          "optional",
          "Named arguments identify the constructor parameter that receives each value.",
          "Use named arguments to construct a Book object clearly and in a different argument order.",
          ["named-argument", "constructor", "data-class", "argument"],
          "A <strong>named argument</strong>, sometimes called a keyword argument, writes a parameter name before its value. In a constructor call, each name identifies the field that receives that argument.",
          "Named arguments make long constructor calls easier to read and reduce mistakes caused by remembering field order. When all arguments are named, they may be written in an order chosen for readability.",
          `val handbook = Book(
    format = "paperback",
    title = "Kotlin Field Guide",
    pages = 176
)`,
          "The <code>Book</code> data class lists its fields as title, pages, and format, but this call writes format first. Kotlin uses the argument names rather than their positions, producing <code>Book(\"Kotlin Field Guide\", 176, \"paperback\")</code>.",
          "The equals signs inside the call attach values to parameter names. They are named arguments, not later assignments to an existing object.",
          [
            Q("What is <code>handbook.title</code>?", "<code>\"Kotlin Field Guide\"</code>."),
            Q("Why may <code>format</code> appear before <code>title</code>?", "Every argument is named, so Kotlin matches by name rather than position."),
            Q("Rewrite <code>Book(\"Small Programs\", 120, \"ebook\")</code> using named arguments.", "<code>Book(title = \"Small Programs\", pages = 120, format = \"ebook\")</code>.")
          ]
        ),
        R(
          "l04-copy",
          "lecture-04-copy-with-named-arguments.html",
          "Use copy with Named Arguments",
          "optional",
          "A data class's copy function creates a new object, preserves unspecified fields, and replaces fields named in the call.",
          "Use copy and a named argument to replace one field without changing the original object.",
          ["copy", "named-argument", "data-class", "immutable"],
          "Kotlin automatically gives every data class a <code>copy</code> function. It creates a new object with the same field values as the receiver. A <strong>named argument</strong>, sometimes called a keyword argument, identifies any field whose value should be replaced.",
          "Copy supports functional updating: the original value remains unchanged, while the new value clearly records which field differs.",
          `val original = Book("Tiny Types", 80, "ebook")
val expanded = original.copy(pages = 96)`,
          "The call uses <code>original</code> as its starting point. Because only <code>pages</code> is named, <code>expanded.title</code> remains <code>\"Tiny Types\"</code> and <code>expanded.format</code> remains <code>\"ebook\"</code>. The original still has 80 pages.",
          "Kotlin calls <code>pages = 96</code> a named argument. It names the field being replaced, so you do not need to repeat every unchanged constructor argument.",
          [
            Q("What is <code>expanded.pages</code>?", "<code>96</code>."),
            Q("What is <code>expanded.format</code>?", "<code>\"ebook\"</code>, copied from the original."),
            Q("Does <code>original.pages</code> change?", "No. It remains <code>80</code>.")
          ]
        ),
        R(
          "l04-product-types-in-computer-science",
          "lecture-04-product-types-in-computer-science.html",
          "Why this matters: Product Data in Computer Science",
          "optional",
          "Later computer science courses use product data to represent records, database rows, messages, and measurements: several facts about one thing that must stay together.",
          "Identify a situation where a record shape makes it easier to move, store, or compare related information.",
          ["product-data", "record", "field"],
          "Many programs need to remember several facts about one real-world thing. A <strong>record</strong> gives those facts one shared home, so a program can pass around one shipment, one student, one event, or one reading instead of several unrelated pieces of information.",
          "This organization appears in databases, web-service messages, file formats, and scientific data. When the facts naturally belong to the same thing, keeping them together makes it clearer what information is complete and what information is missing.",
          `One shipment record\ntracking number: 5Z01\ndestination: Worcester\ndelivery status: out for delivery`,
          "A shipping system, a table, and a tracking message can all use the same record-shaped information. The record can move from one part of a program to another without losing the connection between the tracking number, destination, and status.",
          "This shape is useful when the facts must coexist. A shipment record is incomplete if it has only a destination but no tracking number or status.",
          [
            Q("Why might a database keep one row for each shipment?", "Each row can keep all the related facts about one shipment together."),
            Q("Name two fields a calendar-event record would need.", "For example, a title and a start time; it might also include a location or attendees."),
            Q("What problem does a record help avoid?", "Separating related facts so that it becomes unclear which facts describe the same thing.")
          ]
        )
      ]
    },
    {
      id: "l05",
      hub: "lecture-05-conditions-nested-data.html",
      lecture: "Lecture 5",
      title: "Conditions and Nested Data",
      minutes: 11,
      summary: "Four necessary readings cover guarded decisions, Boolean combinations, String questions, and fields inside fields. The optional reading explains short-circuiting.",
      cardSummary: "Short readings on ordered conditions, Boolean operators, String predicates, and nested field selection.",
      goal: "Students arrive able to read a multi-branch decision and build conditions from data inside nested objects.",
      nextHref: "lecture-06-07-sum-types.html",
      nextLabel: "Lectures 6-7 reading set",
      readings: [
        R(
          "l05-when-guards",
          "lecture-05-when-guards.html",
          "Order Boolean Guards in a when",
          "necessary",
          "A guard-style when checks Boolean conditions from top to bottom and uses the first true branch.",
          "Write and trace an ordered guard-style when expression.",
          ["case-analysis", "boolean", "predicate"],
          "A <code>when</code> without a subject can use Boolean conditions as guards. Kotlin checks the guards from top to bottom. The first guard that produces <code>true</code> determines the result.",
          "Order matters when conditions overlap. Place more specific or higher-priority cases before broader fallback cases.",
          `fun ticketPrice(age: Int): Int {
    return when {
        age &lt; 0 -&gt; 0
        age &lt; 13 -&gt; 8
        age &lt; 65 -&gt; 14
        else -&gt; 10
    }
}`,
          "An age of 9 matches the second branch. An age of 70 reaches <code>else</code>. Once a branch matches, later guards are not considered.",
          "Read each branch as an if-then sentence and ask whether an earlier branch already covers the same input.",
          [
            Q("What does <code>ticketPrice(12)</code> return?", "<code>8</code>."),
            Q("What does <code>ticketPrice(65)</code> return?", "<code>10</code>."),
            Q("Why is the negative-age branch first?", "It is a special case that would otherwise also satisfy <code>age &lt; 13</code>.")
          ]
        ),
        R(
          "l05-boolean-operators",
          "lecture-05-boolean-operators.html",
          "Combine Conditions with Boolean Operators",
          "necessary",
          "The operators &&, ||, and ! build larger Boolean expressions from smaller ones.",
          "Use AND, OR, and NOT in Kotlin conditions.",
          ["boolean-operator", "boolean", "expression"],
          "Kotlin writes Boolean AND as <code>&amp;&amp;</code>, OR as <code>||</code>, and NOT as <code>!</code>. Each operator produces a new Boolean value.",
          "Combined conditions let a function state a precise rule, such as requiring two facts together or accepting either of two alternatives.",
          `val hasTicket = true
val doorOpen = false

hasTicket &amp;&amp; doorOpen
hasTicket || doorOpen
!doorOpen`,
          "The first expression is <code>false</code> because both facts are not true. The second is <code>true</code> because at least one is true. The third reverses <code>false</code> to <code>true</code>.",
          "Parentheses make grouping explicit when an expression mixes <code>&amp;&amp;</code> and <code>||</code>.",
          [
            Q("What does <code>true &amp;&amp; false</code> produce?", "<code>false</code>."),
            Q("What does <code>false || true</code> produce?", "<code>true</code>."),
            Q("What does <code>!true</code> produce?", "<code>false</code>.")
          ]
        ),
        R(
          "l05-string-predicates",
          "lecture-05-string-predicates.html",
          "Ask Boolean Questions about Strings",
          "necessary",
          "String methods such as contains, startsWith, and endsWith act as predicates.",
          "Call String predicates and interpret their Boolean results.",
          ["predicate", "method", "boolean"],
          "A <strong>predicate</strong> is a function or method that answers a yes-or-no question. Kotlin Strings provide predicates for common text questions.",
          "These methods keep text rules readable and avoid manually inspecting individual characters for everyday searches.",
          `val filename = "notes-final.txt"

filename.startsWith("notes")
filename.endsWith(".txt")
filename.contains("FINAL", ignoreCase = true)`,
          "All three expressions produce Booleans. The named argument <code>ignoreCase = true</code> makes the final search ignore capitalization.",
          "The punctuation is part of the searched text: <code>endsWith(\"txt\")</code> and <code>endsWith(\".txt\")</code> ask slightly different questions.",
          [
            Q("Which expression checks the file extension?", "<code>filename.endsWith(\".txt\")</code>."),
            Q("What type do all three calls return?", "<code>Boolean</code>."),
            Q("Why does the final call find lowercase <code>final</code>?", "It uses <code>ignoreCase = true</code>.")
          ]
        ),
        R(
          "l05-nested-fields",
          "lecture-05-nested-field-selection.html",
          "Follow Fields inside Fields",
          "necessary",
          "Nested data is selected one field at a time with a chain of dots.",
          "Read and write a nested field-selection expression.",
          ["nested-data", "field", "data-class"],
          "A data-class field can itself contain another data-class value. This creates <strong>nested data</strong>. Dot notation follows one layer at a time from the outer object to the desired inner field.",
          "Inventorying the available fields at each layer prevents guessing. Ask what type each selection produces before choosing the next dot.",
          `data class Address(val city: String, val zip: Int)
data class Student(val name: String, val address: Address)

val learner = Student("Rae", Address("Worcester", 1609))
val city = learner.address.city`,
          "<code>learner.address</code> produces an <code>Address</code>. Because an Address has a <code>city</code> field, the next selection produces <code>\"Worcester\"</code>.",
          "A field chain is read left to right. Each step must be valid for the type produced by the previous step.",
          [
            Q("What is the type of <code>learner.address</code>?", "<code>Address</code>."),
            Q("Which expression retrieves the zip code?", "<code>learner.address.zip</code>."),
            Q("What value does that expression produce?", "<code>1609</code>.")
          ]
        ),
        R(
          "l05-short-circuit",
          "lecture-05-short-circuit-logic.html",
          "Short-Circuit Boolean Logic",
          "optional",
          "Short-circuit operators sometimes decide an answer without evaluating their right side.",
          "Predict when the right side of && or || will run.",
          ["short-circuit", "boolean-operator", "call"],
          "<strong>Short-circuiting</strong> means Kotlin stops evaluating a Boolean expression once the final answer is already known. For <code>&amp;&amp;</code>, a false left side decides the result. For <code>||</code>, a true left side decides it.",
          "This behavior can avoid unnecessary work and can protect a later expression that is only safe under an earlier condition.",
          `val names = listOf&lt;String&gt;()

names.isNotEmpty() &amp;&amp; names[0].startsWith("A")`,
          "Because the list is empty, <code>names.isNotEmpty()</code> is false. Kotlin does not evaluate <code>names[0]</code>, so the unsafe access is avoided.",
          "The word operators <code>and</code> and <code>or</code> do not short-circuit in the same way as <code>&amp;&amp;</code> and <code>||</code>.",
          [
            Q("When does the right side of <code>false &amp;&amp; ...</code> run?", "It does not run."),
            Q("When does the right side of <code>true || ...</code> run?", "It does not run."),
            Q("Why is the example safe for an empty list?", "The false left guard prevents evaluation of <code>names[0]</code>.")
          ]
        )
      ]
    },
    {
      id: "l06-07",
      hub: "lecture-06-07-sum-types.html",
      lecture: "Lectures 6-7",
      title: "Sum Types",
      minutes: 11,
      summary: "Four necessary readings introduce sealed interfaces, variants, smart casts, and exhaustive case analysis. Optional readings compare sum and product data, explain a common variant-field compiler error, and connect sum types to common program states.",
      cardSummary: "Short readings on sealed interfaces, variants, type checks, smart casts, functions over sum data, and program states.",
      goal: "Students arrive able to represent data that comes in several forms and write one branch for each form.",
      nextHref: "lecture-08-09-recursion-lists.html",
      nextLabel: "Lectures 8-9 reading set",
      readings: [
        R(
          "l06-sealed",
          "lecture-06-sealed-interfaces.html",
          "One Type with Several Variants",
          "necessary",
          "A sealed interface defines a shared type whose complete set of variants is known.",
          "Recognize a sealed-interface definition as a sum type.",
          ["sum-type", "sealed-interface", "variant"],
          "A <strong>sum type</strong> represents a value that can have one of several forms. In Kotlin, a <strong>sealed interface</strong> states the shared type and limits which variants may implement it.",
          "Knowing the complete set of variants lets Kotlin check whether later case analysis handles every possible form.",
          `sealed interface Payment {
    data class Cash(val dollars: Int): Payment
    data class Card(val lastFour: String): Payment
    data class GiftCode(val code: String): Payment
}`,
          "Every value whose static type is <code>Payment</code> is a Cash, Card, or GiftCode value. Each variant carries fields appropriate to that form.",
          "The word sealed describes a closed family of variants, not an object that can never change.",
          [
            Q("How many Payment variants are defined?", "Three."),
            Q("Which variant carries an <code>Int</code> field?", "<code>Payment.Cash</code>."),
            Q("Can an arbitrary String be used where a <code>Payment</code> is expected?", "No. It is not one of the variants.")
          ]
        ),
        R(
          "l06-construct-variants",
          "lecture-06-construct-sum-variants.html",
          "Construct Variants and Use Type Aliases",
          "necessary",
          "Each sum-type variant has its own constructor; a typealias can shorten a long nested name.",
          "Construct variant values and read a Kotlin typealias.",
          ["variant", "constructor", "type-alias"],
          "A variant value is constructed with its variant's class name and required fields. When variants are nested inside a sealed interface, their full names include the shared type. A <strong>typealias</strong> supplies a shorter name for an existing type.",
          "Aliases can make examples easier to read, but they do not create a new type or a new kind of value.",
          `typealias CardPayment = Payment.Card

val lunch = Payment.Cash(12)
val supplies = CardPayment("4821")`,
          "<code>lunch</code> and <code>supplies</code> both have the shared type <code>Payment</code> when used in a general context. The alias simply lets the second constructor be written more briefly.",
          "A typealias is another spelling for a type. It does not convert values.",
          [
            Q("What full type does <code>CardPayment</code> name?", "<code>Payment.Card</code>."),
            Q("Which value contains <code>12</code> dollars?", "<code>lunch</code>."),
            Q("Does the alias add a fourth Payment variant?", "No.")
          ]
        ),
        R(
          "l07-smart-casts",
          "lecture-07-is-and-smart-casts.html",
          "Use is to Identify a Variant",
          "necessary",
          "An is check identifies a value's current variant and gives access to that variant's fields.",
          "Use an is branch and select fields made available by a smart cast.",
          ["smart-cast", "variant", "field"],
          "The <code>is</code> operator asks whether a value has a particular variant type. Inside a branch where that check is true, Kotlin performs a <strong>smart cast</strong>: the value can be used as the more specific variant.",
          "Smart casts make variant-specific fields available without a manual conversion.",
          `fun receiptLabel(payment: Payment): String {
    return when (payment) {
        is Payment.Cash -&gt; "$" + payment.dollars
        is Payment.Card -&gt; "card " + payment.lastFour
        is Payment.GiftCode -&gt; "gift " + payment.code
    }
}`,
          "In the Cash branch, <code>payment.dollars</code> is valid. That field would not be available before Kotlin knew which Payment variant it had.",
          "Only select fields belonging to the variant named by the current branch.",
          [
            Q("Which branch may use <code>payment.lastFour</code>?", "The <code>Payment.Card</code> branch."),
            Q("What does <code>is Payment.Cash</code> test?", "Whether the current Payment value is the Cash variant."),
            Q("Why can the branch access Cash fields?", "Kotlin smart-casts the value to the specific variant.")
          ]
        ),
        R(
          "l07-sum-template",
          "lecture-07-sum-type-template.html",
          "Consume and Produce Sum Data",
          "necessary",
          "The template for a sealed sum type has one exhaustive when branch per variant.",
          "Write a function template over a sealed interface and return shared-type values.",
          ["case-analysis", "sum-type", "return-type"],
          "A function that consumes sealed sum data follows the data definition: write a <code>when</code> with one branch per variant. Each branch inventories the fields available in that form.",
          "A function may also produce the shared type. Different branches can construct different variants because every variant satisfies the promised shared return type.",
          `fun redact(payment: Payment): Payment {
    return when (payment) {
        is Payment.Cash -&gt; payment
        is Payment.Card -&gt; Payment.Card("0000")
        is Payment.GiftCode -&gt; Payment.GiftCode("hidden")
    }
}`,
          "The function returns a Payment in every branch, but the particular variant may differ. No original object is changed; new values are constructed where needed.",
          "First make the branches exhaustive. Then solve each branch using only that variant's inventory.",
          [
            Q("What is the function's return type?", "<code>Payment</code>."),
            Q("Which branch returns its input unchanged?", "The Cash branch."),
            Q("Why can Card and GiftCode constructors both be returned?", "Both variants implement the shared <code>Payment</code> type.")
          ]
        ),
        R(
          "l07-smart-cast-error",
          "lecture-07-smart-cast-variant-field-error.html",
          "Why a Variant Field Needs a Smart Cast",
          "optional",
          "Kotlin reports an unresolved reference when code tries to select a variant-only field before checking the variant.",
          "Read the compiler error for a variant field and fix it with an is check.",
          ["compile-time-error", "smart-cast", "variant", "field"],
          "A <strong>compile-time error</strong> is a problem Kotlin finds before the program can run. A value with type <code>Payment</code> might be any Payment variant, so Kotlin rejects <code>payment.dollars</code> before it knows that the value is Cash.",
          "The compiler is protecting the program from guessing. Card and GiftCode values do not have a <code>dollars</code> field, so selecting that field from every Payment would be unsafe.",
          `fun amountLabel(payment: Payment): String {
    // payment.dollars
    // Error: Unresolved reference: dollars

    return if (payment is Payment.Cash) {
        "$" + payment.dollars
    } else {
        "not cash"
    }
}`,
          "Before the <code>is Payment.Cash</code> check, Kotlin only knows that <code>payment</code> is a Payment. Inside the true branch, Kotlin smart-casts it to <code>Payment.Cash</code>, so <code>payment.dollars</code> is valid there.",
          "A smart cast gives access only within the branch justified by the type check. In a Card branch, use <code>payment.lastFour</code> instead; in a GiftCode branch, use <code>payment.code</code>.",
          [
            Q("Why does <code>payment.dollars</code> fail before the <code>is</code> check?", "The type <code>Payment</code> does not promise a <code>dollars</code> field; only <code>Payment.Cash</code> does."),
            Q("What does Kotlin know inside the true branch?", "That <code>payment</code> is a <code>Payment.Cash</code> value, so it smart-casts the value."),
            Q("Which field can a <code>Payment.Card</code> branch use?", "<code>payment.lastFour</code>.")
          ]
        ),
        R(
          "l06-sum-product",
          "lecture-06-sum-versus-product-data.html",
          "Sum Data versus Product Data",
          "optional",
          "Product data carries every field together; sum data chooses one variant from several forms.",
          "Distinguish product data from sum data in a problem statement.",
          ["sum-type", "data-class", "variant"],
          "A data class is often called <strong>product data</strong>: constructing one value requires all its fields. A sealed family is sum data: constructing one value requires choosing one variant.",
          "The distinction guides design. Use product data for facts that coexist, and sum data for alternatives with different shapes.",
          `data class Coordinate(val x: Int, val y: Int)

sealed interface Result {
    data class Success(val message: String): Result
    data class Failure(val reason: String): Result
}`,
          "A Coordinate has both x and y. A Result is either Success or Failure, not both at once.",
          "Ask whether the word joining the data descriptions is naturally 'and' or 'or.'",
          [
            Q("Is Coordinate product or sum data?", "Product data."),
            Q("Is Result product or sum data?", "Sum data."),
            Q("Can one Result value be both variants?", "No.")
          ]
        ),
        R(
          "l07-sum-types-in-computer-science",
          "lecture-07-sum-types-in-computer-science.html",
          "Why this matters: Sum Types in Computer Science",
          "optional",
          "Later computer science courses use sum types to make possible states and outcomes explicit, especially when different situations need different information.",
          "Identify a process with a small set of meaningful alternatives and explain why each alternative needs separate handling.",
          ["sum-type", "variant", "state"],
          "Programs constantly meet situations that are not all alike: a request may be loading, successful, or unsuccessful; a parser may recognize valid input or report an error; a search may find a result or come up empty. Treating these as named alternatives makes the program's possibilities visible.",
          "This approach is useful in user interfaces, networking, file processing, compilers, and error handling. A program can give each state the information it needs, then deliberately decide what to do in each case.",
          `Possible states of a file upload\nwaiting to begin\ntransferring\ncomplete -> file location\nfailed -> error explanation`,
          "A screen can show a start button while waiting, a progress indicator while transferring, a link when complete, or helpful feedback when failed. Those responses differ because the situations differ; one generic status label would hide the important distinctions.",
          "Naming alternatives prevents a common mistake: acting as though every operation produced a successful result, even when it could be waiting or could fail.",
          [
            Q("Why should a failed upload have an error explanation rather than a file location?", "A failure and a completed upload need different information."),
            Q("Name another process that has several meaningful states.", "For example, a quiz submission can be editing, submitting, accepted, or rejected."),
            Q("What problem does naming states help avoid?", "Forgetting to handle an important possibility such as an error, an empty result, or work still in progress.")
          ]
        )
      ]
    },
    {
      id: "l08-09",
      hub: "lecture-08-09-recursion-lists.html",
      lecture: "Lectures 8-9",
      title: "Recursion and Recursive Lists",
      minutes: 11,
      summary: "Four necessary readings introduce base cases, recursive data, templates, and common list patterns. The optional reading traces calls step by step.",
      cardSummary: "Short readings on recursive progress, custom list data, templates, and reusable list patterns.",
      goal: "Students arrive able to follow the shape of recursive data into the shape of a recursive function.",
      nextHref: "lecture-10-helper-functions-list-averages.html",
      nextLabel: "Lecture 10 reading set",
      readings: [
        R(
          "l08-recursive-progress",
          "lecture-08-base-case-and-progress.html",
          "A Recursive Function Needs a Base Case and Progress",
          "necessary",
          "Recursion stops at a simple base case and otherwise calls the same function on a smaller problem.",
          "Identify the base case and the expression that makes recursive progress.",
          ["recursion", "base-case", "recursive-case"],
          "<strong>Recursion</strong> occurs when a function calls itself. A recursive design needs a <strong>base case</strong> that returns directly and a recursive case that moves toward that base case.",
          "Without a stopping case or progress, the function keeps calling itself until the program runs out of space.",
          `fun countDownSum(n: Int): Int {
    return when (n) {
        0 -&gt; 0
        else -&gt; n + countDownSum(n - 1)
    }
}`,
          "The base case handles 0. The recursive call uses <code>n - 1</code>, a smaller nonnegative number. The current <code>n</code> is combined with the answer for the smaller problem.",
          "A recursive call should not merely repeat the original input.",
          [
            Q("What is the base case?", "<code>n == 0</code>, which returns <code>0</code>."),
            Q("What makes progress?", "The recursive call uses <code>n - 1</code>."),
            Q("What does <code>countDownSum(3)</code> return?", "<code>6</code>.")
          ]
        ),
        R(
          "l09-recursive-data",
          "lecture-09-recursive-list-data.html",
          "Define a Recursive List",
          "necessary",
          "A recursive list is either empty or a node containing one item and the rest of the list.",
          "Read a sealed recursive-list data definition.",
          ["recursive-data", "sum-type", "node"],
          "<strong>Recursive data</strong> contains a smaller value of the same type. A custom list is a sum type with an empty variant and a node variant whose <code>rest</code> field is another list.",
          "The definition represents any finite length because each node can point to another node, eventually ending in Empty.",
          `sealed interface WordList
data object Empty: WordList
data class WordNode(val first: String, val rest: WordList): WordList

val twoWords = WordNode("design", WordNode("data", Empty))`,
          "The outer node stores <code>\"design\"</code>. Its rest is a one-word list, whose rest is Empty.",
          "The recursive field must have the shared list type, not only the node type, so it can eventually contain Empty.",
          [
            Q("What are the two variants?", "<code>Empty</code> and <code>WordNode</code>."),
            Q("What is the type of <code>rest</code>?", "<code>WordList</code>."),
            Q("How many words are in <code>twoWords</code>?", "Two.")
          ]
        ),
        R(
          "l09-list-template",
          "lecture-09-recursive-list-template.html",
          "Follow the Empty-or-Node Template",
          "necessary",
          "A function over a recursive list has one branch for Empty and one for WordNode.",
          "Write the structural template for a custom recursive list.",
          ["template", "recursive-data", "case-analysis"],
          "A <strong>template</strong> is a reusable outline derived from the data definition. For a list, case analysis separates Empty from Node. In the Node branch, the inventory includes the first item and a recursive call on the rest.",
          "Following the template ensures that every data variant is handled and that the recursive call follows the recursive field.",
          `fun wordCount(words: WordList): Int {
    return when (words) {
        Empty -&gt; 0
        is WordNode -&gt; 1 + wordCount(words.rest)
    }
}`,
          "Empty contributes zero words. A node contributes one for its first field plus the count of its rest.",
          "The recursive call belongs on <code>words.rest</code> because that is the field whose type is <code>WordList</code>.",
          [
            Q("What does the Empty branch return?", "<code>0</code>."),
            Q("Which field is passed recursively?", "<code>words.rest</code>."),
            Q("Why does the Node branch add 1?", "It counts the current node's first word.")
          ]
        ),
        R(
          "l09-list-patterns",
          "lecture-09-recursive-list-patterns.html",
          "Recognize Common Recursive List Patterns",
          "necessary",
          "Queries, transformations, selections, and summaries differ mainly in how a node combines its item with the recursive answer.",
          "Match a list problem to any, all, map, filter, or fold structure.",
          ["predicate", "template", "recursion"],
          "Many list functions share the same Empty-or-Node template. An 'any' query combines with OR, an 'all' query combines with AND, a map constructs one output node per input node, a filter may keep or skip a node, and a fold combines items into one result.",
          "Recognizing the pattern narrows the design choices before writing details.",
          `fun anyShort(words: WordList): Boolean {
    return when (words) {
        Empty -&gt; false
        is WordNode -&gt; words.first.length &lt; 4 || anyShort(words.rest)
    }
}`,
          "The Empty answer for an 'any' question is false. A Node answers true if its own word is short or if any word in the rest is short.",
          "Choose the base value that is neutral for the combining operator: false for OR, true for AND, and zero for addition.",
          [
            Q("Which pattern does <code>anyShort</code> use?", "An 'any' query."),
            Q("Why is the Empty answer false?", "An empty list contains no matching item."),
            Q("What operator combines the current and recursive answers?", "Boolean OR, <code>||</code>.")
          ]
        ),
        R(
          "l08-trace",
          "lecture-08-trace-recursion.html",
          "Trace a Recursive Call",
          "optional",
          "A trace expands recursive calls until the base case, then evaluates the pending combinations on the way back.",
          "Trace a small recursive call by substitution.",
          ["recursion", "base-case", "expression"],
          "Tracing replaces a function call with the body for its argument. Continue expanding the recursive call until reaching the base case, then simplify the expressions from the inside out.",
          "A trace explains both why recursion terminates and how partial answers are combined.",
          `countDownSum(3)
= 3 + countDownSum(2)
= 3 + (2 + countDownSum(1))
= 3 + (2 + (1 + countDownSum(0)))
= 3 + (2 + (1 + 0))
= 6`,
          "The calls expand downward while inputs shrink. Addition waits until the base answer is known, then completes on the return path.",
          "Keep parentheses while tracing so the pending operations remain visible.",
          [
            Q("Which call reaches the base case?", "<code>countDownSum(0)</code>."),
            Q("How many recursive calls occur after the original call with 3?", "Three calls: with 2, 1, and 0."),
            Q("When do the additions finish?", "After the base case returns.")
          ]
        )
      ]
    },
    {
      id: "l10",
      hub: "lecture-10-helper-functions-list-averages.html",
      lecture: "Lecture 10",
      title: "List Helpers and Averages",
      minutes: 8,
      summary: "Three necessary readings decompose averages into totals, counts, conversions, and filters. The optional reading considers empty input.",
      cardSummary: "Short readings on decomposing averages, numeric conversion, and filtered list calculations.",
      goal: "Students arrive able to work backward from an average and name the helper results needed to compute it.",
      nextHref: "lecture-11-13-built-in-lists.html",
      nextLabel: "Lectures 11-13 reading set",
      readings: [
        R(
          "l10-average-pieces",
          "lecture-10-average-needs-total-and-count.html",
          "An Average Needs a Total and a Count",
          "necessary",
          "Average is not one list operation: it combines a total with the number of items.",
          "Work backward from an average formula to its two required subresults.",
          ["decomposition", "helper-function", "expression"],
          "To compute an average, first determine the total of the values and the number of values. The final expression divides those two results.",
          "Working backward from the return value reveals the subproblems before recursion is written.",
          `fun averageTemperature(readings: TempList): Double {
    val total = temperatureTotal(readings)
    val count = temperatureCount(readings)
    return total.toDouble() / count
}`,
          "The main function names the two conceptual pieces. Separate helpers can follow the recursive list template to compute each piece.",
          "The final return line should read like the mathematical definition of average.",
          [
            Q("What two results are required?", "A total and a count."),
            Q("Which helper returns the number of readings?", "<code>temperatureCount</code>."),
            Q("What operation combines the helpers?", "Division.")
          ]
        ),
        R(
          "l10-helper-decomposition",
          "lecture-10-helper-decomposition.html",
          "Let Helpers Match the Concepts",
          "necessary",
          "A helper should compute a named concept that makes the main function easier to state and test.",
          "Decompose a list problem into focused recursive helpers.",
          ["helper-function", "decomposition", "template"],
          "<strong>Decomposition</strong> breaks one problem into smaller named problems. For list averages, total and count are natural helpers because each has a clear purpose and a direct recursive template.",
          "Focused helpers can be tested independently, and their names keep arithmetic details out of the main design.",
          `fun temperatureCount(readings: TempList): Int {
    return when (readings) {
        TempEmpty -&gt; 0
        is TempNode -&gt; 1 + temperatureCount(readings.rest)
    }
}`,
          "This helper answers only the count question. It does not know anything about averages or division.",
          "Name helpers after what they produce, not after where they happen to be called.",
          [
            Q("What is this helper's base answer?", "<code>0</code>."),
            Q("What does each node contribute?", "One reading."),
            Q("Should this helper return a <code>Double</code>?", "No. A count is naturally an <code>Int</code>.")
          ]
        ),
        R(
          "l10-conversion-filter",
          "lecture-10-conversion-and-filtered-averages.html",
          "Convert before Division and Filter Both Pieces",
          "necessary",
          "Decimal averages need Double division, and filtered averages must use a matching filtered total and count.",
          "Use toDouble and keep filtered numerator and denominator consistent.",
          ["numeric-conversion", "predicate", "helper-function"],
          "<code>toDouble()</code> converts an <code>Int</code> value to a <code>Double</code> before division. For a filtered average, both the total and count must describe the same selected items.",
          "Filtering only the numerator or only the denominator creates a number, but not the requested average.",
          `val warmTotal: Int = totalAtLeast(readings, 70)
val warmCount: Int = countAtLeast(readings, 70)
val warmAverage = warmTotal.toDouble() / warmCount`,
          "Both helpers use the same threshold. Converting the total makes the division produce a decimal result.",
          "Write the selection rule once in the purpose statement, then make sure every helper uses that same rule.",
          [
            Q("Why call <code>toDouble()</code>?", "To get decimal division instead of integer division."),
            Q("Which values belong in <code>warmCount</code>?", "Only readings at least 70."),
            Q("What goes wrong if count includes every reading?", "The numerator and denominator describe different groups.")
          ]
        ),
        R(
          "l10-empty-average",
          "lecture-10-empty-average-design.html",
          "What Should an Empty Average Mean?",
          "optional",
          "An empty list has a total of zero and a count of zero, so the average needs an explicit design decision.",
          "Identify and document an edge case before division.",
          ["base-case", "nullable", "function-signature"],
          "An average of an empty list would attempt to divide by zero. Mathematics does not provide an ordinary average for no values, so the function's contract must state a course-approved choice.",
          "Possible designs include returning <code>null</code>, requiring nonempty input, or using a separate result variant. The signature should communicate the choice.",
          `fun safeAverage(total: Int, count: Int): Double? {
    return if (count == 0) null else total.toDouble() / count
}`,
          "The nullable return type permits a decimal answer or <code>null</code> when no average exists.",
          "Do not silently invent a zero average unless the problem explicitly defines that behavior.",
          [
            Q("Why is the return type <code>Double?</code>?", "The function may return a Double or <code>null</code>."),
            Q("What input triggers <code>null</code>?", "<code>count == 0</code>."),
            Q("Is zero automatically the average of an empty list?", "No.")
          ]
        )
      ]
    },
    {
      id: "l11-13",
      hub: "lecture-11-13-built-in-lists.html",
      lecture: "Lectures 11-13",
      title: "Kotlin's Immutable Lists",
      minutes: 16,
      summary: "Six necessary readings introduce List types and the core list functions. The optional reading studies how multi-step list pipelines change types.",
      cardSummary: "Short readings on List<T>, function references, predicates, map, fold, and nullable searches.",
      goal: "Students arrive able to choose a built-in list operation from the desired input and output types.",
      nextHref: "lecture-13-challenge-lambdas.html",
      nextLabel: "Lecture 13 challenge reading set",
      readings: [
        R(
          "l11-list-type",
          "lecture-11-list-types-and-listof.html",
          "Read List<T> and Build One with listOf",
          "necessary",
          "List<T> means an immutable list whose elements share one type.",
          "Read a generic list type and construct a list value.",
          ["generic-type", "immutable", "constructor"],
          "The notation <code>List&lt;T&gt;</code> is a <strong>generic type</strong>. The type inside angle brackets states the element type. <code>List&lt;String&gt;</code> contains Strings; <code>List&lt;Int&gt;</code> contains Ints.",
          "Kotlin's <code>listOf</code> constructs an immutable list value. List operations produce results without changing that original list.",
          `val elevations: List&lt;Int&gt; = listOf(420, 610, 575)
val trailNames: List&lt;String&gt; = listOf("Pine", "Lake", "Ridge")`,
          "Each constructor argument becomes one element in order. Kotlin can often infer the generic type from those arguments.",
          "The angle brackets describe the elements, not the number of items.",
          [
            Q("What is the element type of <code>elevations</code>?", "<code>Int</code>."),
            Q("How many items are in <code>trailNames</code>?", "Three."),
            Q("Does <code>listOf</code> create a MutableList?", "No. It creates an immutable <code>List</code>.")
          ]
        ),
        R(
          "l11-function-reference",
          "lecture-11-function-references.html",
          "Pass a Named Function with ::",
          "necessary",
          "A function reference names a function as a value without calling it immediately.",
          "Use :: to pass a named function to a list operation.",
          ["function-reference", "higher-order-function", "function"],
          "The syntax <code>::name</code> creates a <strong>function reference</strong>. It refers to a function itself rather than calling that function. A <strong>higher-order function</strong> receives another function as input.",
          "List operations can call the supplied function once for each element.",
          `fun isHigh(elevation: Int): Boolean {
    return elevation &gt;= 600
}

val highTrails = elevations.filter(::isHigh)`,
          "<code>filter</code> receives the function <code>isHigh</code>. It calls that function on each elevation and keeps elements for which the result is true.",
          "<code>::isHigh</code> has no argument parentheses. Writing <code>isHigh()</code> would attempt a call without the required Int.",
          [
            Q("Is <code>::isHigh</code> a call?", "No. It is a reference to the function."),
            Q("Which list operation receives it?", "<code>filter</code>."),
            Q("Which elevations are kept?", "Those greater than or equal to 600.")
          ]
        ),
        R(
          "l12-predicates",
          "lecture-12-any-all-and-filter.html",
          "Choose any, all, or filter",
          "necessary",
          "any and all answer Boolean questions; filter returns the matching elements.",
          "Select a predicate-based list operation from the desired result type.",
          ["predicate", "higher-order-function", "boolean"],
          "The functions <code>any</code>, <code>all</code>, and <code>filter</code> each apply a predicate to list elements. <code>any</code> asks whether at least one matches. <code>all</code> asks whether every element matches. <code>filter</code> returns a list containing the matches.",
          "The output type distinguishes the questions: Boolean for <code>any</code> and <code>all</code>, List for <code>filter</code>.",
          `val heights = listOf(420, 610, 575)

heights.any { it &gt; 600 }      // true
heights.all { it &gt; 300 }      // true
heights.filter { it &gt; 500 }   // [610, 575]`,
          "The same basic predicate shape can support three different questions. The list itself remains unchanged.",
          "Translate the problem statement carefully: 'which' suggests filter, 'does any' suggests any, and 'does every' suggests all.",
          [
            Q("Which operation returns a List?", "<code>filter</code>."),
            Q("What does <code>all</code> return for an empty list?", "<code>true</code>."),
            Q("Which operation answers whether one item matches?", "<code>any</code>.")
          ]
        ),
        R(
          "l12-map",
          "lecture-12-map-transforms-elements.html",
          "Use map to Transform Every Element",
          "necessary",
          "map applies a function to each input element and collects one output element per input.",
          "Use map and predict its output element type.",
          ["higher-order-function", "generic-type", "function-type"],
          "<code>map</code> transforms a list. Its input function receives one element and returns the corresponding output element. The result list has the same length but may have a different element type.",
          "Map is the built-in form of the recursive pattern that constructs exactly one output node for each input node.",
          `val heights = listOf(420, 610, 575)
val labels: List&lt;String&gt; = heights.map { height -&gt;
    height.toString() + " ft"
}`,
          "Each Int becomes a String label. Three input elements produce three output elements, and <code>heights</code> is not changed.",
          "Predict the result type from the lambda's return expression, not from the original element type.",
          [
            Q("What is the element type of <code>labels</code>?", "<code>String</code>."),
            Q("How many labels are produced?", "Three."),
            Q("Does map remove any elements?", "No. It produces one result per input element.")
          ]
        ),
        R(
          "l13-fold-reduce",
          "lecture-13-fold-and-reduce.html",
          "Summarize a List with fold or reduce",
          "necessary",
          "fold combines list elements into one accumulated result; reduce starts from the first element.",
          "Read the accumulator and element roles in a fold.",
          ["fold", "accumulator", "higher-order-function"],
          "<code>fold</code> starts with an explicit initial accumulator and combines each element into it. <code>reduce</code> uses the first list element as the initial result, so it requires a nonempty list.",
          "These operations implement many summaries: totals, joined text, largest values, and custom product results.",
          `val heights = listOf(420, 610, 575)
val total = heights.fold(0) { sum, height -&gt;
    sum + height
}`,
          "The accumulator <code>sum</code> begins at 0. Each step adds one height, and the final accumulated Int is returned.",
          "Choose an initial value that matches the result type and acts as the correct starting answer.",
          [
            Q("What is the initial accumulator?", "<code>0</code>."),
            Q("What type does this fold return?", "<code>Int</code>."),
            Q("Why is fold safe for an empty list?", "It can return its explicit initial accumulator.")
          ]
        ),
        R(
          "l13-nullable-search",
          "lecture-13-nullable-list-search.html",
          "Represent No Answer with a Nullable Result",
          "necessary",
          "A search may return a value or null when no matching element exists.",
          "Read a nullable return type and handle a find result.",
          ["nullable", "predicate", "return-type"],
          "A type followed by <code>?</code> is <strong>nullable</strong>. A value of type <code>String?</code> may contain a String or <code>null</code>. Kotlin's <code>find</code> uses a nullable result because a list may have no matching element.",
          "The return type makes the missing-answer possibility visible instead of inventing a misleading ordinary value.",
          `val trails = listOf("Pine", "Lake", "Ridge")
val result: String? = trails.find { it.startsWith("Z") }`,
          "No trail starts with Z, so <code>result</code> is <code>null</code>. A different predicate could produce the first matching String.",
          "Code using a nullable value must decide what to do in both the present and absent cases.",
          [
            Q("What are the two kinds of values allowed by <code>String?</code>?", "A String or <code>null</code>."),
            Q("What does <code>find</code> return when several items match?", "The first matching item."),
            Q("What value is stored in <code>result</code>?", "<code>null</code>.")
          ]
        ),
        R(
          "l13-pipeline",
          "lecture-13-list-operation-pipelines.html",
          "Read a List Pipeline by Its Intermediate Types",
          "optional",
          "Chained list operations are easiest to understand one stage and one type at a time.",
          "Track the element type through a multi-step list pipeline.",
          ["higher-order-function", "generic-type", "predicate"],
          "Dot notation can chain list operations into a pipeline. Each stage receives the previous stage's result. Reading the intermediate list types prevents confusion.",
          "Operation order affects both meaning and efficiency, so a pipeline should be read from left to right.",
          `val answer: List&lt;String&gt; = heights
    .filter { it &gt; 500 }
    .map { it.toString() + " ft" }`,
          "After <code>filter</code>, the value is still a <code>List&lt;Int&gt;</code>. After <code>map</code>, it becomes a <code>List&lt;String&gt;</code>.",
          "Do not try to read a pipeline as one giant expression. Name the type after each dot.",
          [
            Q("What is the type after filter?", "<code>List&lt;Int&gt;</code>."),
            Q("What is the final type?", "<code>List&lt;String&gt;</code>."),
            Q("Could the shown operations be reversed without changing the predicates?", "No. After map, the elements would be Strings rather than Ints.")
          ]
        )
      ]
    },
    {
      id: "l13-challenge",
      hub: "lecture-13-challenge-lambdas.html",
      lecture: "Lecture 13 Challenge",
      title: "Functions as Inputs",
      minutes: 11,
      summary: "Four necessary readings cover function types, lambdas, it, and data-class copy. The optional reading combines many predicates.",
      cardSummary: "Short readings on function types, lambda syntax, it, copy, and predicate pipelines.",
      goal: "Students arrive able to pass behavior into a list-processing function and immutably update selected fields.",
      nextHref: "lecture-14-binary-trees.html",
      nextLabel: "Lecture 14 reading set",
      readings: [
        R(
          "l13c-function-type",
          "lecture-13-function-types.html",
          "Read a Function Type",
          "necessary",
          "A function type describes the input types and output type of a function value.",
          "Read and match a Kotlin function type.",
          ["function-type", "higher-order-function", "parameter"],
          "The type <code>(Int) -&gt; Int</code> describes a function that receives one Int and returns one Int. A function can be stored in a name, passed as an argument, or returned like other values.",
          "Function types let one general algorithm receive the small behavior that varies.",
          `fun adjustScores(
    scores: List&lt;Int&gt;,
    adjustment: (Int) -&gt; Int
): List&lt;Int&gt; {
    return scores.map(adjustment)
}`,
          "The parameter <code>adjustment</code> is a function value. <code>map</code> calls it on every score.",
          "Count the types before and after the arrow: inputs are on the left, the result is on the right.",
          [
            Q("How many inputs does <code>adjustment</code> receive?", "One."),
            Q("What type does it return?", "<code>Int</code>."),
            Q("What is the result type of <code>adjustScores</code>?", "<code>List&lt;Int&gt;</code>.")
          ]
        ),
        R(
          "l13c-lambda",
          "lecture-13-lambda-expressions.html",
          "Write a Lambda Expression",
          "necessary",
          "A lambda is an unnamed function expression written inside curly braces.",
          "Write and pass a lambda with an explicit parameter.",
          ["lambda", "function-type", "expression"],
          "A <strong>lambda</strong> is a function expression without a declared name. Parameters appear before <code>-&gt;</code>, and the final expression becomes the returned value.",
          "Lambdas are useful when a short behavior is needed in only one place.",
          `val boosted = adjustScores(
    listOf(70, 82, 91),
    { score -&gt; score + 5 }
)`,
          "The lambda receives each score and produces a score five points larger. Its inferred type is <code>(Int) -&gt; Int</code>.",
          "The lambda does not run when it is written. The receiving function decides when and how often to call it.",
          [
            Q("What is the lambda parameter?", "<code>score</code>."),
            Q("What value does it return for 70?", "<code>75</code>."),
            Q("How many times will map call it?", "Once per list element.")
          ]
        ),
        R(
          "l13c-it",
          "lecture-13-lambda-it.html",
          "Use it for One Lambda Parameter",
          "necessary",
          "Kotlin supplies the name it when a lambda has exactly one unnamed parameter.",
          "Read and write a one-parameter lambda using it.",
          ["lambda", "parameter", "higher-order-function"],
          "When a lambda has one parameter, Kotlin allows the parameter name and arrow to be omitted. The implicit parameter is named <code>it</code>.",
          "The shortcut keeps very small predicates and transformations compact, but an explicit name is often clearer for a longer body.",
          `val passing = listOf(70, 82, 91).filter { it &gt;= 75 }
val doubled = listOf(2, 4, 6).map { it * 2 }`,
          "In each expression, <code>it</code> refers to the current list element. The first lambda returns a Boolean; the second returns an Int.",
          "<code>it</code> is not a special global variable. It exists only inside an eligible lambda.",
          [
            Q("What does <code>it</code> mean in the filter?", "The current score."),
            Q("What type does the filter lambda return?", "<code>Boolean</code>."),
            Q("When might an explicit name be better?", "When the lambda is long or the role of the element is unclear.")
          ]
        ),
        R(
          "l13c-copy",
          "lecture-13-data-class-copy.html",
          "Update Product Data with copy",
          "necessary",
          "The copy method creates a new data-class value while changing only named fields.",
          "Use copy to immutably update one field.",
          ["data-class", "copy", "immutable"],
          "Every Kotlin data class receives a <code>copy</code> method. It constructs a new value using all existing fields except those replaced by named arguments.",
          "Copy is concise functional updating: the original value stays available, and the changed field is explicit.",
          `data class Game(val title: String, val price: Int, val rating: Int)

val original = Game("Orbit", 30, 8)
val sale = original.copy(price = 24)`,
          "<code>sale</code> keeps the title and rating from <code>original</code>, but its price is 24. The original price remains 30.",
          "Named arguments make copy independent of field order and show exactly what changes.",
          [
            Q("Which field changes?", "<code>price</code>."),
            Q("What is <code>sale.rating</code>?", "<code>8</code>."),
            Q("Does copy mutate <code>original</code>?", "No.")
          ]
        ),
        R(
          "l13c-predicates",
          "lecture-13-list-of-predicates.html",
          "Apply a List of Predicates",
          "optional",
          "Predicates can themselves be stored in a list and combined into a configurable filter.",
          "Represent and apply multiple predicate functions.",
          ["predicate", "function-type", "fold"],
          "A predicate has a function type such as <code>(Game) -&gt; Boolean</code>. A list of predicates represents several rules as data. A fold can keep applying each rule to the current list.",
          "This separates the filtering engine from the collection of rules chosen for one use.",
          `val rules: List&lt;(Game) -&gt; Boolean&gt; = listOf(
    { it.price &lt;= 25 },
    { it.rating &gt;= 7 }
)

val selected = rules.fold(games) { current, rule -&gt;
    current.filter(rule)
}`,
          "The accumulator is the list that has passed all rules so far. Each predicate narrows it again.",
          "The element type of <code>rules</code> is a function type, not Game.",
          [
            Q("What does each item in <code>rules</code> return?", "A Boolean."),
            Q("What is the fold accumulator?", "The current filtered list of games."),
            Q("Must a game satisfy both rules to remain?", "Yes.")
          ]
        )
      ]
    },
    {
      id: "l14",
      hub: "lecture-14-binary-trees.html",
      lecture: "Lecture 14",
      title: "Binary Trees",
      minutes: 11,
      summary: "Four necessary readings introduce binary tree data, its template, two recursive answers, and immutable rebuilding. The optional reading builds paths.",
      cardSummary: "Short readings on leaf/node data, two recursive calls, combining answers, and rebuilding trees.",
      goal: "Students arrive able to follow a recursive design where every node contains two recursive subtrees.",
      nextHref: "lecture-15-16-binary-search-trees.html",
      nextLabel: "Lectures 15-16 reading set",
      readings: [
        R(
          "l14-tree-data",
          "lecture-14-binary-tree-data.html",
          "A Binary Tree Has Two Recursive Branches",
          "necessary",
          "A binary tree is either a leaf or a node containing two smaller binary trees.",
          "Read a sealed binary-tree data definition.",
          ["binary-tree", "leaf", "node"],
          "A <strong>binary tree</strong> is recursive data whose node variant has two recursive fields. A <strong>leaf</strong> marks an endpoint; a <strong>node</strong> carries data and left and right subtrees.",
          "The definition can represent balanced, unbalanced, and one-sided shapes without changing the type.",
          `sealed interface QuizTree
data object End: QuizTree
data class Question(
    val prompt: String,
    val yes: QuizTree,
    val no: QuizTree
): QuizTree`,
          "Each Question contains two smaller QuizTrees. Either branch may be End or another Question.",
          "Binary describes the maximum number of child branches per node, not the number of values in the whole tree.",
          [
            Q("What are the two variants?", "<code>End</code> and <code>Question</code>."),
            Q("Which fields are recursive?", "<code>yes</code> and <code>no</code>."),
            Q("Can a branch contain another Question?", "Yes.")
          ]
        ),
        R(
          "l14-template",
          "lecture-14-binary-tree-template.html",
          "Use the Leaf-or-Node Template",
          "necessary",
          "A binary-tree function handles the leaf and makes two recursive calls in the node branch.",
          "Write the structural template for a binary tree.",
          ["template", "binary-tree", "recursion"],
          "The binary-tree template follows the data definition. The leaf branch returns a simple answer. The node branch inventories the node fields and recursively processes both subtrees.",
          "Writing both calls before implementation prevents accidentally ignoring half the data.",
          `fun questionCount(tree: QuizTree): Int {
    return when (tree) {
        End -&gt; 0
        is Question -&gt; 1 +
            questionCount(tree.yes) +
            questionCount(tree.no)
    }
}`,
          "A Question contributes one plus the counts from both branches. End contributes zero.",
          "Unless a problem justifies pruning, a general tree function must account for both recursive fields.",
          [
            Q("How many recursive calls are in the node branch?", "Two."),
            Q("What is the leaf answer?", "<code>0</code>."),
            Q("Why add 1?", "To count the current Question node.")
          ]
        ),
        R(
          "l14-combine",
          "lecture-14-combine-tree-answers.html",
          "Combine Two Recursive Answers",
          "necessary",
          "The problem's result type determines how answers from the left and right branches are combined.",
          "Choose an operator that combines two subtree results.",
          ["recursion", "predicate", "binary-tree"],
          "A node receives one recursive answer from each subtree. Number answers might be added or compared, Boolean answers use AND or OR, and list answers can be concatenated with <code>+</code>.",
          "The combining operation expresses the question being asked of the whole tree.",
          `fun anyMentions(tree: QuizTree, word: String): Boolean {
    return when (tree) {
        End -&gt; false
        is Question -&gt;
            tree.prompt.contains(word) ||
            anyMentions(tree.yes, word) ||
            anyMentions(tree.no, word)
    }
}`,
          "The answer is true when the current prompt or either subtree contains the word.",
          "Match the base case to the operator: false is the neutral starting answer for an OR search.",
          [
            Q("What combines the Boolean answers?", "<code>||</code>."),
            Q("Why does End return false?", "An empty branch contains no matching prompt."),
            Q("Would AND express an 'any' question?", "No.")
          ]
        ),
        R(
          "l14-rebuild",
          "lecture-14-rebuild-a-tree.html",
          "Rebuild a Changed Tree with copy",
          "necessary",
          "A tree transformation constructs a new node from transformed child trees.",
          "Use copy and recursive calls to transform an entire binary tree.",
          ["copy", "binary-tree", "immutable"],
          "To transform immutable recursive data, recursively transform the children and use those results to construct or copy the current node.",
          "Changing only the current node would leave descendants untouched. The recursive results carry the transformation through the whole tree.",
          `fun addQuestionMark(tree: QuizTree): QuizTree {
    return when (tree) {
        End -&gt; End
        is Question -&gt; tree.copy(
            prompt = tree.prompt + "?",
            yes = addQuestionMark(tree.yes),
            no = addQuestionMark(tree.no)
        )
    }
}`,
          "The copied node has a changed prompt and two newly transformed subtrees. The original tree remains unchanged.",
          "For every recursive field in the data definition, decide whether the output should contain a recursive result.",
          [
            Q("How many fields are replaced in copy?", "Three."),
            Q("What happens to End?", "It remains End."),
            Q("Is the original tree mutated?", "No.")
          ]
        ),
        R(
          "l14-path",
          "lecture-14-build-a-tree-path.html",
          "Build a Path Result",
          "optional",
          "A path search adds the current node to a successful recursive path and ignores unsuccessful branches.",
          "Interpret an empty list as no path and prepend a found node.",
          ["binary-tree", "nullable", "recursion"],
          "A path function must distinguish 'found a path' from 'did not find one.' One simple design uses an empty list for failure and a nonempty list for a found path.",
          "When a subtree returns a path, the current node can be added as recursion returns.",
          `val childPath = pathTo(tree.yes, target)
return if (childPath.isNotEmpty()) {
    listOf(tree.prompt) + childPath
} else {
    pathTo(tree.no, target)
}`,
          "The function searches the yes branch first. If that path succeeds, the current prompt is prepended. Otherwise it tries the no branch.",
          "Document whether the path is ordered from root to target or target to root.",
          [
            Q("What represents failure in this design?", "An empty list."),
            Q("Where is the current prompt added?", "At the front of a successful child path."),
            Q("When is the no branch searched?", "When the yes branch returns an empty path.")
          ]
        )
      ]
    },
    {
      id: "l15-16",
      hub: "lecture-15-16-binary-search-trees.html",
      lecture: "Lectures 15-16",
      title: "Binary Search Trees",
      minutes: 11,
      summary: "Four necessary readings cover ordering invariants, directed search, compound keys, nullable results, and insertion. The optional reading prunes a count.",
      cardSummary: "Short readings on search-tree invariants, ordered recursion, compound keys, null, and insertion.",
      goal: "Students arrive able to use a stated ordering rule to choose one branch rather than traverse an entire tree.",
      nextHref: "lecture-17-18-arbitrary-arity-trees.html",
      nextLabel: "Lectures 17-18 reading set",
      readings: [
        R(
          "l15-invariant",
          "lecture-15-search-tree-invariants.html",
          "An Invariant Gives a Tree Meaning",
          "necessary",
          "A binary search tree relies on an ordering rule that is true at every node.",
          "State and use a binary-search-tree invariant.",
          ["invariant", "binary-tree", "node"],
          "An <strong>invariant</strong> is a property intended to remain true throughout a data structure. In a number search tree, every value in the left subtree is smaller than the node value and every value in the right subtree is larger.",
          "The shape alone does not make a binary tree searchable. The invariant provides the information that lets a function skip a branch.",
          `// At every Entry:
// left ids are smaller
// right ids are larger
data class Entry(
    val id: Int,
    val left: StudentBST,
    val right: StudentBST
): StudentBST`,
          "The comment is part of the data definition's meaning. Constructors and insertion functions must preserve it.",
          "An invariant is a promise made by all valid values, not a check Kotlin performs automatically.",
          [
            Q("Where are smaller ids stored?", "In the left subtree."),
            Q("Does the class declaration itself enforce the ordering?", "No."),
            Q("Why is the invariant useful?", "It lets search rule out one branch at each node.")
          ]
        ),
        R(
          "l15-ordered-search",
          "lecture-15-ordered-tree-search.html",
          "Search Only the Possible Branch",
          "necessary",
          "Ordered search compares the target with the current key and recurses into one subtree.",
          "Write the three-way comparison used by binary-search-tree search.",
          ["invariant", "recursion", "pruning"],
          "At a search-tree node, compare the target with the node's key. Equality means success. A smaller target can only be in the left subtree; a larger target can only be in the right subtree.",
          "This is <strong>pruning</strong>: using the invariant to avoid work in a branch that cannot contain the answer.",
          `fun containsId(tree: StudentBST, target: Int): Boolean {
    return when (tree) {
        StudentEmpty -&gt; false
        is Entry -&gt; when {
            target == tree.id -&gt; true
            target &lt; tree.id -&gt; containsId(tree.left, target)
            else -&gt; containsId(tree.right, target)
        }
    }
}`,
          "Only one recursive call occurs at each Entry. Empty means the target was not found.",
          "A general binary-tree search examines both branches; a search-tree function should visibly use the invariant.",
          [
            Q("Where does a smaller target search?", "The left subtree."),
            Q("How many recursive calls occur per node?", "At most one."),
            Q("What is the Empty answer?", "<code>false</code>.")
          ]
        ),
        R(
          "l16-compound-nullable",
          "lecture-16-compound-keys-and-null.html",
          "Search with a Compound Key and Nullable Result",
          "necessary",
          "A search key can use a primary comparison and a tie-breaker, while null represents no matching value.",
          "Order two fields consistently and return a nullable result.",
          ["nullable", "invariant", "case-analysis"],
          "Some search trees order values by more than one field. Compare the primary field first; only when it is equal should a secondary field break the tie. A nullable return type represents a search that may fail.",
          "Every insertion and search must use the same comparison order or the invariant becomes unreliable.",
          `fun compareKey(
    author: String,
    year: Int,
    nodeAuthor: String,
    nodeYear: Int
): Int {
    return when {
        author &lt; nodeAuthor -&gt; -1
        author &gt; nodeAuthor -&gt; 1
        year &lt; nodeYear -&gt; -1
        year &gt; nodeYear -&gt; 1
        else -&gt; 0
    }
}`,
          "Author is the primary key. Year is considered only for equal authors. A search can return a title String on 0 or <code>null</code> upon reaching a leaf.",
          "Write the comparison rule once and reuse it to prevent search and insertion from disagreeing.",
          [
            Q("Which field is compared first?", "<code>author</code>."),
            Q("When is <code>year</code> compared?", "Only when the authors are equal."),
            Q("What can a <code>String?</code> search result contain?", "A String or <code>null</code>.")
          ]
        ),
        R(
          "l16-insert",
          "lecture-16-insert-by-rebuilding.html",
          "Insert by Rebuilding the Search Path",
          "necessary",
          "Functional insertion constructs a new leaf or copies each node along the chosen branch.",
          "Preserve a search-tree invariant while returning a new tree.",
          ["copy", "invariant", "recursion"],
          "Insertion follows the same comparisons as search. At an empty position, construct a new node. At an existing node, recursively insert into one branch and copy the current node with that updated subtree.",
          "Only nodes on the search path are rebuilt; untouched subtrees can be reused.",
          `fun addId(tree: StudentBST, id: Int): StudentBST {
    return when (tree) {
        StudentEmpty -&gt; Entry(id, StudentEmpty, StudentEmpty)
        is Entry -&gt; when {
            id &lt; tree.id -&gt; tree.copy(left = addId(tree.left, id))
            id &gt; tree.id -&gt; tree.copy(right = addId(tree.right, id))
            else -&gt; tree
        }
    }
}`,
          "The equality branch leaves an existing id unchanged. The other branches update exactly one copied field.",
          "Search and insertion must agree about which direction each comparison chooses.",
          [
            Q("Where is a new node constructed?", "At <code>StudentEmpty</code>."),
            Q("What happens for a duplicate id?", "The existing tree is returned."),
            Q("Is the original tree changed?", "No.")
          ]
        ),
        R(
          "l16-prune-count",
          "lecture-16-prune-a-tree-count.html",
          "Prune a Count with the Invariant",
          "optional",
          "Some counting questions can ignore a whole branch when the ordering proves it cannot match.",
          "Justify branch pruning in a search-tree query.",
          ["pruning", "invariant", "recursion"],
          "Pruning is not limited to exact search. A count can skip branches when the invariant proves every value there fails the condition.",
          "The justification must be based on the stated ordering, not on a guess about the sample tree.",
          `fun countAtLeast(tree: StudentBST, minimum: Int): Int {
    return when (tree) {
        StudentEmpty -&gt; 0
        is Entry -&gt; if (tree.id &lt; minimum) {
            countAtLeast(tree.right, minimum)
        } else {
            1 + countAtLeast(tree.left, minimum) +
                countAtLeast(tree.right, minimum)
        }
    }
}`,
          "When the node id is too small, every id in its left subtree is also too small, so only the right subtree can contribute.",
          "State why a skipped branch cannot contain an answer.",
          [
            Q("Which branch is skipped when the node is too small?", "The left branch."),
            Q("Why is that safe?", "Every left id is smaller than the already-too-small node id."),
            Q("When are both subtrees counted?", "When the current node meets the minimum.")
          ]
        )
      ]
    },
    {
      id: "l17-18",
      hub: "lecture-17-18-arbitrary-arity-trees.html",
      lecture: "Lectures 17-18",
      title: "Trees with Any Number of Children",
      minutes: 11,
      summary: "Four necessary readings cover list-valued children, descendants, recursive maps, and child-result folds. The optional reading collects unique answers.",
      cardSummary: "Short readings on arbitrary-arity trees, descendants, recursive map/fold patterns, and Sets.",
      goal: "Students arrive able to combine one tree-level step with one List-level step over any number of children.",
      nextHref: "lecture-19-20-search-paths-accumulators.html",
      nextLabel: "Lectures 19-20 reading set",
      readings: [
        R(
          "l17-aa-data",
          "lecture-17-arbitrary-arity-tree-data.html",
          "Represent Any Number of Children with a List",
          "necessary",
          "An arbitrary-arity tree node stores a List of child trees instead of fixed left and right fields.",
          "Read a recursive data class with list-valued children.",
          ["arbitrary-arity-tree", "recursive-data", "generic-type"],
          "An <strong>arbitrary-arity tree</strong> allows each node to have any number of children. A list field holds zero, one, or many smaller trees of the same type.",
          "One data-class form can represent leaves and internal nodes: an empty children list marks a leaf.",
          `data class MenuItem(
    val label: String,
    val children: List&lt;MenuItem&gt;
)

val drinks = MenuItem(
    "Drinks",
    listOf(MenuItem("Tea", emptyList()), MenuItem("Juice", emptyList()))
)`,
          "The root has two direct children. Each child is a leaf because its own children list is empty.",
          "The recursive occurrence is inside <code>List&lt;MenuItem&gt;</code>.",
          [
            Q("How is a leaf represented?", "By a MenuItem with an empty children list."),
            Q("How many direct children does <code>drinks</code> have?", "Two."),
            Q("What is the type of <code>children</code>?", "<code>List&lt;MenuItem&gt;</code>.")
          ]
        ),
        R(
          "l17-descendants",
          "lecture-17-direct-children-and-descendants.html",
          "Direct Children Are Not All Descendants",
          "necessary",
          "A child is one edge away; a descendant may be any number of edges below a node.",
          "Distinguish a direct list operation from a recursive descendant traversal.",
          ["descendant", "arbitrary-arity-tree", "recursion"],
          "A node's <strong>direct children</strong> are the values in its <code>children</code> list. Its <strong>descendants</strong> include children, grandchildren, and every deeper level.",
          "Applying a list function only to the current children does not automatically process deeper descendants.",
          `fun directChildCount(item: MenuItem): Int {
    return item.children.size
}

fun totalItemCount(item: MenuItem): Int {
    return 1 + item.children.sumOf(::totalItemCount)
}`,
          "The first function never recurses. The second maps a recursive count across all child trees and includes the current node.",
          "Look for a recursive call when a purpose statement says 'anywhere below,' 'entire hierarchy,' or 'all descendants.'",
          [
            Q("Does <code>children.size</code> count grandchildren?", "No."),
            Q("Which function visits the whole tree?", "<code>totalItemCount</code>."),
            Q("Why does it add 1?", "To count the current item.")
          ]
        ),
        R(
          "l18-map-children",
          "lecture-18-map-recursively-over-children.html",
          "Map the Recursive Function over Children",
          "necessary",
          "A tree transformation maps its recursive helper over the list of child trees.",
          "Transform every node in an arbitrary-arity tree.",
          ["copy", "higher-order-function", "recursion"],
          "To transform an arbitrary-arity tree, handle the current node and use <code>map</code> to recursively transform every child. Copy the node with the resulting child list.",
          "This combines tree recursion with a built-in List operation.",
          `fun uppercaseMenu(item: MenuItem): MenuItem {
    return item.copy(
        label = item.label.uppercase(),
        children = item.children.map(::uppercaseMenu)
    )
}`,
          "The recursive function reference is applied once per direct child. Each child repeats the same process for its children.",
          "Changing only <code>label</code> would update the root but leave descendants unchanged.",
          [
            Q("What type does map produce here?", "<code>List&lt;MenuItem&gt;</code>."),
            Q("Which values are recursively processed?", "Every direct child, and therefore all descendants."),
            Q("Is the input tree mutated?", "No.")
          ]
        ),
        R(
          "l18-combine-children",
          "lecture-18-combine-child-tree-results.html",
          "Combine Results from Every Child",
          "necessary",
          "A tree query computes one answer per child and then combines those answers with all, any, sum, or fold.",
          "Choose a List combiner for recursive child answers.",
          ["fold", "predicate", "arbitrary-arity-tree"],
          "An arbitrary-arity node may receive any number of recursive answers. Built-in list operations combine them: <code>all</code> for universal Boolean questions, <code>any</code> for existential questions, and <code>fold</code> for custom summaries.",
          "The current node's answer must also be combined with the child answers.",
          `fun allLabelsShort(item: MenuItem): Boolean {
    return item.label.length &lt;= 12 &amp;&amp;
        item.children.all(::allLabelsShort)
}`,
          "The current label must be short, and every child subtree must satisfy the same property. On a leaf, <code>all</code> over the empty children list returns true.",
          "Separate the current-node question from the child-tree combination.",
          [
            Q("What combines the current and child answers?", "<code>&amp;&amp;</code>."),
            Q("Which operation combines all child trees?", "<code>all</code>."),
            Q("What does children.all return for a leaf?", "<code>true</code>.")
          ]
        ),
        R(
          "l18-set",
          "lecture-18-collect-unique-tree-results.html",
          "Collect Unique Answers in a Set",
          "optional",
          "A Set stores each equal value at most once, making it useful for unique tree results.",
          "Combine Set results from a hierarchy.",
          ["set", "fold", "descendant"],
          "A <strong>Set</strong> is a collection without duplicate equal elements. Tree queries can return Sets when the question asks for unique labels, categories, or other repeated facts.",
          "Set union with <code>+</code> combines answers while automatically removing duplicates.",
          `fun allInitials(item: MenuItem): Set&lt;Char&gt; {
    val mine = setOf(item.label.first())
    return item.children.fold(mine) { found, child -&gt;
        found + allInitials(child)
    }
}`,
          "The accumulator starts with the current initial. Each child contributes a Set, and union keeps only one copy of repeated characters.",
          "Choose List when order and duplicates matter; choose Set when uniqueness is the intended meaning.",
          [
            Q("Can a Set contain the same Char twice?", "No."),
            Q("What is the fold accumulator type?", "<code>Set&lt;Char&gt;</code>."),
            Q("What operator combines Sets here?", "<code>+</code>.")
          ]
        )
      ]
    },
    {
      id: "l19-20",
      hub: "lecture-19-20-search-paths-accumulators.html",
      lecture: "Lectures 19-20",
      title: "Search Paths and Accumulators",
      minutes: 11,
      summary: "Four necessary readings cover nullable tree search, return-path construction, local accumulator helpers, and Pair results. The optional reading compares recursive styles.",
      cardSummary: "Short readings on nullable search, Elvis, path building, accumulator helpers, and Pair.",
      goal: "Students arrive able to represent failed searches and carry context downward or combine context on the return path.",
      nextHref: "lecture-21-23-mutation-loops.html",
      nextLabel: "Lectures 21-23 reading set",
      readings: [
        R(
          "l19-null-elvis",
          "lecture-19-nullable-search-and-elvis.html",
          "Keep a Found Answer with ?:",
          "necessary",
          "A nullable search can use the Elvis operator to keep a found answer or continue with another branch.",
          "Read a nullable recursive search using ?:.",
          ["nullable", "elvis-operator", "recursion"],
          "The <strong>Elvis operator</strong> <code>?:</code> uses its left value when that value is not null; otherwise it evaluates and uses the expression on the right.",
          "In a tree search, this provides a compact way to keep the first found answer while trying later children only after failure.",
          `fun findLabel(item: MenuItem, target: String): MenuItem? {
    if (item.label == target) return item
    return item.children.fold&lt;MenuItem?&gt;(null) { found, child -&gt;
        found ?: findLabel(child, target)
    }
}`,
          "Once <code>found</code> is non-null, later fold steps keep it. While it is null, the next child is searched.",
          "<code>?:</code> is read as 'use the left answer, or else use the right expression.'",
          [
            Q("What is the initial fold answer?", "<code>null</code>."),
            Q("When is a child searched?", "When no earlier non-null answer has been found."),
            Q("What can the function return?", "A MenuItem or <code>null</code>.")
          ]
        ),
        R(
          "l19-build-return",
          "lecture-19-build-results-on-return.html",
          "Add Information on the Return Path",
          "necessary",
          "A recursive search can add the current node after a child reports a successful result.",
          "Build a total or path while recursive calls return.",
          ["recursion", "nullable", "descendant"],
          "Some functions discover the destination deep in a tree and then add information from each ancestor as recursion returns. A nullable child answer distinguishes success from failure.",
          "This style naturally builds root-to-target totals and paths without passing the path downward.",
          `fun labelsTo(item: MenuItem, target: String): List&lt;String&gt;? {
    if (item.label == target) return listOf(item.label)
    val childPath = item.children
        .mapNotNull { labelsTo(it, target) }
        .firstOrNull()
    return childPath?.let { listOf(item.label) + it }
}`,
          "A found child path is prefixed with the current label. If no child returns a path, the result remains null.",
          "Be consistent about path direction. This design produces root first and target last.",
          [
            Q("What represents no path?", "<code>null</code>."),
            Q("Where is the current label added?", "At the front of the found child path."),
            Q("What is the last label in a successful result?", "The target.")
          ]
        ),
        R(
          "l20-accumulator",
          "lecture-20-local-accumulator-helpers.html",
          "Carry Context with a Local Accumulator Helper",
          "necessary",
          "An accumulator parameter records information known on the path to the current recursive call.",
          "Launch a local recursive helper with an initial accumulator.",
          ["accumulator", "local-function", "recursion"],
          "An <strong>accumulator</strong> is an extra parameter that carries a partial result or context forward. A <strong>local function</strong> can hide that implementation detail inside the public function.",
          "The public signature stays focused on the original problem while the helper receives path, depth, total, or best-so-far information.",
          `fun deepestLevel(root: MenuItem): Int {
    fun visit(item: MenuItem, depth: Int): Int {
        return item.children.fold(depth) { best, child -&gt;
            maxOf(best, visit(child, depth + 1))
        }
    }
    return visit(root, 0)
}`,
          "<code>depth</code> records the current level. Recursive calls receive one larger depth, and the fold keeps the largest answer.",
          "Identify the accumulator's meaning in one sentence and preserve that meaning in every recursive call.",
          [
            Q("What is the initial depth?", "<code>0</code>."),
            Q("What value is passed to a child?", "<code>depth + 1</code>."),
            Q("Why is <code>visit</code> local?", "It is an implementation helper whose extra parameter is not part of the public problem.")
          ]
        ),
        R(
          "l20-pair",
          "lecture-20-pair-results.html",
          "Use Pair for a Small Two-Value Result",
          "necessary",
          "Pair packages two related values without defining a new data class.",
          "Construct and select fields from a Pair.",
          ["pair", "data-class", "field"],
          "A <strong>Pair&lt;A, B&gt;</strong> stores two values, possibly of different types. Construct one with <code>Pair(first, second)</code> and select its values with <code>.first</code> and <code>.second</code>.",
          "Pair is convenient for a small local result. A named data class is clearer when the two fields need domain-specific names.",
          `fun labelAndDepth(item: MenuItem, depth: Int): Pair&lt;String, Int&gt; {
    return Pair(item.label, depth)
}

val result = labelAndDepth(drinks, 0)
val label = result.first`,
          "The first component is a String and the second is an Int. The generic Pair type records both.",
          "<code>first</code> and <code>second</code> say position, not meaning. Use a data class when names such as <code>minimum</code> and <code>maximum</code> would help.",
          [
            Q("What is the type of <code>result.second</code>?", "<code>Int</code>."),
            Q("Which field contains the label?", "<code>first</code>."),
            Q("Does Pair require both values to have the same type?", "No.")
          ]
        ),
        R(
          "l20-styles",
          "lecture-20-return-style-versus-accumulator.html",
          "Return-Path Style versus Accumulator Style",
          "optional",
          "Recursive context can be added while returning or carried downward in an accumulator.",
          "Choose a recursive style based on when information becomes available.",
          ["accumulator", "recursion", "decomposition"],
          "Return-path style lets a child solve its problem first, then combines that answer with the current node. Accumulator style computes new context before the recursive call and passes it downward.",
          "Both styles can solve some of the same problems. The clearer choice is the one whose helper meaning is easiest to state and test.",
          `// Return path:
return childTotal?.let { itemCost + it }

// Accumulator:
return visit(child, totalSoFar + itemCost)`,
          "The first example adds information after success returns. The second carries the updated total into the child call.",
          "Do not add an accumulator merely because recursion is present. Add one when a downward-moving context simplifies the design.",
          [
            Q("Which style passes context into the recursive call?", "Accumulator style."),
            Q("Which style combines after a child returns?", "Return-path style."),
            Q("Must every recursive function use an accumulator?", "No.")
          ]
        )
      ]
    },
    {
      id: "l21-23",
      hub: "lecture-21-23-mutation-loops.html",
      lecture: "Lectures 21-23",
      title: "Mutation and Loops",
      minutes: 16,
      summary: "Six necessary readings introduce reassignable state, mutable objects and lists, effects, lookup, and loops. The optional reading collects assignment shortcuts.",
      cardSummary: "Short readings on var, mutable fields and lists, effects, find, for loops, and while loops.",
      goal: "Students arrive able to distinguish values that change over time from functional results and trace the order of state-changing steps.",
      nextHref: "lecture-24-25-graphs-cycles.html",
      nextLabel: "Lectures 24-25 reading set",
      readings: [
        R(
          "l21-var",
          "lecture-21-var-and-assignment.html",
          "var Makes a Name Reassignable",
          "necessary",
          "A var name may be assigned a different value after initialization.",
          "Trace a local variable through several assignments.",
          ["mutation", "reassign", "value"],
          "The keyword <code>var</code> creates a reassignable name. <strong>Mutation</strong> is a change to program state over time. Assignment with <code>=</code> replaces the value currently associated with the name.",
          "Unlike a <code>val</code>, the meaning of a <code>var</code> depends on when it is read. Tracing requires following statements in order.",
          `var score = 10
score = score + 3
score = score * 2
println(score)`,
          "The first assignment changes score from 10 to 13. The next uses 13 and changes it to 26. The final line prints 26.",
          "The equals sign in an assignment means 'store the right-side result in the left-side location,' not mathematical equality.",
          [
            Q("What is score after the first reassignment?", "<code>13</code>."),
            Q("What is printed?", "<code>26</code>."),
            Q("Could <code>score</code> be declared with <code>val</code> here?", "No, because it is reassigned.")
          ]
        ),
        R(
          "l21-mutable-data",
          "lecture-21-mutable-fields-and-lists.html",
          "Mutable Fields and Mutable Lists",
          "necessary",
          "A val can name an object whose selected fields or collection contents are mutable.",
          "Distinguish reassignment of a name from mutation inside an object.",
          ["mutable-list", "mutation", "field"],
          "A data-class field declared with <code>var</code> can change. A <code>MutableList</code> supports operations such as <code>add</code>, <code>remove</code>, and <code>clear</code>. The outer name may still be a <code>val</code>.",
          "Immutability of the name and mutability of the named object are separate questions.",
          `data class Player(val name: String, var points: Int)

val roster: MutableList&lt;Player&gt; = mutableListOf()
val ari = Player("Ari", 4)
roster.add(ari)
ari.points = 7`,
          "<code>roster</code> is never reassigned, but its contents change. <code>ari</code> is never reassigned, but the mutable <code>points</code> field changes.",
          "Ask both: can the name be reassigned, and can the object it refers to be mutated?",
          [
            Q("Can <code>roster</code> be assigned a different list?", "No, because the name is a <code>val</code>."),
            Q("Can an item be added to the list?", "Yes."),
            Q("Which Player field is mutable?", "<code>points</code>.")
          ]
        ),
        R(
          "l22-find",
          "lecture-22-find-and-not-null-assertion.html",
          "Find a Mutable Object before Updating It",
          "necessary",
          "find returns a nullable element; !! asserts that the program expects the result not to be null.",
          "Read a find call and explain the risk of !!.",
          ["nullable", "predicate", "not-null-assertion"],
          "The list method <code>find</code> returns the first matching element or <code>null</code>. The operator <code>!!</code> is a <strong>not-null assertion</strong>: it extracts the ordinary value when present and crashes if the value is null.",
          "The assertion is appropriate only when a documented invariant or earlier validation guarantees the item exists.",
          `fun lookupPlayer(name: String): Player {
    return roster.find { it.name == name }!!
}`,
          "The predicate searches by name. The function promises a non-null Player, so <code>!!</code> converts the nullable find result under the assumption that the player exists.",
          "Do not use <code>!!</code> merely to silence Kotlin. State why null is impossible or design a nullable result.",
          [
            Q("What does find return when no player matches?", "<code>null</code>."),
            Q("What happens if <code>!!</code> receives null?", "The program crashes."),
            Q("What safer return type could lookup use?", "<code>Player?</code>.")
          ]
        ),
        R(
          "l22-effects",
          "lecture-22-effects-and-statement-order.html",
          "Document Effects and Respect Statement Order",
          "necessary",
          "An effect changes state outside a function's returned value, and only statements before return can run.",
          "Identify a function's effects and unreachable statements.",
          ["side-effect", "mutation", "statement"],
          "A <strong>side effect</strong> is an observable change beyond returning a value, such as updating a variable, changing a list, or printing. Purpose statements can document effects with an <code>@effect</code> line.",
          "Statements run in order. Once <code>return</code> executes, the function ends immediately, so later mutation is unreachable.",
          `/** @effect adds one point to the named player */
fun awardPoint(name: String): Int {
    val player = lookupPlayer(name)
    player.points = player.points + 1
    return player.points
}`,
          "The mutation occurs before return. The returned value reports the new point total, but the lasting state change is a separate effect.",
          "When debugging state, trace both the returned value and every mutation in statement order.",
          [
            Q("What is this function's effect?", "It increases one player's points."),
            Q("What does it return?", "The new point total."),
            Q("Would a mutation after return run?", "No.")
          ]
        ),
        R(
          "l23-for",
          "lecture-23-for-loops.html",
          "Use a for Loop for Each Element",
          "necessary",
          "A for loop runs its body once for every element in an iterable value.",
          "Trace a for loop over a list and identify its loop variable.",
          ["for-loop", "mutable-list", "statement"],
          "A <strong>for loop</strong> binds a loop variable to each element in order and executes the body. It is an imperative alternative to operations such as <code>map</code> or <code>fold</code> when effects or mutable accumulators are intended.",
          "The loop variable is a new local name for the current element.",
          `var total = 0
for (player in roster) {
    total = total + player.points
}
println(total)`,
          "The body runs once per Player. Each iteration adds that player's points to the mutable total.",
          "State the loop invariant informally: after each iteration, total contains the points from all players processed so far.",
          [
            Q("What is the loop variable?", "<code>player</code>."),
            Q("How many times does the body run?", "Once for each roster element."),
            Q("What role does <code>total</code> play?", "It is a mutable accumulator.")
          ]
        ),
        R(
          "l23-while",
          "lecture-23-while-loops-and-readln.html",
          "Use while for Repetition with a Sentinel",
          "necessary",
          "A while loop repeats while its Boolean condition remains true; input can update the condition's state.",
          "Trace a sentinel-controlled while loop using readln.",
          ["while-loop", "boolean", "side-effect"],
          "A <strong>while loop</strong> checks a Boolean condition before every iteration. A sentinel is a special input value, such as <code>\"done\"</code>, that ends the repetition.",
          "The loop body must update something involved in the condition or the loop may never stop.",
          `var command = readln().trim()
while (command != "done") {
    println("received: " + command)
    command = readln().trim()
}`,
          "Input is read once before the loop and again at the end of each iteration. Entering <code>done</code> makes the next condition false.",
          "Identify initialization, condition, and update as three separate parts of a while-loop design.",
          [
            Q("What is the sentinel?", "<code>\"done\"</code>."),
            Q("Why is readln called inside the loop?", "To update command for the next condition check."),
            Q("Does the body run when the first input is done?", "No.")
          ]
        ),
        R(
          "l21-shortcuts",
          "lecture-21-assignment-shortcuts.html",
          "Assignment Shortcuts",
          "optional",
          "Operators such as += and ++ are shorter forms of common reassignments.",
          "Translate assignment shortcuts into explicit assignments.",
          ["mutation", "reassign", "operator"],
          "Kotlin provides shorthand for updating numeric variables. <code>x += amount</code> means <code>x = x + amount</code>. <code>x++</code> means increase x by one.",
          "The shorthand does not change the stateful meaning; it only shortens the statement.",
          `var attempts = 0
attempts += 2
attempts++

// attempts is now 3`,
          "The first update changes 0 to 2. The increment changes 2 to 3.",
          "Use the explicit form when learning or debugging the data flow; use the shorthand when its meaning is already clear.",
          [
            Q("Rewrite <code>points += 5</code> explicitly.", "<code>points = points + 5</code>."),
            Q("What does <code>attempts++</code> add?", "One."),
            Q("Can these operators be used on a val Int name?", "No, because the name would need reassignment.")
          ]
        )
      ]
    },
    {
      id: "l24-25",
      hub: "lecture-24-25-graphs-cycles.html",
      lecture: "Lectures 24-25",
      title: "Graphs and Cycles",
      minutes: 16,
      summary: "Six necessary readings introduce graph representation, mutable edges, cycles, visited sets, DFS, BFS, and path results. The optional reading compares search strategies.",
      cardSummary: "Short readings on graph edges, cycles, visited sets, depth-first and breadth-first search, and paths.",
      goal: "Students arrive able to traverse linked data safely even when an edge leads back to an earlier node.",
      nextHref: "extra-graphs-loops-matrices.html",
      nextLabel: "Extra graph reading set",
      readings: [
        R(
          "l24-graph-data",
          "lecture-24-graph-nodes-and-edges.html",
          "Graphs Have Nodes and Edges",
          "necessary",
          "A graph contains nodes connected by edges, and nodes may have any number of neighbors.",
          "Identify nodes, directed edges, and cycles in linked data.",
          ["graph", "edge", "cycle"],
          "A <strong>graph</strong> is a collection of nodes and <strong>edges</strong>. A directed edge from A to B does not automatically create an edge from B to A. A <strong>cycle</strong> is a path that eventually returns to a previously visited node.",
          "Unlike a tree, a graph node may have several incoming edges, and there may be no single root.",
          `data class Station(
    val name: String,
    val next: MutableList&lt;Station&gt;
)

typealias TransitGraph = MutableSet&lt;Station&gt;`,
          "Each Station is a node. Each item in <code>next</code> represents a directed connection from that Station to another.",
          "Drawing a small graph on paper can clarify direction before writing traversal code.",
          [
            Q("What represents an edge?", "One Station appearing in another Station's <code>next</code> list."),
            Q("Are edges automatically two-way?", "No."),
            Q("What is a cycle?", "A path that returns to an already encountered node.")
          ]
        ),
        R(
          "l24-add-edge",
          "lecture-24-lookup-and-add-edges.html",
          "Look Up Nodes and Mutate an Edge",
          "necessary",
          "Adding a graph edge finds two existing nodes and mutates the source node's adjacency list.",
          "Implement a directed edge update with lookup and MutableList.add.",
          ["edge", "mutable-list", "mutation"],
          "An adjacency list stores each node's outgoing neighbors. To add a directed edge, locate the source and destination nodes, then add the destination object to the source's neighbor list.",
          "The graph's structure changes even though no Station name is reassigned.",
          `fun addConnection(from: String, to: String) {
    val source = stations.find { it.name == from }!!
    val destination = stations.find { it.name == to }!!
    source.next.add(destination)
}`,
          "The edge points from source to destination because only <code>source.next</code> is changed.",
          "Decide whether duplicate edges are allowed and whether missing node names should crash or return a nullable result.",
          [
            Q("Which list is mutated?", "<code>source.next</code>."),
            Q("Does this also add a reverse edge?", "No."),
            Q("What assumption is made by <code>!!</code>?", "Both named stations already exist.")
          ]
        ),
        R(
          "l24-visited",
          "lecture-24-cycles-and-visited-sets.html",
          "Stop Cycles with a Visited Set",
          "necessary",
          "A visited set records nodes already processed so traversal does not repeat them forever.",
          "Add and check node identities in a graph traversal.",
          ["visited-set", "cycle", "set"],
          "A <strong>visited set</strong> stores an identifier for each node already processed. Before following an edge, traversal checks whether its destination has been visited.",
          "This both prevents infinite recursion on cycles and avoids repeating work when multiple paths reach the same node.",
          `val visited = mutableSetOf&lt;String&gt;()

fun visit(station: Station) {
    if (station.name in visited) return
    visited.add(station.name)
    for (neighbor in station.next) {
        visit(neighbor)
    }
}`,
          "A station is marked before its outgoing edges are explored. If a cycle returns to it, the early return stops that route.",
          "Mark a node before recursing into neighbors, not after, so immediate cycles are safe.",
          [
            Q("What values are stored in visited?", "Station names."),
            Q("When is a station added?", "Before visiting its neighbors."),
            Q("Why use a Set?", "Membership checks are direct and duplicates are unnecessary.")
          ]
        ),
        R(
          "l25-dfs",
          "lecture-25-depth-first-search.html",
          "Depth-First Search Follows One Route",
          "necessary",
          "Depth-first search explores a neighbor's descendants before trying the next neighbor.",
          "Trace a recursive DFS with a visited set.",
          ["depth-first-search", "visited-set", "recursion"],
          "<strong>Depth-first search</strong>, or DFS, follows one outgoing route as far as possible, then returns to try alternatives. A recursive function naturally supplies this behavior.",
          "DFS can answer reachability without storing every possible path at once.",
          `fun reaches(start: Station, target: String): Boolean {
    val visited = mutableSetOf&lt;String&gt;()
    fun dfs(current: Station): Boolean {
        if (current.name == target) return true
        if (!visited.add(current.name)) return false
        return current.next.any(::dfs)
    }
    return dfs(start)
}`,
          "<code>visited.add</code> returns false when the name was already present. <code>any</code> stops when one recursive route finds the target.",
          "The visited set belongs to one search operation, so it is created inside the public function.",
          [
            Q("What makes this search depth-first?", "It recursively explores one neighbor before moving to the next."),
            Q("What does a repeated node return?", "<code>false</code> for that route."),
            Q("Which operation combines neighbor answers?", "<code>any</code>.")
          ]
        ),
        R(
          "l25-bfs",
          "lecture-25-breadth-first-worklists.html",
          "Breadth-First Search Uses a Worklist",
          "necessary",
          "Breadth-first search processes a queue of discovered nodes in increasing edge distance.",
          "Trace a BFS queue and visited set.",
          ["breadth-first-search", "worklist", "visited-set"],
          "<strong>Breadth-first search</strong>, or BFS, explores all nodes one edge away before nodes two edges away. A <strong>worklist</strong> queue stores nodes discovered but not yet processed.",
          "Removing from the front and adding neighbors to the back creates first-in, first-out order.",
          `val queue = mutableListOf(start)
val visited = mutableSetOf&lt;String&gt;()

while (queue.isNotEmpty()) {
    val current = queue.removeAt(0)
    if (visited.add(current.name)) {
        queue.addAll(current.next)
    }
}`,
          "Each new node enters the back of the queue. The visited check prevents its neighbors from being enqueued repeatedly after processing.",
          "A queue is about processing order; the visited set is about avoiding repeated processing.",
          [
            Q("Where are new neighbors added?", "At the end of the queue."),
            Q("Which node is removed next?", "The node at index 0."),
            Q("What prevents cycles from repeating forever?", "The visited set.")
          ]
        ),
        R(
          "l25-path",
          "lecture-25-return-a-graph-path.html",
          "Return a Path through a Graph",
          "necessary",
          "A path search carries or builds a list of node names while still respecting visited nodes.",
          "Build a path result and represent search failure.",
          ["graph", "accumulator", "visited-set"],
          "A reachability function returns only true or false. A path function must additionally remember which nodes led to the destination. An accumulator can carry the path so far.",
          "Visited tracking remains necessary because a path-building search can encounter cycles too.",
          `fun pathFrom(
    current: Station,
    target: String,
    path: List&lt;String&gt;,
    visited: MutableSet&lt;String&gt;
): List&lt;String&gt; {
    if (current.name == target) return path + current.name
    if (!visited.add(current.name)) return emptyList()
    return current.next.fold(emptyList()) { found, neighbor -&gt;
        if (found.isNotEmpty()) found
        else pathFrom(neighbor, target, path + current.name, visited)
    }
}`,
          "The successful result includes each station in route order. An empty list represents failure for a branch.",
          "Avoid sharing one mutable path list across branches unless backtracking is handled carefully.",
          [
            Q("What represents failure?", "An empty list."),
            Q("When is the current name added?", "Before the recursive call, as part of the path accumulator."),
            Q("What prevents following a cycle?", "The visited set.")
          ]
        ),
        R(
          "l25-compare",
          "lecture-25-dfs-versus-bfs.html",
          "DFS versus BFS",
          "optional",
          "DFS and BFS can both find reachable nodes, but they explore in different orders and have different path guarantees.",
          "Choose DFS or BFS based on the needed result.",
          ["depth-first-search", "breadth-first-search", "worklist"],
          "DFS uses recursion or a stack-like worklist and explores depth first. BFS uses a queue and explores by distance from the start.",
          "If every edge has equal cost, the first path found by BFS uses the fewest edges. DFS may find a path quickly but not necessarily a shortest one.",
          `// DFS frontier behavior: last discovered, first explored
// BFS frontier behavior: first discovered, first explored`,
          "Both strategies still need visited tracking in a graph with cycles.",
          "Traversal order matters when the problem asks for a particular path, not only whether any path exists.",
          [
            Q("Which strategy finds a fewest-edge path in an unweighted graph?", "BFS."),
            Q("Which strategy follows one route deeply first?", "DFS."),
            Q("Do both need visited tracking?", "Yes.")
          ]
        )
      ]
    },
    {
      id: "extra-graphs",
      hub: "extra-graphs-loops-matrices.html",
      lecture: "Extra Graph Lesson",
      title: "Graph Matrices and Nested Loops",
      minutes: 13,
      summary: "Five necessary readings cover arrays, two-dimensional matrices, indexing, nested loops, and edge updates. The optional reading explores numeric ranges.",
      cardSummary: "Short readings on Arrays, adjacency matrices, indices, nested loops, and range pipelines.",
      goal: "Students arrive able to locate and update a directed edge in a fixed-size Boolean matrix.",
      nextHref: "index.html",
      nextLabel: "All lectures",
      readings: [
        R(
          "extra-array",
          "extra-kotlin-arrays.html",
          "Arrays Are Fixed-Size and Mutable",
          "necessary",
          "An Array stores a fixed number of elements and supports indexed reading and writing.",
          "Construct an Array and update one indexed element.",
          ["array", "index", "mutation"],
          "A Kotlin <strong>Array</strong> is a fixed-size mutable collection. Its size does not change, but an element at an existing index can be replaced.",
          "Arrays are useful when the number of positions is known and fast indexed access matters.",
          `val seats: Array&lt;Boolean&gt; = arrayOf(false, false, false)
seats[1] = true
val reserved = seats[1]`,
          "Indexes begin at 0, so index 1 is the second seat. The assignment changes only that position.",
          "Fixed-size means <code>add</code> and <code>remove</code> are not ordinary Array operations.",
          [
            Q("How many elements are in <code>seats</code>?", "Three."),
            Q("Which position is changed?", "The second element, at index 1."),
            Q("Can the Array grow to four elements with <code>add</code>?", "No.")
          ]
        ),
        R(
          "extra-matrix",
          "extra-two-dimensional-arrays.html",
          "A Matrix Is an Array of Arrays",
          "necessary",
          "A two-dimensional matrix uses one index for a row and another for a column.",
          "Construct and read an Array<Array<Boolean>>.",
          ["matrix", "array", "index"],
          "A <strong>matrix</strong> is a rectangular grid. In Kotlin it can be represented as an Array whose elements are row Arrays. Access uses two brackets: row first, then column.",
          "For a graph matrix, row can represent the source node and column the destination node.",
          `val grid: Array&lt;Array&lt;Boolean&gt;&gt; =
    Array(3) { Array(3) { false } }

grid[0][2] = true`,
          "The constructor creates three rows, each containing three false values. The assignment marks the cell at row 0, column 2.",
          "Keep the row/column meaning consistent across every graph function.",
          [
            Q("How many cells are in the matrix?", "Nine."),
            Q("Which index selects the row?", "The first index."),
            Q("What value is initially stored in every cell?", "<code>false</code>.")
          ]
        ),
        R(
          "extra-label-index",
          "extra-labels-to-matrix-indices.html",
          "Translate Node Labels into Indices",
          "necessary",
          "indexOf connects a meaningful node label to its numeric matrix position.",
          "Use indexOf to locate a row or column.",
          ["index", "array", "graph"],
          "Programs often present graph nodes with String labels while the matrix uses integer positions. <code>indexOf</code> searches an Array and returns the matching index.",
          "A shared label Array defines the row and column ordering used by the whole matrix.",
          `val stops = arrayOf("North", "Central", "South")

val row = stops.indexOf("Central")  // 1
val col = stops.indexOf("South")    // 2`,
          "An edge from Central to South belongs at <code>matrix[1][2]</code>.",
          "<code>indexOf</code> returns -1 when no label matches, so input validation may be needed.",
          [
            Q("What index belongs to North?", "<code>0</code>."),
            Q("Where is the Central-to-South cell?", "Row 1, column 2."),
            Q("What does indexOf return for a missing label?", "<code>-1</code>.")
          ]
        ),
        R(
          "extra-nested-loops",
          "extra-nested-for-loops.html",
          "Use Nested Loops to Visit a Grid",
          "necessary",
          "An outer loop selects each row while an inner loop selects every column in that row.",
          "Trace nested for loops over matrix indices.",
          ["for-loop", "matrix", "range"],
          "A nested loop places one loop inside another. For every row chosen by the outer loop, the inner loop runs through all columns.",
          "This visits every matrix cell exactly once when both ranges cover the full dimensions.",
          `for (row in grid.indices) {
    for (col in grid[row].indices) {
        println(grid[row][col])
    }
}`,
          "<code>indices</code> produces the valid index range for the corresponding Array. A 3-by-3 grid prints nine values.",
          "Use the current row's size for the inner range so the code remains valid even for uneven rows.",
          [
            Q("How many times does the inner body run for a 3-by-3 grid?", "Nine times total."),
            Q("What does the outer variable represent?", "A row index."),
            Q("Why use <code>grid[row].indices</code>?", "It gives valid columns for the current row.")
          ]
        ),
        R(
          "extra-edge-cell",
          "extra-matrix-edge-updates.html",
          "Add and Query an Edge Cell",
          "necessary",
          "A directed edge is stored as true at the source row and destination column.",
          "Implement matrix edge update and lookup operations.",
          ["edge", "matrix", "mutation"],
          "An adjacency matrix stores a Boolean for every possible directed edge. To add an edge, translate labels to indices and assign true. To query an edge, return that same cell.",
          "Using the same row/column convention in both functions is essential.",
          `fun connect(from: String, to: String) {
    val row = stops.indexOf(from)
    val col = stops.indexOf(to)
    grid[row][col] = true
}

fun connected(from: String, to: String): Boolean {
    return grid[stops.indexOf(from)][stops.indexOf(to)]
}`,
          "Only the from-to cell changes. The reverse to-from cell remains false unless another call sets it.",
          "A directed matrix is generally not symmetric.",
          [
            Q("Which label chooses the row?", "<code>from</code>."),
            Q("Does connect automatically add the reverse edge?", "No."),
            Q("What type does connected return?", "<code>Boolean</code>.")
          ]
        ),
        R(
          "extra-ranges",
          "extra-kotlin-ranges-and-step.html",
          "Build Numeric Ranges with step",
          "optional",
          "Kotlin ranges generate ordered integer values, and step changes the increment.",
          "Predict values produced by .., until, and step.",
          ["range", "higher-order-function", "for-loop"],
          "A <strong>range</strong> describes an ordered sequence of integers. <code>1..5</code> includes both endpoints. <code>1 until 5</code> excludes 5. <code>step</code> changes how far the sequence advances.",
          "Ranges can drive loops or be transformed with familiar collection operations.",
          `val odds = (1..9 step 2).toList()
val squares = (1 until 5).map { it * it }`,
          "<code>odds</code> is <code>[1, 3, 5, 7, 9]</code>. The second range contains 1 through 4, so the squares are <code>[1, 4, 9, 16]</code>.",
          "Check whether the upper endpoint is included before predicting loop bounds.",
          [
            Q("Does <code>1..3</code> include 3?", "Yes."),
            Q("Does <code>1 until 3</code> include 3?", "No."),
            Q("What values does <code>2..8 step 3</code> produce?", "<code>2, 5, 8</code>.")
          ]
        )
      ]
    },
  ].map((set) => {
    const baseSet = set.id === "l02" ? {
      ...set,
      minutes: 13,
      summary: "Five necessary readings follow the function design recipe from purpose and stub through examples, template and inventory, implementation, debugging, and coverage. Two optional readings explore helpers and why functions matter beyond this course.",
      cardSummary: "Short readings on KDocs, signatures, stubs, examples, templates, input inventories, local subcomputations, debugging, and helpers.",
      goal: "Students arrive able to follow the function design recipe before writing a complete implementation.",
      readings: lecture2Readings
    } : set;
    const whyMatters = whyMattersBySet[baseSet.id];
    if (!whyMatters) return baseSet;
    return {
      ...baseSet,
      summary: baseSet.id === "l02" ? baseSet.summary : `${baseSet.summary} An additional optional reading looks ahead to this topic's broader uses in computer science.`,
      cardSummary: baseSet.id === "l02" ? baseSet.cardSummary : `${baseSet.cardSummary} Includes an optional why-this-matters reading.`,
      readings: [...baseSet.readings, whyMatters]
    };
  });
})();

if (typeof window !== "undefined") {
  window.CS1101_READING_SETS = CS1101_READING_SETS_DATA;
}

if (typeof module !== "undefined") {
  module.exports = CS1101_READING_SETS_DATA;
}
