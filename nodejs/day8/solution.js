const fs = require("fs");
const data = fs.readFileSync("./input.txt", "utf-8").trim().split("\n")

function toggle(value) {
    return (/^nop/.test(value)) ? value.replace("nop", "jmp") : value.replace("jmp", "nop");
}

function processInstructions(instructions) {
    let accumulator = 0;
    let instructionsProcessed = []
    let currentIndex = 0
    while(!instructionsProcessed.includes(currentIndex) && currentIndex < instructions.length) {
        let instruction = instructions[currentIndex].split(" ")
        instructionsProcessed.push(currentIndex)
        const cmd = instruction[0]
        const value = parseInt(instruction[1])
        if (cmd === "nop") {
            currentIndex++
        } else if(cmd === "acc") {
            accumulator += value
            currentIndex++
        } else {
            currentIndex += value
        }
    }
    return [accumulator, currentIndex]
}

console.log("The value of the accumulator is " + processInstructions(data)[0])

let changedIndex = 0
let finalIndex = 0
let finalAccumulator = 0

while(finalIndex < data.length) {
    do {changedIndex++} while (!["jmp", 'nop'].includes(data[changedIndex].split(" ")[0]))
    const updated = data.map((v,i) => i !== changedIndex ? v : toggle(v))
    let [accumulator, index] = processInstructions(updated)
    finalIndex = index
    finalAccumulator = accumulator
}

console.log(`After toggling the command on index ${changedIndex} `)
console.log(`from ${data[changedIndex].split(" ")[0]} to ${toggle(data[changedIndex]).split(" ")[0]} the final accumulator was ${finalAccumulator}`)