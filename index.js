// JavaScript supports several types of values:

x = 4              //number
x = "hello world"  //string
x = true           //boolen
x = undefined      //"no value"
x = null           //"no value" like undefined

//Object:

let student =  {       
    name : 'Humoyun', // key : name , value : Humoyun
    age : 18          // key : age , value : 18
}

//console.log(student.age)

//Array: 

let array = [1, 2, 3, 5]

//console.log(array[0])  // 1: the first element of the array
//console.log(array.length)  // how many elements in the array
array[4] = 6  // add a new element
//console.log(array[4])

// Arrays and objects can hold other arrays and objects:

let array = [
    {name : 'Humoyun', age : 18}, // An array with 2 elements.
    {name : 'Kamran', age : 23} // Each element is an object.
]

console.log(array[0].name) // => Humoyun

let obg = {
    numbers : [1, 2, 3, 4]
}

console.log(obj.numbers[2]) // => number 3