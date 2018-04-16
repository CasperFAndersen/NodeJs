function Person(fname, lname, age) {
  this.firstName = fname;
  this.lastName = lname;
  this.age = age;
}

Person.prototype.fullName = function() {
  var fullname = `${this.firstName} ${this.lastName}`;

  return fullname;
};

module.exports.Person = Person;
