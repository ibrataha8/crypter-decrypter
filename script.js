let btn = document.querySelector("#btn")
let btn2 = document.querySelector("#btn2")
let span = document.querySelector("#span1")
let span2 = document.querySelector("#span2")
let val = document.querySelector("input[type=text]")
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let res = []
let res2 = []

function crypter() {

    for (let i=0;i<val.value.length;i++){
         stock1 = val.value[i]
        if (stock1 == "z") {
        res.push("£")     
        }
        if (stock1 == " ") {
            res.push(" ")
        }
    else{
         for (let j=0;j<alphabet.length;j++){
            stock2 = alphabet.indexOf(stock1)+1
            res.push(alphabet[stock2])
            console.log(res.join(""))
            break
     }
     }}
     span.innerHTML=res.join("")
    }

function decrypter() {
    for (let i=0;i<val.value.length;i++){
         stock1 = val.value[i]
         if (stock1 == "£") {
            res2.push("z")     
            }    
        if (stock1 == " ") {
                res2.push(" ")
            }
    else{
         for (let j=0;j<alphabet.length;j++){
    
            stock2 = alphabet.indexOf(stock1)-1
            res2.push(alphabet[stock2])
            console.log(res2.join(" "))
            break
     }}
     }
     span2.innerHTML=res2.join("")
    }

btn.addEventListener("click",()=>{
        crypter()
        res = []
    })
btn2.addEventListener("click",()=>{
        decrypter()
        res2 = []
    })

