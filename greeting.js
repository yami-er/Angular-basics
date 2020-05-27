function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
//create class
var Person = /** @class */ (function () {
    //constractor 
    function Person(firstName, lastName, age, phoneNumber, state, zipcode, occupation, hourlyWage, certs) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipcode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
        if (certs) {
            this.certs = certs;
        }
        else {
            this.certs = [];
        }
    }
    //getter
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    Person.prototype.getState = function () {
        return this.state;
    };
    Person.prototype.getZipCode = function () {
        return this.zipCode;
    };
    Person.prototype.getOccupation = function () {
        return this.occupation;
    };
    Person.prototype.getHourly = function () {
        return this.hourlyWage;
    };
    Person.prototype.getCerts = function () {
        return this.certs;
    };
    //setter
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.setPhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
    };
    Person.prototype.setState = function (state) {
        this.state = state;
    };
    Person.prototype.setZipcode = function (zipcode) {
        this.zipCode = zipcode;
    };
    Person.prototype.setOccupation = function (occupation) {
        this.occupation = occupation;
    };
    Person.prototype.setHourly = function (hourlyWage) {
        this.hourlyWage = hourlyWage;
    };
    Person.prototype.setCerts = function (certs) {
        this.certs = certs;
    };
    //several combination methods
    Person.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.address = function () {
        return this.getState() + " " + this.getZipCode();
    };
    Person.prototype.ageOccupation = function () {
        return this.getAge.toString() + " " + this.getOccupation;
    };
    //wedge calculator
    Person.prototype.weeklyWage = function (hour) {
        var wage = 0;
        if (hour) {
            wage = hour * this.hourlyWage;
        }
        else {
            wage = 40 * this.hourlyWage;
        }
        return wage;
    };
    //add certs method
    Person.prototype.addCerts = function () {
        var _a;
        var newCerts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newCerts[_i] = arguments[_i];
        }
        (_a = this.certs).push.apply(_a, newCerts);
    };
    //function that implemets interface
    //function createSquare(config: SquareConfig): { color: string; area: number } {
    Person.prototype.personInfo = function (employee) {
        var emp = {
            firstName: "Jonathan",
            lastName: "Smith",
            age: 25,
            phoneNumber: 3800000000,
            state: "MD"
        };
        emp.firstName = employee.firstName;
        emp.lastName = employee.lastName;
        if (employee.age) {
            emp.age = employee.age;
        }
        if (employee.phoneNumber) {
            emp.phoneNumber = employee.phoneNumber;
        }
        if (employee.state) {
            emp.state = employee.state;
        }
        return emp;
    };
    return Person;
}());
//assigning the combination method to people
var employee1 = new Person("Anna", "King", 29, 7040000000, "NC", 27264, "Developer", 50, ["MBA", "CSM", "MCSD"]);
var employee2 = new Person("Sam", "Jackson", 30, 3010000000, "NC", 28227, "Jav Developer", 50);
//output employee1
document.getElementById("section1").innerHTML = employee1.fullName();
document.getElementById("section2").innerHTML = employee1.address();
document.getElementById("section3").innerHTML = employee1.weeklyWage(50).toString();
employee1.addCerts("Java", "Angular");
document.getElementById("section4").innerHTML = employee1.getCerts().join();
var employee = {
    firstName: employee1.getFirstName(),
    lastName: employee1.getLastName(),
    age: employee1.getAge()
};
document.getElementById("section5").innerHTML = employee1.personInfo(employee).phoneNumber.toString();
// output employee2
document.getElementById("section6").innerHTML = employee2.fullName();
document.getElementById("section7").innerHTML = employee2.address();
document.getElementById("section8").innerHTML = employee2.weeklyWage().toString();
employee2.addCerts("Angular");
document.getElementById("section9").innerHTML = employee2.getCerts().join();
