let arr=[]

for (let i = 1; i <=20; i++) {
    arr[i-1]=i  
}

console.log(arr)

let arr1=arr.map((value)=>value*2)
console.log(arr1)