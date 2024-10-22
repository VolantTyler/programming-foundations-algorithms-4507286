let gcd = function(a,b) {
  while(b != 0) {
    let t = a
    a = b
    b = t % b
  }
  return a
}

console.log(gcd(60,96)) //12
console.log(gcd(20,8)) //4