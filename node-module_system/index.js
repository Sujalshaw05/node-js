//  we are importing those functions ans assinging those functions in re later we access those functions 
const re=require("./first-module")

console.log(re.add(3,5))
console.log(re.sub(3,5))
console.log(re.division(3,5))
try {
    // first we are trying to execute the method if get error then it jumps to catch block 
    console.log("trying to execute ")
    let result=re.division(3,0)
} catch (error) {
    console.log("getting the "+error.message);
    
}
