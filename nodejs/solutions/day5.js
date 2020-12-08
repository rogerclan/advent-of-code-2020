const {getInput} = require("../utility/File")
const data = getInput(true)

let seats = []

function convertToBinary(ticket) {
    ticket = ticket.split("").map(l => l === "R" || l === "B" ? "1" : "0").join("")
    return [ticket.substr(0, 7), ticket.substr(7, 3)]
}

function binaryToInt(value) {
    return  parseInt(value, 2)
}

function ascending(a,b) {
    if(a>b) return 1
    if(a<b) return -1
    else return 0
}

data.forEach(ticket => {
    const [row, seat] = convertToBinary(ticket)
    seats.push(binaryToInt(row) * 8 + binaryToInt(seat))
})

seats.sort(ascending)

console.log("Last seat is " + seats[seats.length -1])
// Can't be first (0) or last seat (seats.length -1)
for(let i = 1; i < seats.length - 1; i++) {
    if(seats[i] !== seats[i + 1] - 1 ) {
        console.log("Your seat is " + (seats[i] + 1))
    }
}