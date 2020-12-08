const fs = require("fs");
const path = require("path")

function throwError(script) {
    console.log()
    console.log("Invalid call")
    console.log(`Example#node ${script} {path/to/input}`)
    console.log()
    process.exit(1)
}

function getText(input, trim = false) {
    let data = fs.readFileSync(input, "utf-8")
    if (trim) data = data.trim()
    return  data.split("\n")
}

function getInput(trim = false) {
    const input = process.argv[2]
    const parts = process.argv[1].split(path.sep)
    const script = parts[parts.length -1]
    if(!path) {
        throwError(script)
    }
    try {
        return getText(input, trim)
    } catch (e) {
        throwError(script)
    }
}

module.exports = {
    getText,
    getInput
}