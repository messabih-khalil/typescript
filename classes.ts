// ************* class

class Validation {
  password: string;
  constructor(password: string) {
    this.password = password;
  }

  // check password legnth

  length() {
    if (this.password.length >= 8) {
      return true;
    }
    return false;
  }
}

let person = new Validation("123456789");

// *********** class Inheritance

class EmailValidation {
  private email: string;
  constructor(email: string) {
    this.email = email;
  }
  validateEmail() {
    if (this.email) {
      return true;
    }
    return false;
  }
}

class ProfileValidation extends EmailValidation {
  constructor(email: string) {
    super(email);
  }

  emailValidator() {
    super.validateEmail();
  }
}

let newUSer = new ProfileValidation("alaa@gmail.com");
let result = newUSer.emailValidator();

// ******** Protected , Private , Public

// private

class GenderValidator {
  private gender: string;
  constructor(gender: string) {
    this.gender = gender;
  }
}

// protected

class Person {
  protected name: string;
  protected constructor(theName: string) {
    this.name = theName;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
// let john = new Person("John");

// ********** Getters , Setters

let passcode: string = "@a%l$ss"; // just for accessing setter

class Account {
  private _email: string = "aladin@gmail.com";

  get email(): string {
    return this._email;
  }

  set email(newEmail: string) {
    if (passcode && passcode == "@a%l$ss") {
      this._email = newEmail;
      console.log("Success");
    } else {
      console.log("Error");
    }
  }
}

// ********* Abstract class

abstract class People {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  printName() {
    console.log("your name is : " + name);
  }

  abstract ageIndDays(): number;
}

class Human extends Person {
  constructor(name: string) {
    super(name);
  }

  ageInDays(age: number) {
    return age * 365;
  }
}
