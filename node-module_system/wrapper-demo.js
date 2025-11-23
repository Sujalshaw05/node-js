//  first wrapper explorer will execute then wrapper demo

const me=require("./wrapper-explorer")

console.log("node module wrappr demo")


console.log("__filename in wrapper demo",__filename)
console.log("__dirname in wrapper demo",__dirname)
me.greet("sujal")