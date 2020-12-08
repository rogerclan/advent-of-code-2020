const {getInput} = require("../utility/File")
const data = getInput()

let uniqueTotal = 0
let groupVotes = ""

function dedup(value, index, self) {
    return self.indexOf(value) === index;
}

data.forEach(person => {
    if (person === "") {
        uniqueTotal += groupVotes.split("").filter(dedup).length
        groupVotes = ""
    } else {
        groupVotes += person
    }
})

console.log(`Total unique group votes sum was ${uniqueTotal}`)

function findMatches(first, second) {
    return first.filter(value => second.includes(value))
}

function getSumOfAgreedVotes(votes) {
    if (votes.length === 1) {
        // lucky you they all count
        return votes[0].length
    } else {
        // lets see where we all agreed
        let vote = votes[0].split("")
        for (let i = 1; i < votes.length; i++) {
            vote = findMatches(vote, votes[i])
        }
    return vote.length
    }
}

let agreedTotal = 0
let voteTracker = []
data.forEach(person => {
    if (person === "") {
        agreedTotal += getSumOfAgreedVotes(voteTracker)
        voteTracker = []
    } else {
        voteTracker.push(person)
    }
})

console.log(`Total agreed group votes summed was ${agreedTotal}`)