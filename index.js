var a, b, n
    number = 5
    
function add(a, b) {
  return a + b
}

function subtract(a, b)
 {
  return a - b
}

function multiply(a, b)
 {
  return a * b
}
function divide(a, b)
 {
  return a / b
}
function inc(n) {
  return n + 1
}
function dec(n) {
  return n - 1
}
function makeInt(n) {
  return parseInt(n,10)
}
function PreserveDecimal(n) {
  return parseFloat(n)
}
add(number, 3)
console.log(add(number, 3))

subtract(number, 3)
console.log(number)

console.log(makeInt('3'))
console.log(PreserveDecimal('2.34'))
