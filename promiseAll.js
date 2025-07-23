const promise1 = new Promise((resolve,reject)=>{
    // resolve( ["remy","rayee"])
    reject("API failed.")
})

const promise2= new Promise((resolve,reject)=>{
    resolve (["minnu","aidu","chinnan",["minnu","aidu","chinnan",["minnu","aidu","chinnan",["minnu","aidu","chinnan"]]]])
    // reject("API failed.")
})

const promiseAll= Promise.race([promise1,promise2])

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
   Promise.any() behavior:
It resolves as soon as any one of the input promises fulfills (i.e., succeeds).

If all promises reject, then it rejects with an AggregateError.
%%%%%%%%%%%%%%%%
Promise.race() returns a promise that:

Settles (resolves or rejects) as soon as the first promise settles, whether it’s fulfilled or rejected.

 */