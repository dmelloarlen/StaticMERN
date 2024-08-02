// golbal scope
let r=4;
var b=24;
const pi=3.14;

function areaOfCircle(){
    // local scope
    const pi=3.14
    return pi*r*r
}
function areaOfRectangle(){
    // local scope
    let l=10;
    let b=10;
    return l*b
}
function areaOfTriangle(){
    // local scope
    let l=10;
    let b=10;
    return 0.5*b*l
}

// console.log(areaOfCircle());
// console.log(areaOfRectangle());
// console.log(areaOfTriangle());



// Premative datatype
    // undefined
    // null
    // string
    // boolean
    // number
    // object


var phone={

    iphone12:{
        type:"Ultra pro max",
        color:"Red",
        model:2344   
    },
    iphone13:{
        type:"pro max",
        color:"Blue",
        model:2344   
    },
    iphone14:{
        type:"Mini",
        color:"Black",
        model:2344   
    },
    iphone15:{
        type:"Ultra pro max plus",
        color:"Green",
        model:2344   
    }
}

console.log(phone.iphone12["type","model"]);


// Operators
    // Arithmatic operators
    // +
    // -
    // /
    // *
    // Comparision operators
    // ==
    // ===
    // !=
    // !==
    // <=
    // >=
    // Assignment operators
    // =
    // :
    // +=
    // -=
    // /=
    // *=
    // Logical operators
    // &&
    // ||
    // !
    // Bitwise operators
    // <<<
    // >>>
    // &
    // |



// const arr=[1,2,3,4,5];
// const res=arr.map((x)=>x*2).reduce((sum,x)=>sum+x,0)
// console.log(res);


age=20;

if (age>18){   
    if(age==21){
        console.log("10")
    }
    else{

        console.log("Not 21");
    }
}
else{
    console.log("Minor")
}


console.log(age>=18?"Adult":"Minar")

// console.log("Hello World")
// console.log(typeof "Hello World")
// console.log(4)
// console.log(typeof 4)
// console.log(true)
// console.log(typeof true)

// console.log(Number("44"))
// console.log(String(44))
// console.log(Boolean(1))
// let l=[]

// let d={
//     name:"Aarys",
//     age:18,
//     hobby:["Football","Coding","Cricket"]
// }

// d.hobby[0]="Cycling"


