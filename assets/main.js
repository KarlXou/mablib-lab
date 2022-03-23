// 1. Use the id-selector to get your inputs' and the output element from the DOM
// for each input, I'll need to repeat the following
const inputOne = document.querySelector(`#one`); //this creates a var of the element
const inputTwo = document.querySelector(`#two`);
const inputThree = document.querySelector(`#three`);
const inputFour = document.querySelector(`#four`);
const inputFive = document.querySelector(`#five`);
const inputSix = document.querySelector(`#six`);
const inputSeven = document.querySelector(`#seven`);
const inputEight = document.querySelector(`#eight`);
const inputNine = document.querySelector(`#nine`);
const inputTen = document.querySelector(`#ten`);
const inputEleven = document.querySelector(`#eleven`);
const inputTwelve = document.querySelector(`#twelve`);

const output = document.querySelector(`.output`); //this is the div to the output
// 2. For each of the inputs, get the value (word) from them


// 3. Generate your template using the values from above and set the output element's value equal to it!
//HINT: You'll need a ton of code before doing anything in this function that's called in your index.html 😜
function generateTemplate() {
  console.log(inputOne.value);
  console.log(inputTwo.value);
  console.log(inputThree.value);
  console.log(inputFour.value);
  console.log(inputFivr.value);
  console.log(inputSix.value);
  console.log(inputSeven.value);
  console.log(inputEight.value);
  console.log(inputNine.value);
  console.log(inputTen.value);
  console.log(inputEleven.value);
  console.log(inputTwelve.value);
  let madlib = `${inputTwelve.value} ${inputOne.vlaue} is the main character of this story. ${inputOne.value} is ${inputTwo.value} and ${inputThree}. `
  console.log(madlib); // instead of logging, we need to add HTML to the output object
}
