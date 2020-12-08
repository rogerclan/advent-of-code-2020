package aoc.solutions

import aoc.utilities.getResourceAsText

class FirstSolution(val data: List<Int>) {
    fun byTwo() {
        for ((index, first) in data.withIndex()) {
            val sub = data.subList(index + 1, data.count())
            for (second in sub) {
                if(first + second == 2020) {
                    println("$first x $second = ${first * second}")
                    return
                }
            }
        }
    }

    fun byThree() {
        for ((index, first) in data.withIndex()) {
            val middle = data.subList(index + 1, data.count())
            for ((innerIndex, second) in middle.withIndex()) {
                val inner = data.subList(innerIndex + 1, data.count())
                for(third in inner) {
                    if (first + second + third == 2020) {
                        println("$first x $second x $third = ${first * second * third}")
                        return
                    }
                }
            }
        }
    }

    companion object {

        fun solve() {
            val text = getResourceAsText("/day1.txt")
            val data = text.split("\n").map { it.toInt() }
            val solution = FirstSolution(data)

            println("On the First Day")
            println("")
            solution.byTwo()
            solution.byThree()
        }
    }
}

