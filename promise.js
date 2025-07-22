// const promise = new Promise((resolve,reject)=>{
//    // resolve("success");
//     reject("fail");
// })

// promise.then((response)=>{
//     console.log("dddd",response)
// }).catch((err)=>{
//     console.log(err)
// })


function print1(num)
{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
   resolve(num)
},3000)
})
}
function print2(num,callback)
{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve(num)
},3000)
})
}

print1(5).then((res)=>{
    const sum =res

    print2(res+5).then((response)=>{
        console.log(response)
    })
})