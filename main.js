/*->JS: const,var,let 
  ->JS bir değişkene bütün türler atanabilir!
  
//ARRAY
var apple = ["ahmet", 1, "ahmet@gmail.com", true, 5.4];
//pop-push-shift-unshift
console.log(typeof apple); //array
console.log(apple);


//OBJECT
const user = {
  name: undefined,
  email: undefined,
  password: undefined,
  gender: undefined,
};
user.name = "Test";

console.log(user);
console.log(user.name);


-------------------
Exercise
1- Create an array as studentList 
2- thoose are student info: (id,firstname,email,score,password,status)
3- Create 5 object with that information step 2
4- Push all objects into studentList array
5- Add value to begining of the array
6- Add value to end of the array
7- print all student names with for loop
8- convert to student status to true value
9- print "🔥 fire" if the score > 85

const studentList =[];
const student1={id:undefined,firstname:"nursima",email:undefined,score:5,password:9,status:false}
const student2={id:undefined,firstname:"sima",email:undefined,score:6,password:4,status:false}
const student3={id:undefined,firstname:"ömer",email:undefined,score:0,password:34,status:false}
const student4={id:undefined,firstname:"abdullah",email:undefined,score:5,password:15,status:false}
const student5={id:undefined,firstname:"keriz",email:undefined,score:90,password:194,status:false}
studentList.push(student1,student2,student3,student4,student5);
studentList.unshift("r u cola?");
studentList.push(9);
for(let i=0;i<studentList.length;i++){
	studentList[i].status=true;
	console.log(studentList[i]);
	if(studentList[i].score>85)
		 console.log("🔥 fire")
		
}

USAGE OF VARIABLES
let 
    if data value changes

const
    functions
    object
    array

---------TEMPLATE LITERAL-------
let name = "ahmet";
let email = `my name is ${name}.`;
console.log(email);
console.log(`2+2=${2 > 1}`);


// == & === 3 eşitlikte türleri de inceler, 2 eşitlikte değere bakar
let x = "5";
let y = 5;
if (x === y) {
  console.log(typeof x);
  console.log(typeof y);
  console.log(x == y);
} else {
  console.log(x === y);
}


//----TERNARY OPERATOR---
if (true) console.log("yuppi");
true ? console.log("çalışır") : console.log("nah çalışır");
*/

///FONKSIYONLARRR

//1-basic function
function nursima() {
  console.log("Hello World");
}
nursima();

//2-anonymous function
let awesome = function () {
  console.log("Anonmyous function");
};
awesome();

//3- arrow function
let best = (name) => {
  name();
  console.log("Arrow function");
};
best(awesome);
