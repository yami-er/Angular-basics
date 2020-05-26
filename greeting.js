function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
//create class
var person = /** @class */ (function () {
    //private hourly: number;
    //private certs: string[];
    //constractor 
    function person(firstName, lastName, age, phoneNumber, state, zipcode, occupation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipcode;
        this.occupation = occupation;
    }
    //getter
    person.prototype.getFirstName = function () {
        return this.firstName;
    };
    person.prototype.getLastName = function () {
        return this.lastName;
    };
    person.prototype.getAge = function () {
        return this.age;
    };
    person.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    person.prototype.getState = function () {
        return this.state;
    };
    person.prototype.getZipCode = function () {
        return this.zipCode;
    };
    person.prototype.getOccupation = function () {
        return this.occupation;
    };
    //setter
    person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    person.prototype.setAge = function (age) {
        this.age = age;
    };
    person.prototype.setPhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
    };
    person.prototype.setState = function (state) {
        this.state = state;
    };
    person.prototype.setZipcode = function (zipcode) {
        this.zipCode = zipcode;
    };
    person.prototype.setOccupation = function (occupation) {
        this.occupation = occupation;
    };
    //several combination methods
    person.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    person.prototype.address = function () {
        return this.getState + " " + this.getZipCode();
    };
    person.prototype.ageOccupation = function () {
        return this.getAge.toString() + " " + this.getOccupation;
    };
    return person;
}());
//assigning the combination method to people
var employee1 = new person("Anna", "King", 29, 7040000000, "NC", 27264, "Developer");
var employee2 = new person("Sam", "Jackson", 30, 3010000000, "NC", 28227, "Jav Developer");
//output
document.getElementById("user1").innerHTML = employee1.fullName();
document.getElementById("user2").innerHTML = employee2.address();
