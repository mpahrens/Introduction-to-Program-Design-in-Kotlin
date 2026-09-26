// A station has its own identity. Connections may change or form cycles.
// Ordinary classes keep set membership independent of mutable connections.
class Station(val name: String, val next: MutableList<Station>)
typealias TransitGraph = MutableSet<Station>
