
function power(num, pwr) {
  if (pwr == 0) return 1

  return num * power(num, pwr - 1)
}

function factorial(num) {
  if (num == 0) {
    return 1
  }

  return num * factorial(num-1)
}

console.log(`5 to the power of 3 is ${power(5, 3)}`)
console.log(`2 to the power of 4 is ${power(2, 4)}`)
console.log(`4! is ${factorial(4)}`)
console.log(`0! is ${factorial(0)}`)