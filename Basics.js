var test = "Pavan";
console.log(test);

const dulha = "Jayen";
var dulhan = "Sameeksha";

//dulha = "Test";

console.log(dulha+"--weds--"+dulhan);

//Hoisting in JS
console.log(test1);
var test1 = 50;

var arr = [1,2,3,4,5];
var arr1 = arr;
arr1.push(6);
console.log(arr);


//Conditionals
var pr = "Pavan";
if(pr==null){
  console.log(pr);
}
else{
  console.log("No Brooo.. wrong path")
}

//Loops
for(var i=0;i<1;i++){
  console.log("This is your boy Pavan Patil at occurance "+i);

var flag = true;
var count = 0;
console.log("=================");
while(flag){
      if(count++==2){
        break;
      }
  console.log("I an working hard for my dreams");
}

//Functions
  //1. aapka code future mein run krna chate ho
  //2. reuse the code
  //3. to run same code with diff data

  function abcd(a){
    //function statment
    console.log("This is a function "+a);
  }
  abcd(12);


//Arrays = group of values

  var narr = [1,2,3,4,5,6,7,8,9,10];
  for(var i=0;i<narr.length;i++){
    console.log(narr[i]);
  }
  
  //push pop shift unshift
  narr.push(11);
  console.log(narr);
  narr.pop()
  console.log(narr);
  narr.shift();
   console.log(narr);
 

//remove from which,how many
  narr.splice(2,1);
  console.log(narr);


//Object
  var obj = {};
  obj.name = "Pavan";
  console.log(obj);

  //Props Vs Methods
  //below name,age,pan,city are properties & func is method(function in object is called method)
  
  var person = {
    name:"Pavan",
    age:"26",
    pan:"abdgpp4569o",
    city:"Dhule",
    contact:74478493040,
    func:function(){
    }
  }
  console.log(person);
  person.name = "PaVan PaTiL";
  console.log(person);
  




















































}
