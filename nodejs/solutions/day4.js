const {getInput} = require("../utility/File")
const data = getInput()
const Passport = require("../models/Passport")

const passports = []
let currentPassport = new Passport()

data.forEach(line => {
    if (line.trim() === "") {
        passports.push(currentPassport)
        currentPassport = new Passport()
    } else {
        line.trim().split(" ").forEach(item => currentPassport.addItem(item))
    }
})

const validPassports = passports.filter(passport => passport.isValid())

console.log(`There are ${validPassports.length} valid passports.`)

console.log(`There are ${validPassports.filter(passport => passport.extendedValidation()).length} valid passports with the required fields.`)