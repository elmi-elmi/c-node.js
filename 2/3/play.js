var name = 'Shahrokh';
var age = 28;
var hasHobies = true;


const summarizeUser = function (name, age, hasHobies) {
    return (
        'name is ' + name
        + ' age: ' + age
        + ' has hobbies: ' + hasHobies
    )
}

const add = (a, b) => a + b;
const addOne = a => a + 1

console.log(add(1, 2))
console.log(addOne(4))
// console.log(summarizeUser(name, age, hasHobies))