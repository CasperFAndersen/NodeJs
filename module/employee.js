var Person = require("./person");

// const person = new Person("hans", "hansen", 23);

var Employee = function(title, fname, lname, age) {
  Person.call(this, fname, lname, age);
  this.title = title;
};

// Standard pattern to setup the prototpye chain:
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

module.exports.Employee = Employee;
