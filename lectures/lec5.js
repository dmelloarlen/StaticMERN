// class My extends Error{
//     constructor(msg){
//         super(msg)
//     }
// }
// try{
// let arr=[1,2,3,4]

// if (arr.length<6)
//     {
//         throw new My("index")
//     }

// }
// catch(err){
//     console.log(err)
// }

///////////////////// Error /////////////////////////
// try {
//     let age = -6
//     if(age<0){
//         throw new ReferenceError('This is a custom msg')
//     }

// }
// catch(err) {
//     console.log(err.name);
//     console.log(err.message);

// }



// try{
//     let a = 10
//     let b= 0
//     if(a==0 || b==0){
//         throw new Error('this is zero error')
//     }
// }
// catch(err){
//     console.log(err.name);
//     console.log(err.message);
// }

////////////////////////////  Promisses ///////////////////////////

// function fetchData(dataId){
//     setTimeout(()=> {
//         console.log('Data received', dataId);
//     },500)
// }
// fetchData()


// function getData(id,nextData) {
//     setTimeout(()=>{
//         console.log('data',id);
//         if(nextData){
//             nextData();
//         }
//     },100)
// }

// ///////Call back Hell ////////
// getData(1,()=>{
//     getData(2,()=>{
//         getData(5)
//     })
// })


// let Promise = new Promise((resolve,reject)=>{
//     console.log('promise');
//     resolve('completed')
// })

// console.log(Promise);



// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Data found of', dataId);
//             resolve("Data Found")
//             reject('error ')
//         },2000)
//     })
// }
// //.then =  jo resolve ka mess hai usko excess kar ne ke liye
// getData(1)
// .then((res)=>{
//     return getData(2)
// })
// .then((res)=>{
//     return getData(3)
// })
// .catch((res)=>{
//     console.log(res);
// })


// .catch = jese hi value reject huva vese hi reject ka mess print kare ga
// .json = ek Promise retturn kartta haia 

// homework Question
// make a database using Object
// make an array of query/dataId
// use Promises - if dataId PRRESENT IN DATABASE resolve  and print the value else reject it

// let db = {
//     1:'Data 1',
//     2:'Data 2',
//     3:'Data 3'
// }

// let dbo = [1,2,3,4,5]

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(dataId!=4){console.log('Data found of', dataId);
//                 resolve("Data Found")    
//             }else{
//                 reject( `Data with Id ${dataId} not`)
//             }
//         },2000)
//     })
// }

// //.then =  jo resolve ka mess hai usko excess kar ne ke liye
// getData(1)
// .then((res)=>{
//     for(let i=0;i<db.lenght;i++){
//         return getData(i)
//     }
// })
// .then((res)=>{
//     return getData(2)
// })
// .then((res)=>{
//     return getData(3)
// })
// .catch((res)=>{
//     console.log(res);
// })


// class p {
//     constructor(name,age){
//         this.name=name
//         this.age = age
//     }
// }


// p.prototype.greet = function(){
//     console.log('hello' ${});
// }



/////////////////closures ////////////////////////


// function makeCounter(){
//     let count = 0
//     return function(){
//         return count++
//     }
// }

// let counter = makeCounter()
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function add(){
//     let num1=10
//     return function(num2){
//         return num1+num2
//     }
// }

// let sample = add()
// console.log(sample(100));
// console.log(sample(200));








// try {
//     let a; 
    
//     if(typeof(a)== 'undefined'){
//         throw new Error('a is empty')
//     }else{
//         console.log(a);
//     }
// } catch(err) {
//     console.log(err.name);
//     console.log(err.message);
    
// }

///////////////////  user defined exception   ///////////////

// class CustomError extends Error{
//     constructor(msg){
//         super(msg)
//         this.name = this.constructor.name
//     }
// }

// try{
//     let a =10 
//     let b = 0
//     if(a==0 || b==0){
//         throw new CustomError('this  is a ')
//     }else{console.log(a/b);}
// }
// catch(err){
//     console.log(err.name);
//     console.log(err.message);
// }

// let arr =[1,2,3]
// class CustomError extends Error{
//     constructor(msg){
//         super(msg)
//         this.name = this.constructor.name
//     }
// }

// try{
//     if(typeof(arr[8]) == 'undefined'){
//         throw new CustomError("this is a")
//     }else {
//         console.log(arr.indexOf(8));
//     }
// }
// catch(err){
//     console.log(err.name);
//     console.log(err.message);
// }

///////////////////////////////////////////Async await///////////////////////////////////////////////////////////

// let dataid={
//     1:"data 1",
//     2:"data 2",
//     3:"data 3"
// }
// let data1=[1,2,3,4,5]
// function getData(id){
//     return new Promise((resolve,reject)=>{
//         if (dataid[id]){
//             resolve(dataid[id]);
//         }
//         else{
//             reject("no data found");
//         }
//     }
//     )
// }

// function fetchData(){
//     data1.forEach(async(val)=>{
//         try{
//             let result = await getData(val)
//             console.log(result);
//         }catch(err){
//             console.log(err);
//         }

//     })
// }
// fetchData();

var to=3000
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(to)
    }, to);
    to+=2000    
}













