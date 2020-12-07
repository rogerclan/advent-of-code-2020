class Passport {
    constructor() {
        this.byr = null
        this.iyr = null
        this.eyr = null
        this.hgt = null
        this.hcl = null
        this.ecl = null
        this.pid = null
    }

    addItem(item) {
        const [key, value] = item.split(":")
        this[key] = value
    }

    isValid() {
        const keys = Object.keys(this)
        return keys.every(key => this[key] !== null)
    }

    validByr() {
        return this.byr >= 1920 && this.byr <= 2002
    }

    validIyr() {
        return this.iyr >= 2010 && this.iyr <= 2020
    }

    validEyr() {
        return this.eyr >= 2020 && this.eyr <= 2030
    }

    validHgt() {
        if(/in$/.test(this.hgt)) {
            let inches = parseInt(this.hgt.substr(0, this.hgt.length -2))
            return inches >=59 && inches <= 76
        } else if (/cm$/.test(this.hgt)) {
            let cm = parseInt(this.hgt.substr(0, this.hgt.length -2))
            return cm >=150 && cm <= 193
        }else return false
    }

    validHcl() {
        return /^#[0-9a-z]{6}$/.test(this.hcl)
    }

    validEcl() {
        return ["amb","blu","brn","gry","grn","hzl","oth"].includes(this.ecl)
    }

    validPid() {
        return /^[0-9]{9}$/.test(this.pid)
    }

    extendedValidation() {
        return this.validByr() && this.validIyr() && this.validEcl() && this.validEyr() && this.validHcl() && this.validHgt() && this.validPid()
    }
}

module.exports = Passport