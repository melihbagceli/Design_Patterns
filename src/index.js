function Employee(name) {
  this.name = name;
  this.say = function () {
    console.log("Im employee " + name);
  };
}

function EmployeeFactory() {
  this.createEmployee = function (name) {
    return new Employee(name);
  };
}

var employeFactory = new EmployeeFactory();
employeFactory.createEmployee("Melih").say();
employeFactory.createEmployee("Ahmet").say();
