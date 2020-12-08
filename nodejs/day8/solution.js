const fs = require("fs");
const data = fs.readFileSync("./input.txt", "utf-8").trim().split("\n")

function getInstruction(line) {
    const instruction = line.split(" ")
    return {
        cmd: instruction[0],
        value: parseInt(instruction[1])
    }
}

function toggle(value) {
    return (/^nop/.test(value)) ? value.replace("nop", "jmp") : value.replace("jmp", "nop");
}

function processInstructions(instructions) {
    let accumulator = 0;
    let instructionsProcessed = []
    let currentIndex = 0
    while(!instructionsProcessed.includes(currentIndex) && currentIndex < instructions.length) {
        instructionsProcessed.push(currentIndex)
        const {cmd, value} = getInstruction(instructions[currentIndex])
        if (cmd === "nop") {
            currentIndex++
        } else if(cmd === "acc") {
            accumulator += value
            currentIndex++
        } else {
            currentIndex += value
        }
    }
    return {accumulator, lastIndex: currentIndex}
}

console.log("The value of the accumulator is " + processInstructions(data).accumulator)

let changedIndex = 0
let lastIndex = 0
let accumulator = 0

while(lastIndex < data.length) {
    do {changedIndex++} while (!["jmp", 'nop'].includes(data[changedIndex].split(" ")[0]))
    ({accumulator, lastIndex} = processInstructions(data.map((v,i) => i !== changedIndex ? v : toggle(v))))
}

console.log(`After toggling the command on index ${changedIndex} `)
console.log(`from ${data[changedIndex].split(" ")[0]} to ${toggle(data[changedIndex]).split(" ")[0]} the final accumulator was ${accumulator}`)