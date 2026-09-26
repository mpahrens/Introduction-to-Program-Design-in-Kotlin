sealed interface TempList
data object TempEmpty : TempList
data class TempNode(val first: Int, val rest: TempList) : TempList
