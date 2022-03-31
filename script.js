const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) =>{
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

// numbers.forEach((number)=>{
//     number.addEventListener("click",(event) =>{
//         updateScreen(event.target.value)
//     })
// })

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number)=>{
    if (currentNumber === '0'){
        currentNumber = number
    }else {
        currentNumber += number
    } 
}

//menambah click event ke operator tombol-tombol
const operators = document.querySelectorAll(".operator")

operators.forEach((operator)=>{
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

//definisikan function inputOperator
const inputOperator = (operator) => {
    // if(calculationOperator === ''){
    //     prevNumber = currentNumber
    // }
    // calculationOperator = operator
    // currentNumber = '0'
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ''
}

//tambahkan click event ke tombol samadengan (=)
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () =>{
    calculate()
    updateScreen(currentNumber)
})

//definisikan function calculation
const calculate = ()=> {
    let result = ''
    switch(calculationOperator){
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}

//definisikan function clear all
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

//ambil element button dan tambahkan click event
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () =>{
    clearAll()
    updateScreen(currentNumber)
})

//decimal
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) =>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

//function inputDecimal
inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}



