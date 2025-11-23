function add(a,b) {
    return a+b
};
function sub(a,b) {
    return a-b
};

function division(a,b) {
    if(b==0){
        throw new Error("can't devide");
        
    }
    return a/b
}
//  so here we are declering just 3 functions & with the help of module.exports we are exporting those functions which we can use in other files
module.exports={
    add,sub,division
};