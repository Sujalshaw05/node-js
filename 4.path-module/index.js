//  path module provides utilities for working with file and directories 
const path= require("path")

// directory name
console.log("current  diectory name",path.dirname(__filename))
// current filename
console.log("current  file name",path.basename(__filename))
// file extention
console.log("current file extention",path.extname(__filename))

// creating or joining paths
const joinpath=path.join("/user","projects","new project")
console.log(joinpath)   
// resolving a path
const npath=path.resolve("/user","projects","new project")
console.log(npath)                                                                                               

//  normalizing or simplyfing path
const nor=path.normalize("/user/.documents/../projects/new project")
console.log(nor)