const fs = require("fs");
const data = fs.readFileSync("./input.txt", "utf-8").trim().split("\n")

let seats = []

function getRow(seq) {
    let row = seq.map(l => l === "B" ? "1" : "0").join("")
    return parseInt(row, 2)
}

function getSeat(seq) {
    let seat = seq.map(l => l === "R" ? "1" : "0").join("")
    return parseInt(seat, 2)
}

data.forEach(item => {
    const row = getRow(item.substr(0, 7).split(""))
    const seat = getSeat(item.substr(7, 3).split(""))
    seats.push(row * 8 + seat)
})
seats = seats.sort((a,b) => {
    if(a>b) return 1
    if(a<b) return -1
    else return 0
})
console.log("Last seat is " + seats[seats.length -1])
// Can't be first (0) or last seat (seats.length -1)
for(let i = 1; i < seats.length - 1; i++) {
    if(seats[i] !== seats[i + 1] - 1 ) {
        console.log("Your seat is " + (seats[i] + 1))
    }
}