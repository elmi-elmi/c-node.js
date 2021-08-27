// var name = 'Shahrokh';
// var age = 28;
// var hasHobies = true;


// const summarizeUser = function (name, age, hasHobies) {
//     return (
//         'name is ' + name
//         + ' age: ' + age
//         + ' has hobbies: ' + hasHobies
//     )
// }

// const add = (a, b) => a + b;
// const addOne = a => a + 1

// console.log(add(1, 2))
// console.log(addOne(4))
// // console.log(summarizeUser(name, age, hasHobies))

const person = {
    name: 'shahrokh',
    age: '28',
    greetin: function () {
        console.log(this.age)
    },

}

// person.greetin()

const hobbies = ['sex', 'and sex']
// for (let hobby of hobbies) {
//     console.log(hobby)
// }

// console.log(hobbies.map(h => 'hobbb: ' + h))

hobbies.push('eating');
console.log(hobbies.map(h => 'hobbb: ' + h))


