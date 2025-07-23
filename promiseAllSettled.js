const promise1= new Promise((resolve,reject)=>{
  resolve(["Amulya","Issac"])
})

const promise2= new Promise((resolve,reject)=>{
  // resolve(["bold","narrow"])
  reject("Api failed.")
})

const promises= Promise.allSettled([promise1,promise2])

promises.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})