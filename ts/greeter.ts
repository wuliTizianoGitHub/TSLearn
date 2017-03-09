//greeter.ts
class Student {
 firstName : string;
 lastName : string;

 constructor(fiestName : string,  lastName : string) {
     this.firstName = fiestName;
     this.lastName = lastName;
 }

 greeter() {
     return "Hello，您好" + this.firstName + " " + this.lastName;
 }
}

var user = new Student("周", "智障");

//document.body.innerHTML = user.greeter();
document.body.innerHTML = user.greeter();