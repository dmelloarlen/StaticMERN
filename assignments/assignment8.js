const axios=require("axios")

// Q1.
// Fetching the data from an API using axios
const getContent=async()=>{
        const res=await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(res)       
}
getContent()

// Q2.
// Fetching the data from an API using axios and handeling the errors if any
const getContent1=async()=>{
    try{
        const res=await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(res)
    }catch(e){
        console.log(e+" Invalid URL to the fetch request")        
    }
}
getContent1()

// Q3.
// Fetching the data from two different API's one after the another using axios and handeling the errors if any
const getContent2=async()=>{
    try{
        const res=await axios.get("https://jsonplaceholder.typicode.com/posts")
        const res2=await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log("Data from first API")
        console.log(res.data)
        console.log("Data from second API")
        console.log(res2.data)
    }catch(e){
        console.log(e)        
    }
}
getContent2()

// Q4.
// Parallel fetching the data from two different API's using axios
const fetchData=(api)=>{
    return axios.get(api)
    .then(res=>res)
    .catch(err=>err)
}

const apis=[
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
]

const promis=apis.map(api=>fetchData(api))

Promise.all(promis)
.then(res=>console.log(res[0].data))
.catch(err=>console.log(err))