import { add } from "./scripts/add.js"
import { divide } from "./scripts/divide.js"
import { multiply } from "./scripts/multiply.js"
import { subtract } from "./scripts/subtract.js"

const buttonContainer = document.querySelector("#buttons")
const answerContainer = document.querySelector("#answer")

buttonContainer.innerHTML = `
<button id="add">Add</button>
<button id="subtract">Subtract</button>
<button id="multiply">Multiply</button>
<button id="divide">Divide</button>
`
const addButton = document.querySelector("#add")
const subtractButton = document.querySelector("#subtract")
const multiplyButton = document.querySelector("#multiply")
const divideButton = document.querySelector("#divide")

// SHORTHAND
addButton = addEventListener("click", ()=> answerContainer.innerHTML = add(200, 600))


subtractButton.addEventListener ("click", ()=> answerContainer.innerHTML = subtract(450, 233))


multiplyButton.addEventListener ("click", ()=> answerContainer.innerHTML = multiply(2, 4))


divideButton.addEventListener ("click", ()=> answerContainer.innerHTML = divide(60, 2))