package aoc.utilities

fun getResourceAsText(path: String): String {
    return object {}.javaClass.getResource(path).readText()
}