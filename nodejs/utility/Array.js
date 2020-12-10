function sortASC(arr) {
    return arr.sort((a,b) => {
        return a > b ? 1 : a < b ? -1 : 0
    })
}

module.exports = {
    sortASC
}