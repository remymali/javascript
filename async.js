

const promise1 = new Promise((resolve, reject) => {
    // resolve(["Ayshu", "Remy"])
    reject("api failed")
})

const promise2 = new Promise((resolve, reject) => {
    resolve("second")
})

// promise1.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//    console.log(err)
// })

const result = async () => {
    try {
        const pr = await promise1
        const pr2 = await promise2

        console.log(pr + pr2)

    } catch (error) {

        console.log(error)

    }

}

result()