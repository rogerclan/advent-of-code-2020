const {getInput} = require("../utility/File")
const data = getInput(true).map(n => parseInt(n))

function byTwo() {
  for (let i = 0; i < data.length - 1; i++) {
    for(ii = i + 1; ii < data.length; ii++) {
      const x = data[i]
      const y = data[ii]
      if (x + y === 2020) {        
        console.log(`${x} and ${y} added are ${x+y}`)
        console.log(`and multiplied are ${x*y}`)
        return
      }
    }
  }
}

function byThree() {
  for (let i = 0; i < data.length - 2; i++) {
    for(ii = i + 1; ii < data.length - 1; ii++) {
      for(iii = ii + 1; iii < data.length; iii++) {
        const x = data[i]
        const y = data[ii]
        const z = data[iii]
        if (x + y + z === 2020) {        
          console.log(`${x}, ${y} and ${z} added are ${x+y+z}`)
          console.log(`and multiplied are ${x*y*z}`)
          return
        }
      }
    }
  }
}

byTwo()
byThree()