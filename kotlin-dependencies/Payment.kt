sealed interface Payment {
    data class Cash(val dollars: Int) : Payment
    data class Card(val lastFour: String) : Payment
    data class GiftCode(val code: String) : Payment
}
