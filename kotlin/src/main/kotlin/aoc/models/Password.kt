package aoc.models

class Password(val min: Int, val max: Int, val letter: Char, val sequence: String) {

    companion object {
        fun fromRaw(raw: String): Password {
            val sections = raw.split(" ")
            val options = sections[0].split("-")
            val min = options[0].toInt()
            val max = options[1].toInt()
            val letter = sections[1].toCharArray().first()
            val sequence = sections[2]
            return Password(min, max, letter, sequence)
        }
    }

    fun isInRange(): Boolean {
        val count = this.sequence.split(this.letter).count() - 1
        return count >= this.min && count <= this.max
    }

    fun isAtIndex(): Boolean {
        val first = this.sequence.toCharArray()[this.min -1] == this.letter
        val second = this.sequence.toCharArray()[this.max -1] == this.letter
        return (first && !second) || (second && !first)
    }
}