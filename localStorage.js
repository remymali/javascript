// localStorage.setItem("name","remy")
// localStorage.setItem("age","38")
// localStorage.clear()
// console.log(localStorage)
// localStorage.removeItem("name") // if we console will get null

// // document.writeln(localStorage.getItem("name"))
// // console.log(localStorage.key(0))

// const obj ={
//     name:"Arman",
//     email:"arman@yopmail.com"
// }
// localStorage.setItem("loginDetail",JSON.stringify(obj))
// console.log(JSON.parse(localStorage.getItem("loginDetail"))
// )// store as [object,object]

// const input =document.querySelector('input')
// const loginBtn =document.querySelector("#login")
// const logoutBtn =document.querySelector("#logout")
// const h1= document.querySelector('h1')
// const token=localStorage.getItem('token')
//    if(token)
//    {
//     h1.innerText='Welcome'
//    }
//    else
//    {
//       h1.innerText='Please login'
//    }
//    console.log(h1)
// loginBtn.onclick=()=>{
//     if(input.value)
//     {
//         console.log(input.value)
//     localStorage.setItem("token",input.value)
//     h1.innerText='Welcome'
//     }

// };
// logoutBtn.onclick=()=>{
//     localStorage.clear()
    
//        h1.innerText='Please login'
    
    
// };
import { reversePrint } from "./module.js";
import printall  from "./module.js"
reversePrint(10)
printall()