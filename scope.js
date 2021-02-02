let bonus = 20;                         //fun/loop er baire declare korle eta global scope/sob dik teke access kra ja
function sum(first, second){
    let result = first + second + bonus;
    //console.log(bonus);
    //console.log(result);                //function bitor er variable er result func e check kra jabe/mane etar scope fun projonto e
    if(result>9){
        let mood = "happy";
        mood = "fishy";
        mood = "funky";
        mood = "cranky";
        console.log(mood);
    }
    //console.log(mood);            //edik o mood er value pawa jabe na,{} er bitor taka mane block scope
    return result;
}
const output = sum(3,7);
console.log(output);

//wasting scope holo var
// kono kicu value declare korle etar scope(variable) k uporer level a nye jawa k wasting bole..var use use korle wasting hoi 
// mane kono function or loop er vaule upore tene parent a nye ja..and global variable er moto sob dik teke access kra ja,jkhn declare kra 
// value er nich teke console.log kra hoi..other undefined 

// let/const use kre variable declare krle tar upor teke value access krle ..can not access before declare

// scope variable holo let/const