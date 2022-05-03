//
// homeTask1
let sity
sity="Kyiv"
sity="Lviv"
alert(sity)
// homeTask2
let n=5
let result=n**3
console.log(result)
// homeTask3
let item1Prise=5.25
let item2Prise=3.50
let item1Count=4
let item2Count=6
let Sum=item1Prise*item2Prise+item1Count*item2Count
document.write(Sum)

// homeTask4
let a="yes"
let b="yes"
let c="yes"
let d=2
let e=4
let f=3
let g=5
let h=1
let l=0
let k=10

let q1=prompt("are you a human?")
let q2=prompt("Have you a nose?")
let q3=prompt("Have you legs?")
let q4=prompt("1+1?")
let q5=prompt("2+2?")
let q6=prompt("1+2?")
let q7=prompt("2+3?")
let q8=prompt("1-0?")
let q9=prompt("1-1?")
let q10=prompt("5+5?")
 
let resultQ=0

let Questions=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10]
let Answers=[a,b,c,d,e,f,g,h,l,k]
for(let i=0;i<=Answers.length;i++){
    if(Questions[i]==Answers[i]){
    resultQ++
    }
}

alert("your result = "+resultQ)

// homeTask5

let userName="Jo"
let password="Logos"
let UserName=prompt("write your name")

let PasswordRequest

if (UserName==null){
alert("login failed")
}
else if (UserName==userName){
    PasswordRequest=prompt("enter your password")
}
else {
    alert("I dont know you")
}
if(PasswordRequest==password){
    alert("WELCOME")
}
// homeTask6
let num=prompt("chose a month")
let res
let Summer="Summer"
let Outumn="Outumn"
let Winter="Winter"
let Spring="Spring"


if (num>0 && num<=2|| num==12){
res=Winter
alert(res)
}
else if (num>2 && num<=5){
    res=Spring
    alert(res)
    }
    else if (num>5 && num<=8){
        res=Summer
        alert(res)
        }
        else if (num>8 && num<=11){
            res=Outumn
            alert(res)
            }
else{
    alert("DON'T JOKE WITH ME!!!")
}