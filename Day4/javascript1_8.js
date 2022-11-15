//1.JS CONSOLE_________________________________
console.clear()
document.write('Hello...Welcome')
let name = prompt("What is yor Name:");
alert("Hello," + name + "!");
console.log("Hello.." + name + " Welcome to Javascript");
console.log("The sum is", 5 + 10);
console.warn("This is Warning..");
console.error("This is Error");
console.assert(4 == 6);

//2.VARIABLES_________________________________
var n1 = 33;
var n2 = 45;
console.log(n1 + n2);
letj = 9
const d = 5

//3.DATATYPES__________________________________

//Strings
var str1 = "hello";
var str2 = "world";

//Objects
var marks = {
    Vaish: 88,
    Angel: 87,
    Abi: 96.8
}
console.log(marks)

//Boolean
var a = true;
var b = false;
console.log(a, b);

//Undefined(Variable not defined & empty)
var und;
console.log(und);

var n = null;
console.log(n);

//ARRAYS_________________________________________
var arr = [1, 2, "Welcome", 7.7]
console.log(arr)
console.log(arr[2])

//4.OPERATORS______________________________________
var a = 44
var b = 50
console.log('The value of a+b is', a + b)
console.log('The value of a-b is', a - b)
console.log('The value of a*b is', a * b)
console.log('The value of a/b is', a / b)

//ASSIGNMENT OPERATOR
var c = b;
console.log(c)

//Logical Operators
console.log(true && true)
console.log(true || true)
console.log(!true)

//5.FUNCTIONS______________________________________
function avg(a, b) {
    return (a + b) / 2;
}
c1 = avg(4, 6)
c2 = avg(14, 16)
console.log(c1, c2)

//ARROW FUNCTIONS
console.log('arrow functions')
let avg1 = (a, b, c) => {
    return (a + b + c) / 3;
}
console.log(avg1(10, 20, 30))

//6.CONDITIONAL & LOOP STATEMENTS___________________________

var car = 50000
if (car > 50000) {
    console.log("I wil buy car later")
} else if (car < 50) {
    console.log("I will buy two car")
} else {
    console.log("I will buy Car")
}

//LOOPs
var arr = [1, 2, 3, 4, 5, 6, 7]
console.log('for loop')
console.log(arr)
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

//FOR EACH LOOP
console.log('foreach loop')
arr.forEach(function(element) {
    console.log(element)
})

//SWITCH
console.log('switch')
let x = 0;
switch (x) {
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found";
}
console.log(text)

//WHILE LOOP
console.log('while loop')
let j = 0
while (j < arr.length) {
    console.log(arr[j])
    j++
}

//DO WHILE 
console.log('do while')
let p = 0
do {
    console.log(arr[p])
    p++
} while (p < arr.length)

//BREAK & CONTINUE
console.log('break & continue')
for (vari = 0; i < arr.length; i++) {
    if (i == 2) {
        break
        //continue
    }
    console.log(arr[i])
}

//7.ARRAY METHODS__________________________
console.log('Array methods')
let arr1 = ['pg', 'byju', 55, null, true]
console.log(arr1.length)
arr1.pop()
arr1.push('harry')
arr1.shift()
arr1.unshift('Pgrad')
console.log(arr1)
console.log(arr1.toString())
console.log(arr1.sort())

//STRING METHODS
console.log('string methods')
let st = "Pg is a edtech edtech Company"
console.log(st.length)
console.log(st.indexOf('edtech'))
console.log(st.lastIndexOf('edtech'))
console.log(st.slice(1, 4))
console.log(st.replace('Pg', 'PGrad'))


//8.DATES____________________________________
console.log('dates chapter')
let md = new Date()
console.log(md)
console.log(md.getTime())
console.log(md.getFullYear())
console.log(md.getDay())
console.log(md.getMinutes())
console.log(md.getHours())

//REST AND SPREAD OPERATOR
console.log('Rest & Spread')

function sumOne(a, b) {
    return a + b
}
console.log(sumOne(5, 4))
console.log(sumOne(2, 3, 4))

function sumTwo(a, b) {
    return a + b
}
var myA = [5, 4]
console.log(sumTwo(myA))

function sum3(a, b) {
    return a + b
}
var myA = [5, 4]
console.log(sum3(...myA)) //Spread Operator

//rest operator
function sum4(...args) {
    let sum = 0;
    for (const arg of args) {
        sum += arg
    }
    return sum
}
console.log(sum4(2, 3, 4, 5))