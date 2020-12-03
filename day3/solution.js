const fs = require("fs");
const data = fs.readFileSync("./input.txt", "utf-8").split("\n")

function findTrees(right, down) {
    let trees = 0
    let index = right
    let row = down

    for(row; row < data.length; row += down) {
        const line = data[row]
        if (line.charAt(index) === "#") trees++
        index = (index + right) % line.length
    }
    return trees
}

// Question 1
console.log(findTrees(3,1))

// Question 2
const coords = [
    {right: 1, down: 1},
    {right: 3, down: 1},
    {right: 5, down: 1},
    {right: 7, down: 1},
    {right: 1, down: 2}
]
let total = 1
coords.forEach(coord => {
    const trees = findTrees(coord.right, coord.down)
    total *= trees
})
console.log(total)