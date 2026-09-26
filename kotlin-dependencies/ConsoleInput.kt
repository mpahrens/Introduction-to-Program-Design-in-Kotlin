// Supply repeatable input to readln() without an interactive terminal.
fun provideInput(text: String) {
    System.setIn(java.io.ByteArrayInputStream(text.toByteArray(Charsets.UTF_8)))
}
