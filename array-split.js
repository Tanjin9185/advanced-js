const nums = [1,2,3,4,5,6,7,8,9];
//const part = nums.slice(2,5);       //index 2 teke index 5 er aug projonto value dibe..bt main array eke takbe

const removed = nums.splice(2,3,9185,90);  //index 2 teke total 3 value remove krbe(ta removed a dekabe),main array teke sore jabe and removed place new digit gulo add kre nibe

//console.log(part);
console.log(removed);
//console.log(nums);

const together = nums.join(",");        //() er vitore ja dibe ta dye dye join krbe
console.log(together);