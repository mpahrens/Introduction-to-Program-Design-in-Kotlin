/* Runnable companions to the catalog. Code here is plain Kotlin, not HTML.
 * Each program owns its inputs and main; only reusable definitions are hidden.
 * See kotlin-editor.md for the example schema and verification command. */
(function (root) {
  function configure(sets) {
    const readings = new Map(sets.flatMap(set => set.readings).map(r => [r.id, r]));
    const decode = code => code.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
    const source = id => decode(readings.get(id).code);
    const indent = code => code.split("\n").map(line => line ? "    " + line : "").join("\n");
    const main = body => `fun main() {\n${indent(body)}\n}`;
    function example(id, code, prompt, expected, dependencies = [], note = "") {
      const reading = readings.get(id);
      reading.examples = [{ kind: "kotlin", title: reading.title, code, prompt, expected,
        dependencies: dependencies.map(name => `kotlin-dependencies/${name}.kt`), note }];
    }
    function definition(id, calls, prompt, expected, dependencies = [], setup = "", note = "") {
      example(id, source(id) + "\n\n" + main([setup, calls].filter(Boolean).join("\n")), prompt, expected, dependencies, note);
    }
    function statements(id, results, prompt, expected, dependencies = [], setup = "", note = "") {
      example(id, main([setup, source(id), results].filter(Boolean).join("\n\n")), prompt, expected, dependencies, note);
    }

    // Diagrams, inventories, and pseudocode explain ideas rather than programs.
    const conceptual = ["l02-parameters-arguments", "l02-why-functions-matter",
      "l04-product-types-in-computer-science", "l05-why-conditions-matter", "l07-sum-types-in-computer-science",
      "l10-why-decomposition-matters", "l11-why-lists-matter", "l14-why-trees-matter",
      "l15-why-search-trees-matter", "l17-why-general-trees-matter", "l19-why-search-context-matters",
      "l21-why-state-and-loops-matter", "l24-why-graph-search-matters", "extra-why-matrices-matter"];
    for (const id of conceptual) {
      readings.get(id).examples = [{ kind: "text", title: "A model to think with", code: source(id) }];
    }

    const shippingStages = source("l02-return").split(/\n\n(?=\/\/ [23]\.)/)
      .map(stage => stage.slice(stage.indexOf("fun shippingCost")).trim());
    const shipping = shippingStages[2];
    const todoError = "kotlin.NotImplementedError: An operation is not implemented.";
    definition("l02-signature", 'println(shippingCost(2.0, false))', "Run the stub to see TODO() report the unfinished implementation. Change the arguments and run again.", null, [], "", "Expected error: NotImplementedError: An operation is not implemented. TODO() stops execution, so no shipping cost is printed.");
    readings.get("l02-signature").examples[0].expectedError = todoError;
    example("l02-tests-stubs", source("l02-signature") + "\n\n" + main(source("l02-tests-stubs") + '\nprintln("All tests passed")'), "Run to see the TODO() error. Replace TODO() with the shipping-cost implementation, then rerun without changing the tests.", null, ["kotest-mini"], "Expected error: NotImplementedError: An operation is not implemented. The first shippingCost call stops the run before either comparison can complete; the second test is not reached.");
    readings.get("l02-tests-stubs").examples[0].expectedError = todoError;
    const stageGuidance = [
      { title: "1. Name the answer", prompt: "Run to see the unfinished overallCost. Replace TODO() with a Double expression and run again.", note: "This stage names the answer before deciding how to compute it. Running reaches TODO() while defining overallCost and throws NotImplementedError: An operation is not implemented." },
      { title: "2. Name the subcomputations", prompt: "Replace the baseCost TODO() and run again. Then replace the expressSurcharge TODO() and rerun.", note: "This stage splits the answer into two pieces. Running first throws NotImplementedError at baseCost. Once that TODO() is replaced, the next run reaches the TODO() for expressSurcharge." },
      { title: "3. Compute from the inputs", prompt: "Change the weight and compare standard and express shipping.", note: "Both subcomputations now use the inputs, so this complete version returns and prints the shipping costs." }
    ];

    readings.get("l02-return").examples = shippingStages.map((code, index) => ({
      kind: index < 2 ? "text" : "kotlin", ...stageGuidance[index],
      code: code + "\n\n" + main('assertSoftly {\n  shippingCost(2.0, false) shouldBe (6.5 plusOrMinus 0.01)\n  shippingCost(2.0, true) shouldBe (12.5 plusOrMinus 0.01)\n}'),
      dependencies: ["kotlin-dependencies/kotest-mini.kt"]
    }));
    example("l02-debug-coverage", shipping + "\n\n" + main(source("l02-debug-coverage") + '\nprintln("All four tests passed")'), "Run the tests, then introduce a mistake in the weight boundary or express surcharge. Which tests catch it?", "✅ Test Passed: Got 5.0\n✅ Test Passed: Got 11.0\n✅ Test Passed: Got 6.5\n✅ Test Passed: Got 12.5\nAll four tests passed", ["kotest-mini"]);
    definition("l02-helper", 'println(baseCost(2.0))\nprintln(shippingCost(2.0, true))', "Try weights on either side of 1.0 and watch how the helper contributes to the final answer.", "6.5\n12.5");
    definition("l02-if-expressions", 'println(ticketLabel(21))\nprintln(ticketLabel(22))', "Change > to >= and predict which result changes.", "youth ticket\nadult ticket");

    definition("l03-enum", 'println(semesterStart)', "Replace FALL with another Season value.", "FALL");
    definition("l03-when", 'println(clothing(Season.WINTER))\nprintln(clothing(Season.SUMMER))', "Choose another season or change one branch's clothing recommendation.", "coat\nshorts", ["Season"]);
    definition("l04-data-class", 'val handbook = Book("Kotlin Pocket Guide", 144, "paperback")\nprintln(handbook)', "Edit the constructor arguments and inspect the resulting Book.", 'Book(title=Kotlin Pocket Guide, pages=144, format=paperback)');
    statements("l04-construct-select", 'println(count)\nprintln(label)', "Change the book's page count and title. Predict both selected values.", "144\nKotlin Pocket Guide", ["Book"]);
    definition("l04-produce-data", 'val original = Book("Tiny Types", 80, "ebook")\nval expanded = addAppendix(original, 16)\nprintln(original.pages)\nprintln(expanded.pages)', "Change the appendix size. Does the original book change?", "80\n96", ["Book"]);
    example("l04-equality", main(source("l04-equality").replace('first == second  // true', 'println(first == second)  // true').replace('first == third   // false', 'println(first == third)   // false')), "Change a field of the second or third book and predict equality.", "true\nfalse", ["Book"]);
    statements("l04-named-arguments", 'println(handbook)', "Reorder the named arguments and check that the book stays the same.", 'Book(title=Kotlin Field Guide, pages=176, format=paperback)', ["Book"]);
    statements("l04-copy", 'println(original.pages)\nprintln(expanded.pages)', "Change which fields copy replaces, then print both books.", "80\n96", ["Book"]);

    definition("l05-when-guards", 'println(ticketPrice(12))\nprintln(ticketPrice(13))\nprintln(ticketPrice(65))', "Try a negative age and the ages immediately around each boundary.", "8\n14\n10");
    example("l05-boolean-operators", main('val hasTicket = true\nval doorOpen = false\n\nprintln(hasTicket && doorOpen)\nprintln(hasTicket || doorOpen)\nprintln(!doorOpen)'), "Change each Boolean and predict all three results before running.", "false\ntrue\ntrue");
    example("l05-string-predicates", main('val filename = "notes-final.txt"\n\nprintln(filename.startsWith("notes"))\nprintln(filename.endsWith(".txt"))\nprintln(filename.contains("FINAL", ignoreCase = true))'), "Change the filename or turn off ignoreCase.", "true\ntrue\ntrue");
    definition("l05-nested-fields", 'println(city)', "Change the city inside Address and follow the two field selections.", "Worcester");
    definition("l05-short-circuit", 'println(startsWithCapitalA("Ada"))\nprintln(startsWithCapitalA("Sam"))\nprintln(startsWithCapitalA(""))', "Run the empty-string case. Why is substring safe here?", "true\nfalse\nfalse");

    definition("l06-sealed", 'println(Payment.Cash(12))\nprintln(Payment.Card("4821"))\nprintln(Payment.GiftCode("WELCOME"))', "Change the values stored by each variant.", "Cash(dollars=12)\nCard(lastFour=4821)\nGiftCode(code=WELCOME)");
    definition("l06-construct-variants", 'println(lunch)\nprintln(supplies)', "Construct a GiftCode value and print it too.", "Cash(dollars=12)\nCard(lastFour=4821)", ["Payment"]);
    definition("l07-smart-casts", 'println(receiptLabel(Payment.Cash(12)))\nprintln(receiptLabel(Payment.Card("4821")))\nprintln(receiptLabel(Payment.GiftCode("WELCOME")))', "Change a payment variant and watch which branch selects its fields.", "$12\ncard 4821\ngift WELCOME", ["Payment"]);
    definition("l07-sum-template", 'println(redact(Payment.Cash(12)))\nprintln(redact(Payment.Card("4821")))\nprintln(redact(Payment.GiftCode("WELCOME")))', "Change the placeholder values while preserving the variant of each payment.", "Cash(dollars=12)\nCard(lastFour=0000)\nGiftCode(code=hidden)", ["Payment"]);
    definition("l07-smart-cast-error", 'println(amountLabel(Payment.Cash(12)))\nprintln(amountLabel(Payment.Card("4821")))', "First run the working version. Uncomment payment.dollars to see the compiler error; comment it again to repair it.", "$12\nnot cash", ["Payment"], "", "With payment.dollars uncommented before the type check, expect an unresolved reference to dollars: Payment does not guarantee that field.");
    definition("l06-sum-product", 'println(Coordinate(3, 4))\nprintln(Result.Success("Saved"))\nprintln(Result.Failure("Missing file"))', "Change both coordinate fields, then choose a different Result variant.", "Coordinate(x=3, y=4)\nSuccess(message=Saved)\nFailure(reason=Missing file)");

    definition("l08-recursive-progress", 'println(countDownSum(3))\nprintln(countDownSum(0))', "Try another small nonnegative integer and predict the sum.", "6\n0", [], "", "The input must be nonnegative so each recursive call moves toward zero.");
    definition("l09-recursive-data", 'println(twoWords)', "Add another SLNode before SLEmpty.", "Node(first=design, rest=Node(first=data, rest=Empty))");
    const words = 'val twoWords = SLNode("design", SLNode("data", SLEmpty))';
    definition("l09-list-template", 'println(wordCount(twoWords))\nprintln(wordCount(SLEmpty))', "Add a word and predict the new count.", "2\n0", ["StringList"], words);
    definition("l09-list-patterns", 'println(anyShort(twoWords))\nprintln(anyShort(SLNode("hi", twoWords)))', "Change hi to a word with four or more letters.", "false\ntrue", ["StringList"], words);
    example("l08-trace", source("l08-recursive-progress") + "\n\n" + main('println(countDownSum(3))'), "Check the hand-worked trace, then change 3 and write a new trace before running.", "6");
    readings.get("l08-trace").examples.unshift({ kind: "text", title: "Trace by hand", code: source("l08-trace") });
    example("l08-why-recursion-matters", `data class MouseEvent(val x: Int, val y: Int)

sealed interface HandlerChain {
    data object NoHandler : HandlerChain
    data class Handler(
        val tryHandle: (MouseEvent) -> Boolean,
        val nextHandler: HandlerChain
    ) : HandlerChain
}

fun handleMouseEvent(event: MouseEvent, chain: HandlerChain) {
    when (chain) {
        HandlerChain.NoHandler -> error("mouse event unhandled")
        is HandlerChain.Handler -> if (!chain.tryHandle(event)) {
            handleMouseEvent(event, chain.nextHandler)
        }
    }
}

fun main() {
    val background = HandlerChain.Handler({
        println("Background handled the click")
        true
    }, HandlerChain.NoHandler)
    val button = HandlerChain.Handler({ event ->
        val inside = event.x in 0..100 && event.y in 0..40
        if (inside) println("Button handled the click")
        inside
    }, background)
    handleMouseEvent(MouseEvent(20, 10), button)
    handleMouseEvent(MouseEvent(150, 10), button)
}`, "Change the click coordinates. Which handler receives each click?", "Button handled the click\nBackground handled the click", [], "This is a small simulation of a mouse event, so no GUI library is needed.");

    const temperatures = 'val readings = TempNode(68, TempNode(72, TempNode(76, TempEmpty)))';
    definition("l10-average-pieces", 'println(averageTemperature(readings))', "Change a temperature and predict how both the total and average change.", "72.0", ["TempList", "TemperatureHelpers"], temperatures, "This version expects a nonempty list. The empty-input reading handles the case with no temperatures.");
    definition("l10-helper-decomposition", 'println(temperatureCount(readings))\nprintln(temperatureCount(TempEmpty))', "Add or remove a TempNode and check the count.", "3\n0", ["TempList"], temperatures);
    definition("l10-empty-average", 'println(safeAverage(216, 3))\nprintln(safeAverage(0, 0))', "Change the total and count. Keep count zero in one call to check the empty case.", "72.0\nnull");
    statements("l10-conversion-filter", 'println(warmTotal)\nprintln(warmCount)\nprintln(warmAverage)', "Change the threshold in both helper calls and predict which temperatures remain.", "148\n2\n74.0", ["TempList", "TemperatureHelpers"], temperatures, "This calculation expects at least one temperature at or above the threshold. With none, 0.0 / 0 produces NaN; use the safeAverage pattern to represent a missing average as null.");

    definition("l11-function-type", 'val scores = listOf(70, 80, 90)\nprintln(adjustScores(scores, ::addBonus))', "Change the bonus in addBonus and run the same list through it.", "[75, 85, 95]", [], 'fun addBonus(score: Int): Int = score + 5');
    statements("l11-list-type", 'println(elevations)\nprintln(trailNames)', "Add one value of the right type to each list.", "[420, 610, 575]\n[Pine, Lake, Ridge]");
    example("l11-function-reference", 'val elevations = listOf(420, 610, 575)\n\n' + source("l11-function-reference") + '\n\n' + main('println(highTrails)'), "Change the cutoff in isHigh and predict the filtered list.", "[610]");
    example("l12-predicates", 'fun isHigh(height: Int): Boolean = height > 600\n\n' + main('val heights = listOf(420, 610, 575)\nprintln(heights.any(::isHigh))\nprintln(heights.all(::isHigh))\nprintln(heights.filter(::isHigh))'), "Try a list where all heights are high, then an empty list.", "true\nfalse\n[610]");
    definition("l12-map", 'println(labels)', "Change the formatting function and inspect every transformed value.", "[420 ft, 610 ft, 575 ft]");
    definition("l13-fold-reduce", 'println(total)\nprintln(heights.reduce(::addToTotal))\nprintln(emptyList<Int>().fold(0, ::addToTotal))', "Change the initial fold value. Compare it with reduce, which uses the first element as its starting value.", "1605\n1605\n0", [], "", "reduce requires a nonempty list. fold can return its initial value for an empty list.");
    definition("l13-nullable-search", 'println(result)', "Add a trail beginning with Z and run again.", "null");
    statements("l11-lambda-syntax", 'println(labelsWithName)\nprintln(labelsWithIt)', "Change both lambdas to produce the same new label format.", "[420 ft, 610 ft, 575 ft]\n[420 ft, 610 ft, 575 ft]");
    statements("l13-pipeline", 'println(answer)', "Change the filter boundary and predict the labels that survive.", "[610 ft, 575 ft]", [], 'val heights = listOf(420, 610, 575)');

    const quiz = 'val quiz = Question("Like tea", Question("With milk", End, End), End)';
    definition("l14-tree-data", 'println(quiz)', "Add a question in place of an End leaf.", "Question(prompt=Like tea, yes=Question(prompt=With milk, yes=End, no=End), no=End)", [], quiz);
    definition("l14-template", 'println(questionCount(quiz))\nprintln(questionCount(End))', "Add a question to the no branch and predict the count.", "2\n0", ["QuizTree"], quiz);
    definition("l14-combine", 'println(anyMentions(quiz, "milk"))\nprintln(anyMentions(quiz, "coffee"))', "Change the search word and consider which branches need exploring.", "true\nfalse", ["QuizTree"], quiz);
    definition("l14-rebuild", 'println(addQuestionMark(quiz))\nprintln(quiz)', "Change the text transformation and confirm the original tree stays unchanged.", "Question(prompt=Like tea?, yes=Question(prompt=With milk?, yes=End, no=End), no=End)\nQuestion(prompt=Like tea, yes=Question(prompt=With milk, yes=End, no=End), no=End)", ["QuizTree"], quiz);

    const bst = 'val tree = StudentBST.Entry(20,\n    StudentBST.Entry(10, StudentBST.Leaf, StudentBST.Leaf),\n    StudentBST.Entry(30, StudentBST.Leaf, StudentBST.Leaf))';
    definition("l15-invariant", 'println(tree.id)\nprintln(left.id)\nprintln(right.id)', "Change the ids while preserving left < root < right.", "20\n10\n30", [], 'val left = StudentBST.Entry(10, StudentBST.Leaf, StudentBST.Leaf)\nval right = StudentBST.Entry(30, StudentBST.Leaf, StudentBST.Leaf)\nval tree = StudentBST.Entry(20, left, right)');
    definition("l15-ordered-search", 'println(containsId(tree, 10))\nprintln(containsId(tree, 25))', "Search for 30, then an absent id. Trace the one branch chosen each time.", "true\nfalse", ["StudentBST"], bst);
    definition("l16-compound-nullable", 'println(compareKey("Ada", 2020, "Mina", 2019))\nprintln(compareKey("Ada", 2021, "Ada", 2020))\nprintln(compareKey("Ada", 2020, "Ada", 2020))', "Keep authors equal and change the years, then change an author.", "-1\n1\n0");
    definition("l16-insert", 'println(addId(tree, 25))\nprintln(addId(tree, 20) == tree)', "Insert an id on the left, then insert an existing id.", "Entry(id=20, left=Entry(id=10, left=Leaf, right=Leaf), right=Entry(id=30, left=Entry(id=25, left=Leaf, right=Leaf), right=Leaf))\ntrue", ["StudentBST"], bst);
    definition("l16-prune-count", 'println(countAtLeast(tree, 20))\nprintln(countAtLeast(tree, 31))', "Change the minimum. Which subtrees can the function skip?", "2\n0", ["StudentBST"], bst);

    const menu = 'val drinks = MenuItem("Drinks", listOf(\n    MenuItem("Tea", emptyList()),\n    MenuItem("Juice", emptyList())\n))';
    definition("l17-aa-data", 'println(drinks)', "Add a third child to Drinks.", "MenuItem(label=Drinks, children=[MenuItem(label=Tea, children=[]), MenuItem(label=Juice, children=[])])");
    definition("l17-descendants", 'println(directChildCount(drinks))\nprintln(totalItemCount(drinks))', "Add a grandchild under Tea. Which count changes?", "2\n3", ["MenuItem"], menu);
    definition("l18-map-children", 'println(uppercaseMenu(drinks))\nprintln(drinks.label)', "Change uppercase to lowercase. Check that the original root label is unchanged.", "MenuItem(label=DRINKS, children=[MenuItem(label=TEA, children=[]), MenuItem(label=JUICE, children=[])])\nDrinks", ["MenuItem"], menu);
    definition("l18-combine-children", 'println(allLabelsShort(drinks))', "Give a child a label longer than 12 characters and run again.", "true", ["MenuItem"], menu);
    definition("l18-set", 'println(allInitials(drinks))', "Add Toast beside Tea. Does the result contain T twice?", "[D, T, J]", ["MenuItem"], menu, "Every label must be nonempty because first() selects its first character.");
    definition("l19-null-elvis", 'println(findLabel(drinks, "Tea")?.label)\nprintln(findLabel(drinks, "Coffee"))', "Change the target to the root label or a missing label.", "Tea\nnull", ["MenuItem"], menu);
    definition("l19-build-return", 'println(labelsTo(drinks, "Tea"))\nprintln(labelsTo(drinks, "Coffee"))', "Nest Tea inside another menu and inspect the longer path.", "[Drinks, Tea]\nnull", ["MenuItem"], menu);
    definition("l20-accumulator", 'println(deepestLevel(drinks))', "Add a grandchild and predict the deepest level, counting the root as level zero.", "1", ["MenuItem"], menu);
    example("l20-pair", source("l20-pair").split("\n\nval result")[0] + '\n\n' + main(menu + '\nval result = labelAndDepth(drinks, 0)\nprintln(result)'), "Change the depth and print both parts of the pair.", "Drinks\n0", ["MenuItem"]);
    example("l20-styles", `// Build the path after a successful child call returns.
fun labelsReturning(item: MenuItem, target: String): List<String>? {
    if (item.label == target) return listOf(item.label)
    val noPath: List<String>? = null
    return item.children.fold(noPath) { found, child ->
        found ?: labelsReturning(child, target)?.let { childPath ->
            listOf(item.label) + childPath
        }
    }
}

// Carry the path down into each child call.
fun labelsAccumulating(item: MenuItem, target: String, path: List<String>): List<String>? {
    val pathHere = path + item.label
    if (item.label == target) return pathHere
    val noPath: List<String>? = null
    return item.children.fold(noPath) { found, child ->
        found ?: labelsAccumulating(child, target, pathHere)
    }
}

${main(menu + '\nprintln(labelsReturning(drinks, "Tea"))\nprintln(labelsAccumulating(drinks, "Tea", emptyList()))')}`, "Change both targets together. Both styles should find the same path or return null.", "[Drinks, Tea]\n[Drinks, Tea]", ["MenuItem"]);

    statements("l21-var", "", "Change the starting score and predict the final value.", "26");
    example("l21-mutable-data", 'data class Player(val name: String, var points: Int)\n\n' + main(source("l21-mutable-data").split("\n\n")[1] + '\nprintln(roster)'), "Change ari.points after adding Ari and inspect the player in the roster.", "[Player(name=Ari, points=7)]");
    definition("l22-find", 'roster.add(Player("Ari", 4))\nprintln(lookupPlayer("Ari").points)', "Try looking up a name that is absent. Then restore Ari or add the missing player.", "4", [], "", "lookupPlayer assumes the name is present. An absent name produces a NullPointerException at !!.");
    const roster = 'val roster = mutableListOf(Player("Ari", 4), Player("Bo", 6))';
    const lookup = 'fun lookupPlayer(name: String): Player = roster.find { it.name == name }!!';
    example("l22-effects", roster + '\n\n' + lookup + '\n\n' + source("l22-effects") + '\n\n' + main('println(awardPoint("Ari"))\nprintln(roster)'), "Call awardPoint a second time. Notice both the returned value and the changed roster.", "5\n[Player(name=Ari, points=5), Player(name=Bo, points=6)]", ["Player"]);
    statements("l23-for", "", "Add another player and predict the total before running.", "10", ["Player"], roster);
    example("l23-while", main('// Simulate typed lines; each \\n starts the next line.\nprovideInput("help\\nstatus\\ndone\\n")\n\n' + source("l23-while")), "Edit the commands given to provideInput, keeping done as the last line. Run again to replay them.", "received: help\nreceived: status", ["ConsoleInput"], "The supplied provideInput helper feeds this string to Kotlin's readln(); the webpage does not wait for keyboard input. If you remove done, readln() eventually reports end of input.");
    statements("l21-shortcuts", 'println(attempts)', "Change += 2 or add another increment and predict the result.", "3");
    statements("l23-ranges", "", "Change the endpoints or step size and predict the printed sequence.", "Minute 0\nMinute 1\nMinute 2\nMinute 3\n2\n4\n6\n8\n10\n5\n4\n3\n2\n1");

    const graph = `val north = Station("North", mutableListOf())
val central = Station("Central", mutableListOf())
val south = Station("South", mutableListOf())
val east = Station("East", mutableListOf())
val stations: TransitGraph = mutableSetOf(north, central, south, east)
val start = north`;
    const edges = 'north.next.addAll(listOf(central, east))\ncentral.next.add(south)\nsouth.next.add(north) // A cycle back to the start.';
    definition("l24-graph-data", edges + '\nprintln(stations.map { it.name })\nprintln(north.next.map { it.name })', "Add a directed edge and print its source's neighbor names.", "[North, Central, South, East]\n[Central, East]", [], graph, "Station uses an ordinary class so each node keeps its identity when connections change. A data class would derive equality and hashing from the connections, which can recurse around cycles.");
    example("l24-add-edge", graph + '\n\n' + source("l24-add-edge") + '\n\n' + main('addConnection("North", "Central")\nprintln(north.next.map { it.name })\nprintln(central.next.map { it.name })'), "Add the reverse connection explicitly and compare the two neighbor lists.", "[Central]\n[]", ["Station"], "Both station names must already exist in stations.");
    definition("l24-visited", 'visit(start)\nprintln(visited)', "The sample contains a cycle. Add another connection and verify that each name appears once.", "[North, Central, South, East]", ["Station"], graph + '\n' + edges, "Station names are unique in these examples; the visited set records those names.");
    definition("l25-dfs", 'println(reaches(start, "South"))\nprintln(reaches(start, "West"))', "Search for a reachable and an absent station; both searches terminate despite the cycle.", "true\nfalse", ["Station"], graph + '\n' + edges);
    statements("l25-bfs", 'println(visited)', "Change the neighbor order at North and predict the breadth-first visit order.", "[North, Central, East, South]", ["Station"], graph + '\n' + edges);
    definition("l25-path", 'println(pathFrom(start, "South", emptyList(), mutableSetOf()))\nprintln(pathFrom(start, "West", emptyList(), mutableSetOf()))', "Change the target. Use a fresh visited set for each independent search.", "[North, Central, South]\n[]", ["Station"], graph + '\n' + edges);
    example("l25-compare", `fun depthFirst(start: Station): List<String> {
    val visited = mutableSetOf<String>()
    fun visit(current: Station) {
        if (!visited.add(current.name)) return
        for (neighbor in current.next) visit(neighbor)
    }
    visit(start)
    return visited.toList()
}

fun breadthFirst(start: Station): List<String> {
    val visited = mutableSetOf<String>()
    val queue = mutableListOf(start)
    while (queue.isNotEmpty()) {
        val current = queue.removeAt(0)
        if (visited.add(current.name)) queue.addAll(current.next)
    }
    return visited.toList()
}

${main(graph + '\n' + edges + '\nprintln(depthFirst(start))\nprintln(breadthFirst(start))')}`, "Trace the two orders, then change the graph and compare them again.", "[North, Central, South, East]\n[North, Central, East, South]", ["Station"]);

    statements("extra-array", 'println(reserved)\nprintln(seats.toList())', "Reserve a different seat index and inspect the entire array.", "true\n[false, true, false]");
    statements("extra-matrix", 'for (row in grid) println(row.toList())', "Change the row and column of the true cell.", "[false, false, true]\n[false, false, false]\n[false, false, false]");
    statements("extra-label-index", 'println(row)\nprintln(col)', "Change a station name to one absent from stops. indexOf returns -1 when no match exists.", "1\n2");
    const grid = 'val grid = Array(3) { Array(3) { false } }';
    statements("extra-nested-loops", "", "Set one cell to true and predict where it appears in the nine printed values.", Array(9).fill("false").join("\n"), [], grid);
    example("extra-edge-cell", 'val stops = arrayOf("North", "Central", "South")\n' + grid + '\n\n' + source("extra-edge-cell") + '\n\n' + main('connect("North", "South")\nprintln(connected("North", "South"))\nprintln(connected("South", "North"))'), "Add the reverse edge and check both directions.", "true\nfalse", [], "Use names from stops: a missing name gives index -1, which cannot select an array cell.");
    statements("extra-ranges", 'println(odds)\nprintln(squares)', "Change until to .. and predict the extra square.", "[1, 3, 5, 7, 9]\n[1, 4, 9, 16]");

    // Fail during authoring if a new reading has no deliberate example treatment.
    for (const reading of readings.values()) {
      if (!reading.examples) throw new Error(`Missing example configuration: ${reading.id}`);
    }
    return sets;
  }
  if (typeof module !== "undefined" && module.exports) module.exports = configure;
  else configure(root.CS1101_READING_SETS);
})(typeof window === "undefined" ? globalThis : window);
