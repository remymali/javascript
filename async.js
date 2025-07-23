

// const promise1 = new Promise((resolve, reject) => {
//     // resolve(["Ayshu", "Remy"])
//     reject("api failed")
// })

// const promise2 = new Promise((resolve, reject) => {
//     resolve("second")
// })

// // promise1.then((res)=>{
// //     console.log(res)
// // }).catch((err)=>{
// //    console.log(err)
// // })

// const result = asynchandler(async () => {
//     try {
//         const pr = await promise1
//         const pr2 = await promise2

//         console.log(pr + pr2)

//     } catch (error) {

//         console.log(error)

//     }

// })

// result()

const resolveJson=async(url)=>{
    const val = await fetch(url)
      const data=await val.json();
      return data
}

const result=async()=>{
const val = await resolveJson('https://jsonplaceholder.typicode.com/todos/1')
      console.log(val)
}
result()