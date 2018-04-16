let Employee = require("./employee");

var TempEmployee = function(title, fname, lname, age, start, end) {
  Employee.call(this, fname, lname, age, title);
  this.start = start;
  this.end = end;
};

TempEmployee.prototype = Object.create(Employee.prototype);
TempEmployee.prototype.constructor = TempEmployee;

module.exports.TempEmployee = TempEmployee;
