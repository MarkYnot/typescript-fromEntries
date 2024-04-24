var array = [
    { key: "name", value: "Daniel" },
    { key: "age", value: "26" },
    { key: "location", value: "UK" }
];
// const convertedObject: ConvertedObject = array.reduce((acc, obj) => {
//    acc[obj.key] = obj.value;
//    return acc;
// }, {})
var result = Object.fromEntries(array.map(function (_a) {
    var key = _a.key, value = _a.value;
    return [key, value];
}));
console.log(result);
