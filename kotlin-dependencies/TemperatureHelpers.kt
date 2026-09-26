fun temperatureTotal(readings: TempList): Int = when (readings) {
    TempEmpty -> 0
    is TempNode -> readings.first + temperatureTotal(readings.rest)
}

fun temperatureCount(readings: TempList): Int = when (readings) {
    TempEmpty -> 0
    is TempNode -> 1 + temperatureCount(readings.rest)
}

fun totalAtLeast(readings: TempList, minimum: Int): Int = when (readings) {
    TempEmpty -> 0
    is TempNode -> (if (readings.first >= minimum) readings.first else 0) +
        totalAtLeast(readings.rest, minimum)
}

fun countAtLeast(readings: TempList, minimum: Int): Int = when (readings) {
    TempEmpty -> 0
    is TempNode -> (if (readings.first >= minimum) 1 else 0) +
        countAtLeast(readings.rest, minimum)
}
