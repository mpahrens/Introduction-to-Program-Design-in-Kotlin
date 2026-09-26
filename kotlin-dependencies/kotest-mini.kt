import kotlin.math.abs

// State tracking for soft assertions
private var softAssertMode = false
private val collectedErrors = mutableListOf<String>()

/**
 * Executes a testing block, collecting errors and raising a combined exception at the end.
 */
fun assertSoftly(block: () -> Unit) {
    softAssertMode = true
    collectedErrors.clear()
    
    try {
        block()
    } catch(e: NotImplementedError) { collectedErrors.add("TODO() prevented tests from completing") } finally {
        softAssertMode = false
        if (collectedErrors.isNotEmpty()) {
            val failureMessage = buildString {
                append("\n❌ assertSoftly failed with ${collectedErrors.size} assertion(s):\n")
                collectedErrors.forEachIndexed { index, err ->
                    append("  ${index + 1}) $err\n")
                }
            }
            throw AssertionError(failureMessage)
        } else {
            println("✅ All soft assertions passed cleanly!")
        }
    }
}

// Internal routing helper for tests
private fun reportFailure(message: String) {
    if (softAssertMode) {
        collectedErrors.add(message)
    } else {
        throw AssertionError("❌ Test Failed! $message")
    }
}

// --- Extended Assertion Types ---

// Standard Exact Match shouldBe
infix fun <T> T.shouldBe(expected: T) {
    if (this != expected) {
        reportFailure("Expected [$expected] but got [$this]")
    } else if (!softAssertMode) {
        println("✅ Test Passed: Got $this")
    }
}

// Tolerance / Floating-Point Matches
data class ToleranceRange(val value: Double, val margin: Double)
val Number.plusOrMinus: Double get() = this.toDouble()
infix fun Number.plusOrMinus(margin: Number) = ToleranceRange(this.toDouble(), margin.toDouble())

infix fun Number.shouldBe(range: ToleranceRange) {
    val actual = this.toDouble()
    val difference = abs(actual - range.value)
    if (difference > range.margin) {
        reportFailure("Expected [${range.value} ± ${range.margin}] but got [$actual] (drifted by $difference)")
    } else if (!softAssertMode) {
        println("✅ Test Passed: $actual falls within tolerance")
    }
}
