const {getInput} = require("../utility/File")
const {sortASC} = require("../utility/Array")
const data = getInput(true).map(v => parseInt(v))
data.push(0)
const sorted = sortASC(data)
sorted.push(sorted[sorted.length - 1] + 3)

const qty = {
    one:  0,
    two: 0,
    three: 0
}
for(let i = 0; i < sorted.length; i++) {
    const diff = sorted[i + 1] - sorted[i]
    if(diff === 1) qty.one++
    else if(diff === 2) qty.two++
    else qty.three++
}

console.log(qty.one * qty.three)

const PATHS = {}

function findPaths(start) {
    if (start === sorted.length -1)
        return 1
    if (PATHS[start] !== undefined)
        return PATHS[start]

    let total = 0
    for(let i = start + 1; i <= start + 3 && i < sorted.length; i++) {
        if(sorted[i] - sorted[start] <= 3) {
            total += findPaths(i)
        }
    }
    PATHS[start] = total
    return total
}

console.log(findPaths(0))