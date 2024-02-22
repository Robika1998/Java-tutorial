// let num =  42; //number
// let firstName = 'Robi'; //string
// const isProgrammer = true; //boolean

firstName = 'Begi';
// isProgrammer = false; //const ar sheicvleba, radgan mxolod ertxel eniweba

/*
let $ ='test'
let $num = 42
let num$ = 42
let _ = 49
let _num = 12
let num_ = 12
let first_name = 'Elena' //bad
let myNum = 34   //good
let num42 = 10
*/

// alert(firstName) amit gamoaqvs Begi

// console.log('Test',num, isProgrammer)

// console.log(num + 10)
// console.log(num - 10)  amis meshveobit nums umatebs danarchens
// console.log(num * 10)
// console.log(num / 10)
// console.log(num)

// let num2 = num + 10      
// console.log(num, num2)    //amis meshveonit num ar sheicvala magram num2 gaxda 52 / 42 da 52
// num = num2 - num
// num2 = num2 + 1
// console.log(num, num2)

// let num3 = (num + 10 * 2) / (5 - 1)
// console.log(num3) 

// const fullName = firstName + ' Minin'
// const fullName = firstName + ' ' + 'Minin'  //gamoaqvs saxeli da gvari

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'


// console.log(resultElement.textContent)
// resultElement.textContent = (42 - 2) / num

// const sum = Number(input1.value) + Number(input2.value)
// resultElement.textContent = sum                             //amis meshveobit gamovikvanet resultati
// console.log(typeof sum)

plusBtn.onclick = function() {
    action = '+'
}

minusBtn.onclick = function() {
    action = '-'
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'       //amis meshveobit shevqmenit funqcia romelic gadascems subminBtn
    } else {
        resultElement.style.color = 'green'
    }  
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value)
  const num2 = Number(inp2.value)
//   if ( actionSymbol  == '+') {
//     return num1 + num2             //amis damatebis shemdeg shegvidzlia shevcvalot submitBtn da shevamcirot codi
//   }
//    else if (actionSymbol == '-') {
//    return num1 - num2
//   }
  return actionSymbol == '+' ? num1 + num2 : num1 - num2 // amis meshveobit shevamciret zeda codi
}

submitBtn.onclick = function () {

    const result = computeNumbersWithAction(input1, input2, action)   //qveda kodi shevamciret
    printResult(result)

    // if(action == '+') {
    //     const sum = Number(input1.value) + Number(input2.value)    //amis meshveobit gamovikvanet resultati 
    //     printResult(sum)  //sheqmnili funqcia , romelmac sheamcira kodi
    // } else if(action == '-') {
    //     const sum = Number(input1.value) - Number(input2.value)
    //     printResult(sum)
    // }

}

// const sum = Number(input1.value) + Number(input2.value)    //amis meshveobit gamovikvanet resultati ghilakze
//      resultElement.textContent = sum