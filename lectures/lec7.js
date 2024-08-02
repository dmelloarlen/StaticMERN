const os=require("os")
const fs=require("fs")
const { error } = require("console")
const express =require("express")
const app=express()

// console.log(os.cpus.length)


// var arr=['a','b','c','d']

// first way
// for(i=0;i<arr.length;i++){
//     fs.appendFileSync("a.txt",arr[i]+"\n")
// }

// second way
// fs.writeFileSync("a.txt",arr.join('\n'))

var data=fs.readFileSync("a.txt","utf-8")

app.get("/",(req,res)=>{
    res.send(data)
    res.end("Helllo end")
})

app.listen(8000,()=>{
    console.log("listening...........")
})





