// var args = process.argv;
// var a = args[2];
// var b = args[3];
// var c = parseInt(a) + parseInt(b);

// console.log(c);

// var Person = function (name) {
//     this.name = name;
//     this.canTalk = false;
// };

// Person.prototype.greet = function () {
//     if (this.canTalk) {
//         console.log('Hi, I am ' + this.name);
//     }
// };

// var Employee = function (name, title) {
//     Person.call(this, name);
//     this.title = title;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.greet = function () {
//     if (this.canTalk) {
//         console.log('Hi, I am ' + this.name + ', the ' + this.title);
//     }
// };

// var michael = new Employee('Michael', 'programmer');

// michael.greet();

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(this.name + "is my name.");
//     }
// }

// class Employee extends Person {
//     constructor(title, name) {
//         super(name);
//         this.title = title;
//     }
// }

// var michael = new Employee("king", "michael");

// michael.speak();

var firstname = "jane";

(function() {
  var firstname = "john";
  //console.log(firstname);
})();

console.log(firstname);
