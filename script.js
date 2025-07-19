const strObj= `{
    "id": 0,
    "name": "Ramu",
    "company":"Peko"
}`

const strObj1= {
    "id": 0,
    "name": "kandan",
    "company":"Peko"
}
const jsonStr=JSON.parse(strObj)
const jsonStringify=JSON.stringify(strObj1)
console.log(jsonStr.name)
console.log(typeof(jsonStringify));

console.log("hello1")
function print1(callback)
{
setTimeout(()=>{
    callback(10)
},3000)
}
function print2(callback)
{
setTimeout(()=>{
    callback(10)
},3000)
}
function print3(callback)
{
setTimeout(()=>{
    callback(10)
},3000)
}
print1((value)=>{
    print2((print2Val)=>{
   
    print3((print3Val)=>{
     console.log(value+print2Val+print3Val)
})
})
})
