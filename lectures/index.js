const te=document.getElementById("textElement")
const se=document.getElementById("changeStyleButton")
let txt=te.innerText

document.getElementById("changeTextButton").addEventListener("click",()=>{
    
    te.style.color="red"
    te.innerText=txt
    txt=te.innerText
})

// document.getElementById("changeTextButton").addEventListener("click",()=>{
//     te.style.color="red"
//     te.innerText=txt
// })

// const res2=document.getElementById("changeTextButton").addEventListener("click",()=>{
//     te.style.color="red"
//     te.innerText="Modified Element"
// })