const fs = require("fs");
const data = fs.readFileSync("./input.txt", "utf-8").split("\n")
const Passport = require("./Passport")

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

console.log(validPassports.length)

console.log(validPassports.filter(passport => passport.extendedValidation()).length)