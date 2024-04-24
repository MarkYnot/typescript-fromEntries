/*
 题目：
 转换 const array = [
  ｛ key: "name", value: "Daniel"｝, 
   { key: "age", value: "26" }, 
   { key: "location", value: "UK" }] 

  为 ｛ name: “Daniel”, age: “26”, location: “UK” } 
  该怎么做且如何用typescript做
*/



interface Item {
  key: string;
  value: string;
}

const array: Item[] = [
  {key:"name", value: "Daniel"},
  {key:"age", value:"26"},
  {key:"location", value:"UK"}
]

interface ConvertedObject{
  [key: string]: string
}

interface User {
  name: String;
  value: String;
}

/*
这是使用reduce的做法：
  const convertedObject: ConvertedObject = array.reduce((acc, obj) => {
    acc[obj.key] = obj.value;
    return acc;
  }, {})
*/

// 使用fromEntries的方法
const result: ConvertedObject = Object.fromEntries(array.map(({key, value}) =>[key,value])) 
console.log(result)