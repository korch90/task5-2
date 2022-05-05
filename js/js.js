
// Task 1

let factorial=Number(prompt("write a number"))

function factorialResult(factorial){
    let showRes=1
for (let i=1; i<=factorial;i ++){
    showRes*=i
}
return showRes
}
alert(factorialResult(factorial))

// Task 2

function show4numbersCoun(){
    for(let i=1000;i<=10000;i+=3){
        document.write(`${i}<br>`)
}}
show4numbersCoun()

// Task3

let j=55
let i=1
let k=0
while(k<j)
{
i+=2
k++
document.write(i+'<br>')
}


// Task4
let s=90
let p=5

while(s>=0+p)
{
s-=p
res=s
document.write(res+'<br>')}



// Task5
let h=20
let l=1
let m=0
while(k<h)
{
l*=2
m++
document.write(l+'<br>')
}

// Task6
let a=2
for(let i=a;i<=10000;i*=a){
document.write(i-1+'<br>')  
}

// Task7
let z=-166
while(z<100){
    if(z>-100&&z<100){
        console.log(z) 
    }
    z*=2
    z+=200
}

// Task8
 let number=Number(prompt("number"))
let power=Number(prompt("power"))

let resultPowering=1

function showPow(number,power){

  if (power == 1||power==0) {
        return number;
      } else if(power>0){
        return number * showPow(number, power - 1);
      }
      else{
        return number / showPow(number, Math.abs(power) -1); 
      }}
document.write(showPow(number,power))
