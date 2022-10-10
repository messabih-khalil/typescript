class Users {
 private u : string;
 private s : number;
 constructor(username : string , salary : number){
	this.u = username;
	this.s = salary;	
 };
	
 personInfo(){
  console.log(`ur name is : ${this.u} and ur sakary is ${this.s}`)
 }

 // setter
 // set username(newName : string) : void{
  //this.u = newName
  //console.log(`your new name is : ${this.u}`)
 //}
 // getter
 //get username() : string{
  // return this.u
 //}

 // override 

 move() : void {
  console.log("im moving now")
 }
}


class Persons extends Users{
 constructor(public username : string , public salary : number){
  super(username,salary) 
 }

 // override move methode

 override move() : void {
  console.log("im swiming")
 }
}


let newUser = new Users("aladdin" , 5000)
newUser.personInfo()

let newPerson = new Persons("khalil" , 2000)
newPerson.move()
