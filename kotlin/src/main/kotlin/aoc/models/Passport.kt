package aoc.models

class Passport {
    var byr: Int? = null
    var iyr: Int? = null
    var eyr: Int? = null
    var hgt: String? = null
    var hcl: String? = null
    var ecl: String? = null
    var pid: String? = null

    fun addItem(item: String) {
        val parts = item.split(":")
        if (listOf("byr", "ivr", "evr").contains(parts.first())) {

        }

    }

    fun isvalid(): Boolean {
        return byr != null &&  iyr != null &&  eyr != null && hgt != null && hcl != null && ecl != null && pid != null
    }
}