const {getInput} = require("../utility/File")
const data = getInput(true).map(v => parseInt(v))

function checkIndex(index, options, preamble) {
    const value = options[index]
    for(let i = index - preamble; i < options.length - 1; i++) {
        for(let ii = i + 1; ii < options.length; ii++) {
            if(options[i] + options[ii] === value) return true
        }
    }
    return false
}

function getInvalid(options, preamble) {
    let index = preamble
    while (index < options.length) {
        if(!checkIndex(index, options, preamble)) return options[index]
        index++
    }
    console.log("No invalid number found.")
    process.exit(2)
}

function getRange(start, end, options) {
    const range = []
    for(let i = start; i < end; i++) {
        range.push(options[i])
    }
    return range
}

function checkRange(start, value, options) {
    let end = start + 1
    do {
        const range = getRange(start, end++, options)
        const sum = range.reduce((x,y) => x + y)
        if(sum === value) return range
        if(sum > value) return null
    } while (end < options.length)
    return null
}

function getContiguous(value, options) {
    let start = 0
    do {
        let found = checkRange(start++, value, options)
        if (found) {
            let sort = found.sort((a,b) => {
                if(a > b) return 1
                if(a < b) return -1
                return 0
            })
            return sort[0] + sort[sort.length -1]
        }
    } while (start < options.length - 1)

}

const invalid = getInvalid(data, 25)
console.log(`First invalid number is ${invalid}`)
console.log(`The sum of the contiguous set of numbers is ${getContiguous(invalid, data)}`)