// Q1.
let str="Hello" //decleration and initilization of an string 
let num=4       //decleration and initilization of an number
let bol=true    //decleration and initilization of an boolean
let obj={       //decleration and initilization of an object
    1:"One",
    2:"Two",
    3:"Three"
}
let arr=[1,2,3,"Hello"] //decleration and initilization of an array

// printing the values and its datatype on concole
console.log(str+" is of type "+typeof(str)) 
console.log(num+" is of type "+typeof(num))
console.log(bol+" is of type "+typeof(bol))
for(let i in obj){
    console.log(obj[i]+" is of type "+typeof(obj))
}
console.log(arr+" is of type "+typeof(arr))

// Q2.
let a=parseInt(prompt("Enter the first number:"))   //accepting the first number from prompt
let b=parseInt(prompt("Enter the second number:"))  //accepting the second number from prompt    
let ch=prompt("1.Add\n2.Subtract\n3.Divide\n4.Multiplay")   //accepting the choice of user from prompt 
//performing arithematic operations according to the users choice       
if(ch==1){
    document.writeln("Addition of "+a+" and "+b+" is "+(a+b))   //Addition
}else if(ch==2){
    document.writeln("Subtraction of "+a+" and "+b+" is "+(a-b))    //Subtraction
}else if(ch==3){
    document.writeln("Divide of "+a+" and "+b+" is "+(a/b)) //Divide
}else if(ch==4){
    document.writeln("Multiplication of "+a+" and "+b+" is "+(a*b)) //Multiplication
}else{
    alert("Invalid choice!!")   //handling the invalid choice
}

// Q3.
let n=prompt("Enter a number:") //accepting the number from prompt
if (n>0) {      //condition for checking positive number
    document.writeln("The number '"+n+"' is positive") //printing on the webpeage
}else if (n<0) {    //condition for checking negative number
    document.writeln("The number '"+n+"' is negative")  //printing on the webpeage    
} else {    //if both the above conditions are not true thn the number will be zero
    document.writeln("The number '"+n+"' is zero")  //printing on the webpeage      
}

// Q4
// initializing for loop to perform 1-20 iterations
for (let i = 0; i <=20; i++) {
    if (i%2!=1) {
        continue    //jumps to the next iteration of for loop and skips the remaning code
    }     
    console.log(i)  //prints the even numbers on console
}

// Q5
let g=prompt("Enter numeric grade between 0 to 100:")   //accepting the numeric grade from prompt
//if-else ladder to check the conditions and print grade accordingly
if (g>=90 && g<=100) {
    document.writeln("Your grade is A") //printing grade on the webpeage
}else if (g>=80 && g<=89) {
    document.writeln("Your grade is B") //printing grade on the webpeage    
}else if (g>=70 && g<=79) {
    document.writeln("Your grade is C") //printing grade on the webpeage    
}else if (g>=60 && g<=69) {
    document.writeln("Your grade is D") //printing grade on the webpeage    
}else if (g>=0 && g<=59) {
    document.writeln("Your grade is F") //printing grade on the webpeage    
}

