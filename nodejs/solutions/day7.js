const {getInput} = require("../utility/File")
const data = getInput(true)

let bags = []

function dedup(value, index, self) {
    return self.indexOf(value) === index;
}

function canHave(bag, rule) {
    const index = rule.indexOf("contain") + 8
    const parent  = rule.substr(0, index).split(" ").slice(0,2).join(" ")
    const inside = rule.substr(index, rule.length)
    const regex = new RegExp("[0-9] " + bag)
    if(regex.test(inside)) {
        bags.push(parent)
        data.forEach(row => canHave(parent, row))
    }
}

data.forEach(row => canHave("shiny gold", row))

bags = bags.filter(dedup)
console.log(`${bags.length} colors can have a shiny gold bag.`)

function getChildren(parent) {
    let total = 0
    const bag = data.find(t => {
        const regex = new RegExp("^" + parent)
        return regex.test(t)
    })
    if(bag) {
        const internalBags = bag.substr(bag.indexOf("contain") + 8, bag.length).split(",")
        internalBags.forEach(c => {
            const parts = c.trim().split(" ")
            let qty = parts[0]
            if(qty !== "no") {
                qty = parseInt(qty)
                total += qty
                const value = getChildren(parts.slice(1,3).join(" "))
                if(value !== 0) total += qty * value
            }
        })

    }
    return total

}

console.log(`The total bags the gold shiny bag holds is ${getChildren("shiny gold")}`)