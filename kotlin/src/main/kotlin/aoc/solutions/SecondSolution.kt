package aoc.solutions

import aoc.models.Password
import aoc.utilities.getResourceAsText

class SecondSolution(val data: List<Password>) {
    fun byRange(): Int {
        return data.filter { it.isInRange() }.count()
    }

    fun byIndex(): Int {
        return data.filter { it.isAtIndex() }.count()
    }

    companion object {
        fun solve() {
            val data = getResourceAsText("/day2.txt")
            val solution = SecondSolution(data.split("\n").map { Password.fromRaw(it) })

            println("On the Second Day")
            println("")
            // First Problem
            println("The passwords that met range requirements: ${solution.byRange()}")
            // Second Problem
            println("The passwords that met index requirements: ${solution.byIndex()}")
        }
    }
}