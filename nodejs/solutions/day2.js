const Password = require("../models/Password");
const {getInput} = require("../utility/File")
const data = getInput(true).map(section => new Password(section))

console.log(`There are ${data.filter(p => p.meetsRequirements()).length} valid passwords.`)
console.log(`With the new interpretation there are ${data.filter(p => p.meetsAltRequirements()).length} valid passwords.`)
