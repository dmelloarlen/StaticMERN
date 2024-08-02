let arr=[1,2,3,4,5]
arr.forEach((val,index)=>{
    console.log(val+" is at index "+index)
})

arr.forEach((val)=>{
    console.log(val*2)
})

let newArr=arr.map((val,index)=>val**2)
console.log(newArr)

let newArr1=arr.filter((val)=>val>4) 
console.log(newArr1)

let arr1=[1,[2,3,[4,5]]]
let newArr2=arr.reduce()
console.log(newArr2)

// let arr = [1,5,6,2,8,6,1]
function abc(a,b){
    if(a>b){
        return 1
    }
    else if(a<b){
        return -1
    }
    else {
        return 0
    }
}
arr.sort(abc)
console.log(arr);


// let num = [1,2,3,4,5]
let sum =num.reduce((sum,val)=>sum *= val)

console.log(sum);

// let num = [1,2,3,4]
num.push(5)
num.unshift(23)

console.log(num);

let remove = num.pop()
// let remove = num.shift()

console.log(remove);
console.log(num);


let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [-1,-2,-3]

let final = a1.concat(a2.concat(a3))
console.log(final);

let num = [1,2,3,4,56,78,9]
console.log(num.slice(2,7));

let items = ['apple','banana','cherry','mango','banana']
console.log(items.lastIndexOf('banana'));

let result =items.filter((val)=>val=='banana')
console.log(result);

let abc = [
    { name : 'aarya', age : 17},
    { name : 'jash' , age : 3000}
]
// console.log(abc[0].name);

abc.forEach((val)=>{
    console.log(val.name);
    console.log(val.age);
} )

let scores = [85,95,75,4]
console.log(scores.every((scores)=>scores>=75));
console.log(scores.some((scores)=>scores>=75));

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(matrix[1][1]);

matrix.forEach((vla,i)=>{
    vla.forEach((v)=>{
        console.log(v)
    })
})