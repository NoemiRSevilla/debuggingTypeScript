// 1. SETTING TYPES

var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
var myNumber: number;
myNumber = 9;

// 2. Setting the types for function parameters

function sayHello(name: string) {
    return `Hello, ${name}!`;
}
function sayNumber(number: number) {
    return `Hello, ${number}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayNumber(9));

// 3. Optional parameters

function fullName(firstName: string, lastName: string, middleName?: string) {
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));

// 6. Arrow functions
function arrowFunction(x: number, y?: number){
    var increment = x => x + 1;
    // This works great:
    console.log(increment(3));
    var square = x => { x * x };
    // This is not showing me what I want:
    console.log(square(4));
    // This is not working:
    var multiply = x * y;
    // Nor is this working:
    var sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}

// 7. Arrow functions and 'this'

class Elephant {
    constructor(public age: number) { }
    birthday = function () {
        this.age++;
    }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(babar => {
    console.log(`Babar's age is ${babar.age}.`)
}, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
