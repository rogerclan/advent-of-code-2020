const fs = require("fs")
const data = fs.readFileSync("./input.txt", "utf-8").split("\n").map(n => parseInt(n))

function byTwo() {
  for (let i = 0; i < data.length - 1; i++) {
    for(ii = i + 1; ii < data.length; ii++) {
      const x = data[i]
      const y = data[ii]
      if (x + y === 2020) {        
        console.log(`${x} x ${y} = ${x*y}`)
        return
      }
    }
  }
}

function byThree() {
  for (let i = 0; i < data.length - 1; i++) {
    for(ii = i + 1; ii < data.length; ii++) {
      for(iii = ii + 1; iii < data.length; iii++) {
        const x = data[i]
        const y = data[ii]
        const z = data[iii]
        if (x + y + z === 2020) {        
          console.log(`${x} x ${y} + ${z} = ${x*y*z}`)
          return
        }
      }
    }
  }
}

byTwo()
byThree()