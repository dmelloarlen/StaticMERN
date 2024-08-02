
// const fs = require("fs")

// blocking operations
// console.log(1);
// fs.writeFileSync("./aarya.txt","sagar123456789")
// console.log(2);


// non blocking

// console.log(1);
// fs.writeFile("./aarya.txt","aarya me",(err)=>{
//     console.log(err);
// })
// console.log(2);

// const arr = ["aarya","me"]

// arr.forEach((val)=>{
//     fs.appendFileSync("./aarya.txt", val + "\n")
// })

// let result  = fs.readFileSync("./aarya.txt","utf-8")
// console.log(result);


// fs.readFile("./aarya.txt","utf-8",(err,result)=>{
//     console.log(result)
//     console.log(err);
// })


// let a = fs.readFileSync("./read.txt","utf-8")
// fs.writeFileSync("./aarya.txt",a)

// fs.readFileSync("./read.txt","utf-8")

// const express = require("express")
// const app = express();


// app.get('/', (req,res)=>{
//     res.end(fs.readFileSync("./read.txt","utf-8"))
// })

// app.listen(8000, () => {
//     console.log(`serve running at http://localhost:8000/`);
// })

// fs.mkdirSync("./docs/a/b/c/d",{recursive : true
// })

