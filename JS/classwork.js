let name;
console.log(name);

name = "Alekasa";
console.log(name);

const lastName = "Hrevtsova";
console.log(lastName);

let myName = "Aleksandra";
console.log(myName);

let count = "30";
console.log(count);
console.log(typeof count);

let age = 30;
console.log(age);
console.log(typeof age);

let isOnline = true;
console.log(isOnline);
console.log(typeof isOnline);

isOnline = false;
console.log(isOnline);
console.log(typeof isOnline);

let products;
console.log(products);
console.log(typeof products);

let cart = null;
console.log(cart);
console.log(typeof cart);

console.log(5 > 7);
console.log(4 > 2);
console.log(3 >= 3);
console.log(3 >= 4);

console.log(5 === "5");
console.log(true === 1);

console.log(5 == "4");
console.log(5 == "5");
console.log(true == 1);
console.log(false == 0);
console.log(undefined == 0);
console.log(undefined == 1);
console.log(null == 0);

console.log(5 != "5");
console.log(5 != "4");
console.log(!true);
console.log(!false);

let num = 12;
console.log(num);
console.log(typeof num);

num = num + "";
console.log(num);
console.log(typeof num);

let newNum = 23;
console.log(newNum);
console.log(typeof num);

newNum = String(newNum);
console.log(newNum);
console.log(typeof newNum);

let stringNum = "34";
console.log(stringNum);
console.log(typeof stringNum);

let boolNum = true;
console.log(boolNum);
console.log(typeof boolNum);

boolNum = Number(boolNum);
console.log(boolNum);
console.log(typeof boolNum);

let numValue = 1;
console.log(numValue);
console.log(typeof numValue);

numValue = Boolean(numValue);
console.log(numValue);
console.log(typeof numValue);

console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(false)); //false

console.log(Boolean(1)); //true
console.log(Boolean(" ")); //true
console.log(Boolean(` `)); //true
console.log(Boolean(" ")); //true
console.log(Boolean(Infinity)); //true
console.log(Boolean(true)); //true

//логические операторы
//&& - логическое и
console.log(1 && true);
console.log(0 && true);
console.log(false && true);
console.log(1 && 0 && true && false);
console.log(1 && false && true && 0);
//|| - логическое или
console.log(1 || true || 100);
console.log(true || 1);
console.log(0 || true);
console.log(false || true || 1);
console.log("" || 0 || undefined || false);
console.log(NaN || false || null | 0);
// ! - логическое не
console.log(!1);
console.log(!0);
console.log(!"");
console.log(!" ");
console.log(!NaN);
console.log(!undefined);
console.log(!null);

console.log(!!1);
console.log(!!0);
console.log(!!"");
console.log(!!" ");
console.log(!!NaN);
console.log(!!undefined);
console.log(!!null);

// let msg=confirm('Are you ready')
// console.log(msg);

// let greet= alert('welcome');
// console.log(greet);
// let userData =prompt("Enter your name here");
// console.log(userData)

//Ветвления
if (!1 > 0) {
  console.log("Hello World");
}

// let massage = "Добро пожаловать!";
// let enteredData = prompt("ВВедите число от 1 до 5");

// if (enteredData >= 1 && enteredData <= 5) {
//   console.log("Спасибо, вы ввели правильное число!");
// } else {
//   console.log("Вы ввели неправильное число");
// }
//циклы
//i=i+1||i+=1||i++
for(let i=0; i<10; i+=1){
  console.log(`итеграция № ${i+1} ${i+1}`);

}
const results=[1, 11, 23, 45, 32, 78, 988, 48];
console.log(results);

for (let i=0; i<results.length; i +=1){
  if (results[i]>=100);{
  console.log("трёхзначный элемент", results[i]);
}  if(results[i]>=10 && results[i]<100){

  console.log();
} 

}
  // const projectBody = document.querySelector('body');
  // console.log(projectBody);

  // const headerWrapper = document.querySelector('.header_wrapper');
  // console.log(headerWrapper);
  // console.dir(headerWrapper);

  // console.log(headerWrapper.title);
  // headerWrapper.title = 'Hello!';
  // console.log(headerWrapper.title);

  // const logo = document.querySelector('.logo');
  // console.log(logo.textContent);

  // logo.textContent='Photo Diary';
  // logo.style.fontSize = '56px';
  // logo.classList.add ('example');

  // const navMenu= document.getElementById('main-logo');
  // console.log(logo);
  // console.dir(logo);
  // console.log(logo.textContent);

  // logo.textContent = "Photo diary";
  // logo.style.fontSize = "36px";
  //font-size




