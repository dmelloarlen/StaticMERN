const express = require("express")
const app = express();


app.get('/', (req,res)=>{
    res.end('hellllooo')
})

app.listen(8000, () => {
    console.log(`serve running at https://localhost:3000/`);
})
// const math = require('./math.js')

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b
}
console.log(add(10,10))
console.log(sub(10,10))


// module.exports = {
//     add,
//     sub
// }

exports.add = (a,b) => a+b
exports.sub = (a,b) => a-b


