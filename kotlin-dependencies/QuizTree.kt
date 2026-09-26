sealed interface QuizTree
data object End : QuizTree
data class Question(val prompt: String, val yes: QuizTree, val no: QuizTree) : QuizTree
