sealed interface StudentBST {
    data object Leaf : StudentBST
    // All left ids are smaller; all right ids are larger.
    data class Entry(val id: Int, val left: StudentBST, val right: StudentBST) : StudentBST
}
