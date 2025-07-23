const promise1 = new Promise((resolve,reject)=>{
    resolve( ["remy","rayee"])
})

const promise2= new Promise((resolve,reject)=>{
    // resolve (["minnu","aidu","chinnan",["minnu","aidu","chinnan",["minnu","aidu","chinnan",["minnu","aidu","chinnan"]]]])
    reject("API failed.")
})

const promiseAll= Promise.all([promise1,promise2])

promiseAll.then((res)=>
console.log(res.flat(Infinity))).catch((err)=>{
    console.log(err)
})


/**
 * notes   :> res.flat(infinity)
 * to flaten an array  [ [ 'remy', 'rayee' ], [ 'minnu', 'aidu', 'chinnan' ] ]
 * promiseAll.then((res)=>
console.log(res.flat(infinity))).catch((err)=>{
    console.log(err)
})
 */