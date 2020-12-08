class Password {
    constructor(raw) {
        const sections = raw.split(" ")
        const range = sections[0].split("-")
        this.min = parseInt(range[0])
        this.max = parseInt(range[1])
        this.letter = sections[1].charAt(0)
        this.sequence = sections[2]
    }

    meetsRequirements() {
        const count = this.sequence.split(this.letter).length -1
        return count >= this.min && count <= this.max
    }

    meetsAltRequirements() {
        const first = this.sequence[this.min - 1] === this.letter
        const second = this.sequence[this.max - 1] === this.letter
        return (first && !second) || (!first && second) || false
    }
}

module.exports = Password;