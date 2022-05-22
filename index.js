// JavaScript supports several types of values:

// x = 4              //number
// x = "hello world"  //string
// x = true           //boolen
// x = undefined      //"no value"
// x = null           //"no value" like undefined

//Object:

// let student = {
//   name: "Humoyun", // key : name , value : Humoyun
//   age: 18, // key : age , value : 18
// };

//console.log(student.age)

//Array:

let array = [1, 2, 3, 5];

//console.log(array[0])  // 1: the first element of the array
//console.log(array.length)  // how many elements in the array
array[4] = 6; // add a new element
//console.log(array[4])

// Arrays and objects can hold other arrays and objects:

// let array = [
//     {name : 'Humoyun', age : 18}, // An array with 2 elements.
//     {name : 'Kamran', age : 23} // Each element is an object.
// ]

// console.log(array[0].name) // => Humoyun

// let obg = {
//     numbers : [1, 2, 3, 4]
// }

// console.log(obj.numbers[2]) // => number 3

// the operands to produce a new value.

x = 2;
y = 5;

// x += y; // equel to x = x + y
// x > y; // false
// x >= y; // false
// x <= y; // true
// x < y; // true
// !(x===y) // true
// false = x===y // true
// x++ // x = x + 1
// x-- // x = x - 1
// x *= y // equel to x = x * y
// x /= y // equel to x = x / y
// (x === 2) && (y === 4) // x = 2 and (&&) y = 4 (false) 
// (x === 2) || (y === 3) // x = 2 or (||) y = 4 (true)

//Functions :

// function plus(x){
//     return x + 1
// }

// function square(x, y){
//     return x * y
// }

// function remainder(x, y){
//     return x % y
// }

// console.log(minus(y,x))

// JavaScript statements include conditionals and loops using the syntax:

function remainder(x, y){
    if(x%y==1){
        return console.log('ok')
    }else{
        return console.log('----') 
    }
}

remainder(y,x)

function factorial(x){
    let sum = 1
    for (i = 1; i <= x; i++){
        sum *= i
    }
    return console.log(sum)
}
factorial(y)

function factorial_2(x){
    let sum = 1
    while(x>1){
        sum *= x
        x--
    }
    return console.log(sum)
}
factorial_2(y)

// function sum(array){
//     let sum = 0 
//     for(let x of array){
//         if(x === 2){
//             continue
//         }
//         sum += x
//     }
//     return sum
// }
// console.log(sum(array))

student = [ 
    {name: "Humoyun", age: 19},
    {name: "Kamron", age: 22}
]

const a = student.filter(student =>{
    if(student.name === 'Humoyun'){
        student.age++
        return console.log(student.age)
    }else{
        return console.log('some error')
    }
})

const sum = student.forEach(a => {
    b = 0
    for(let x in a.age){
        b = b + x
    }
    return console.log(b)
});
