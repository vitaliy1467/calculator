const number1 = document.getElementById('input1')
const number2 = document.getElementById('input2')
const resultBtn = document.getElementById('submit')
const resultElements = document.getElementById('result')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')
const degreeBtn = document.getElementById('degree')
let action = '+'

plusBtn.onclick = function () {
  action = '+'
}
minusBtn.onclick = function () {
  action = '-'
}
multiplyBtn.onclick = function () {
  action = '*'
}
divideBtn.onclick = function () {
  action = '/'
}
degreeBtn.onclick = function () {
  action = '**'
}

function printResult(result) {
  if (result < 0) {
    resultElements.style.color = 'red'
  } else if (result > 0) {
    resultElements.style.color = 'green'
  } else {
    resultElements.style.color = 'black'
  }
  resultElements.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value)
  const num2 = Number(inp2.value)
  if (actionSymbol == '+') {
    return num1 + num2
  } else if (actionSymbol == '-') {
    return num1 - num2
  } else if (actionSymbol == '*') {
    return num1 * num2
  } else if (actionSymbol == '/') {
    return num1 / num2
  } else {
    return num1 ** num2
  }
}

resultBtn.onclick = function () {
  const result = computeNumbersWithAction(number1, number2, action)
  printResult(result)
}
