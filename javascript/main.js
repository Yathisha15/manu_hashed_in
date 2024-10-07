// console.log("Hello World");
// console.error("Thos is an error")
// console.warn(":TYhis is warning ")
//var,let,const 
// let age=30; for const we are unable to change the value
// age=70;
// console.log(age)

//datatypes
//String,Numbers,Boolean,null,undefined,Symbol
// const name='John';
// const age=89;
// const isCool=true;
// const rating=4.5;
// const x=null;
// const y=undefined;
// let z;
// console.log(typeof(x));

// const name="John";
// const age=30;
// console.log("My name is "+name+ " and Iam "+age);

// console.log(`My name is ${name} and Iam ${age}`);

// const s="Hello world!";
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0,5).toUpperCase());
// console.log(s.split(""))

//Arrays- variables that holds multiple values 
// const numbers=new Array(1,2,3,4,5);
// const fruits=['apples','oranges','pears',10,true]
// fruits[5]='grapes';
// fruits.push("mangoes");//Add to the end of the array
// fruits.unshift("Strawberry");//Add to the beginning
// fruits.pop();//delete last element
// console.log(fruits.indexOf('oranges'))
// console.log(numbers,fruits);
// console.log(Array.isArray([1,2]))

//objects
// const person={
//     firstName:'Manu',
//     lastName:'M B',
//     age:22,
//     hobbies:['Music','coding','eating','sleeping'],
//     address:{
//     street:"madihally",
//     city:'Hassan',
//     state:"Karnataka"
//     }
// }
// console.log(person);
// console.log(person.firstName,person.lastName,person.hobbies[1]);

// console.log(person.address.city)
// const {firstName,lastName ,address:{city}}=person;
// console.log(firstName);
// person.email="mbmanu2000@gmail.com";
// console.log(person.email);

//todos

// const todos=[
// {
//     id:1,
//     text:"To do coding",
//     isCompleted:true
// },
// {
//     id:2,
//     text:"Meeting with boss",
//     isCompleted:true
// },
// {
//     id:3,
//     text:"Dentist appt",
//     isCompleted:true
// },

// ]
// console.log(todos[1].text);
// const todoJSON=JSON.stringify(todos);
// console.log(todoJSON);

//for loops
// for(let i=0;i<10;i++){
//     console.log(i);
// }

//while loop
// let i=0
// while(i<=10){
//     console.log(`The while loop number ${i}`);
//         i++;
    
// }

// for(let i=0;i<todos.length;i++){
//     console.log(todos[i].text)
// }

// for(let todo of todos){
//     console.log(todo.id);
// }

// forEach ,map ,filter
// todos.forEach(function(todo){
//     console.log(todo);
// })

// const todoText=todos.map(function(todo)
// {
//     return todo.text;
// });
// console.log(todoText);

// const todoCompleted=todos.filter(function(todo)
// {
//     return todo.isCompleted==true;
// }).map(function(todo)
// {
//     return todo.text;
// })
// console.log(todoCompleted);

//conditional statement 

// const x="10";
// if (x==="10" && x==="10"){
//     console.log("Value is equal ")

// }
// else if(x>10||x<20){
//     console.log("X is greater than 10")

// }
// else{
//     console.log("x is less than equal");
// }

//Ternary opeartor
// const x=10;
// const color=x>10?"red":"Blue";
// console.log(color)


//swith statement
// const color="green";
// switch(color){
//     case 'red':console.log("This is red color");
//     break;
//     case 'blue':console.log("color is blue ")
//     break;
//     default:console.log("It is not any color")
//     break;

// }

// function

// const addNums=(num1=1,num2=1)=>{
//     return num1+num2;
// }

// console.log(addNums(3,5))


//constructor
// function Person(firstName,lastName,dob){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.dob=new Date(dob);
//     this.getBirthYear=function(){
//         return this.dob.getFullYear();
//     }
//     this.getFirstName=function(){
//         return `${this.firstName}`
//     }
// }
// Person.prototype.getBirthYear=function(){
//     return this.dob.getFullYear();
// }
// const person1=new Person("Manu","MB","11-08-2002")
// const person2=new Person("Ranga","MB","14-04-2020")
// console.log(person1.getBirthYear(),person2.getBirthYear())



//class
// class Person{
//     constructor(firstName,lastName,dob)
//     {
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.dob=new Date(dob);
//     }
//     getBirthYear(){
//         return this.dob.getFullYear
//     }
// }

//single element selectors
// console.log(window);
// window.alert(1);