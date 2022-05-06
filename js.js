// Завдання 1

// Написати розв’язок нижче описаного завдання за допомогою конструкції switch:
// 1.	Користувач вводить число в prompt
// 2.	Після введення числа вистрибує алерт з оголошенням пори року до якої відноситься число (номер місяця) що ввів користувач.
// 3.	Якщо число не входить в діапазон від 1 до 12 тоді виводить що це неможливо.
// ------------------------------------------------------------------------------------------

// Завдання 2

// Написати розв’язок нижче описаного завдання за допомогою function declaration:
// 1.	Створити функцію яка буде приймати одне число.
// 2.	В середині функції перевіряємо чи це число є простим.
// 3.	Після перевірки виводимо повідомлення в console.log().
// ------------------------------------------------------------------------------------------

// Завдання 3

// Написати розв’язок нижче описаного завдання за допомогою function declaration:
// 1.	Потрібно створити функцію, яка повертає максимальний переданий їй числовий параметр.
// 2.	Кількість параметрів у функції може бути від 2х і більше.
// 3.	Забороняється використовувати Math.max().
// Приклад роботи:
// 1.	max(5,-2) – має повернути 5.
// 2.	max(5,-2, 30, 6) – має повернути 30

// Task1
let x=Number(prompt("enter number of mounth"))
switch(x){
case 1: alert("січень")
break
case 2: alert("лютий")
break
case 3: alert("березень")
break
case 4: alert("квітень")
break
case 5: alert("травень")
break
case 6: alert("червень")
break
case 7: alert("липень")
break
case 8: alert("серпень")
break
case 9: alert("вереснь")
break
case 10: alert("жлвтень")
break
case 11: alert("листопад")
break
case 12: alert("грудень")
break
default :alert("write a number")
}
// Task2

let SearchInteger= function(i){
    for(let j=2;j<i;j++){
if(i%j==1){
return alert("integer") 
}
else {alert("not integer") 
break
}
}}
SearchInteger(prompt("write a number"))

// Task3
let n
let max=function(){
for (let i=0;i<arguments.length;i++)
if(arguments[i]>=arguments[i-1]){n=arguments[i]}
else{continue}
return n
}
console.log(max(8,9,3,11,0,-9))

// task 4
let password=5
let count=4
let usersPromt= function(){return prompt("enter your pass")
}

if(usersPromt()==password)
{alert('entering')}
else {
    do{
        count--
    alert(`'wrong pass:you have '${count} ' attempt' `)
    usersPromt()
} while(count!==0)
        
  alert('try later')  
    }




