sealed interface StringList {
    data object Empty : StringList
    data class Node(val first: String, val rest: StringList) : StringList
}
typealias SLEmpty = StringList.Empty
typealias SLNode = StringList.Node
