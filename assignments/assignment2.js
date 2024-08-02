// Q1.
for (let i = 1; i<=10; i++) {        //outer for loop (will run 10 times eg.1-10)
    for (let j = 1; j <=10; j++) {   //inner for loop (will run 10 times eg.1-10)
        console.log(i+" * "+j+" = "+i*j) //output with format to diaplay the multiplication table on console
    }   
    console.log()    //adds a line for better understanding of output
}

// Q2.
let arr=[1,2,3,4,5]  //array decleration and initialization
let sum=0            //decleration and initialization of veriable "sum"
for(i in arr){       //for in loop to add elements in an array one-by-one and store its sum in veriable "sum"
    sum+=arr[i]
}
console.log(sum)     //printing the sum on console

// Q3.
const palendrom=(str)=>{         //function decleration    
    var newStr='';               //decleration of newStr
    for (let i = str.length-1; i >= 0; i--){     //for loop to concat characters in reverse from a string
        newStr+=str[i]   
    }   
    if (newStr==str) {       //if loop to check if the string is palendrom or not
        return true          
    }else{
        return false
    }
}
const a=palendrom("LEVL")    //function calling
console.log(a);

// Q4.
const fabonacci=(n)=>{
    let a=0;    //decleraing and initializing 'a' with 0
    let b=1;    //decleraing and initializing 'b' with 0
    let c;      //decleraing'c'
    let arr=[0,1];  //decleraing and initializing 'arr' array with [0,1]
    if (n==0) {         //if statement to check if n=0
        arr.pop()       
    }
    for (let i=2;i<=n;i++) {
        c=a+b       //assigning 'c' with the sum between 'a' and 'b'
        a=b         //assigning 'a' with the value of 'b'
        b=c         //assigning 'b' with the value of 'c'
        arr.push(b) //adding 'b' to the array "arr"
    }
    console.log(arr)    //printing array "arr" to the console
}
fabonacci(9)        //calling function fabonacchi()

// Q5.
if(true){
    var bs1=10  //var globaly acessible
    let bs2=20  //let only acessible inside the block
    const bs3=30    //const only acessible inside the block

    console.log(bs1)    //  o/p=10
    console.log(bs2)    // o/p=20
    console.log(bs3)    // o/p=30
}
console.log(bs1)    //  o/p=10
console.log(bs2)    // error=bs2 not defined
console.log(bs3)    // error=bs3 not defined