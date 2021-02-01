let pakhi;

function add(num1, num2){
    console.log(num1 + num2);       //function return na kre baire teke cl krle undefined
    return;                        //ki return krbe na ta a bolle o undefined
}
const result = add(5,6);           //kono ekta parameter pass na korle o undefined


const student = {name:"Tanjin", id:909, phone:7980};
console.log(student.gender);        //object a key nai emn property er vaule chaile o undefined

const ages = [2,5];
console.log(ages[5]);               //value na emn tomo array value chaile

let fun = undefined;                //undefined nije reserve undefined keyword
console.log(fun)

//NaN hoce khali/kicu nai..not existence ..agye kono vaule cilo ekhn soraye nya hoice