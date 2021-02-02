function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1);            //stopWatch function just r o ekta function cl krtece
console.log(clock1());          //2 bar cl krle fun er vitor er fun a access kra jabe
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1());

// kono ekta function er bitor teke r ekta function k cl/return krle ta ekta 
// closure enviroment create kre

// beiyer pgrm a waiter plate kre roast nye ashlo dite taklo..(const clock1 = stopWatch();
// console.log(clock1());)   abr waiter onno dik gele or ses hye gele onno waiter roast dibe
// (const clock2 = stopWatch();
// console.log(clock2());)
//closure cl krle nije ekta close enviroment create kre