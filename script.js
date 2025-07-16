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
