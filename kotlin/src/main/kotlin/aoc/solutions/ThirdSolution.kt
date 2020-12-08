package aoc.solutions

import aoc.utilities.getResourceAsText

class ThirdSolution(private val data: List<String>) {

    fun findTrees(right: Int, down: Int): Int {
        var trees = 0
        var index = right
        var row = down

        while (row < data.count()) {
            val line = data[row]
            if (line.toCharArray()[index] == '#')
                trees++
            index = (index + right) % 31
            row += down
        }
        return trees
    }

    companion object {
        fun solve() {
            val text = getResourceAsText("/day3.txt").trim()
            val data = text.split("\n")
            val solution = ThirdSolution(data)

            println("On the Third Day")
            println("")
            println("I hit ${solution.findTrees(3,1)} trees.")

            var total = 1L
            val coords = listOf(Pair(1,1), Pair(3,1), Pair(5,1), Pair(7,1), Pair(1,2))
            coords.forEach { total *= solution.findTrees(it.first, it.second) }
            println("Trees multiplied are $total ")

        }
    }
}