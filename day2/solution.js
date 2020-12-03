const fs = require("fs")
const Password = require("./Password");
const data = fs.readFileSync("./input.txt", "utf-8").split("\n").map(section => new Password(section))

console.log(data.filter(p => p.meetsRequirements()).length)
console.log(data.filter(p => p.meetsAltRequirements()).length)
