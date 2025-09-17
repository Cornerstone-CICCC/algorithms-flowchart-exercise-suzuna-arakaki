//exercise4.js
let num1 = 3;
let num2 = 8;
let num3 = 10;

if (num1 + num2 > num3){
    if(num2 + num3 > num1){
        if(num1 + num3 > num2){
            console.log("Yes possible");
        }
    }
}else{
    console.log("Not possible");
}