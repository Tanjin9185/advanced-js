const numbers = [3,2,4,2,4,2,4,6,8];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// console.log(output);

// function square(element){
//     return element*element;
// }
// numbers.map(square());

// const result = numbers.map(function(element, index, array){
//     // console.log(element, index, array);     //map er bitor function korle 3 ta parameter check kra ja
//     return element*element;
// })
// console.log(result);

// const square = element => element*element;
// const square = x => x*x;

const result = numbers.map(x => x*x);
console.log(result);

const bigger = numbers.filter(x => x>5);
const bigger1 = numbers.find(x => x>5);     //i1st er 1ta vaule dibe
console.log(bigger1);

//map holo kono ekta array er modhye looping kre,se element gula nye kicu kre output r o ekta array dibe and fillter array return kre
