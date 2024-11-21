var className = "ProgrammingBasics";

if(className == "ProgrammingBasics"){
    console.log("Yes, this is our class");
}
else{
    console.log("It is not our class");
}

var x = 25;
if(x>50){
    console.log("bigger than 50");
}
else{
    console.log("smaller than or equal to 50");
}

///////////////////////////////////////////////////////////////
var x =75;
if(x > 100){
    console.log("bigger than 100");
}
else if(x >50){
    console.log("bigger than 50");
}
else if(x >25){
    console.log("bigger than 25");
}
else{
    console.log("small number");
}


////////////////////////////////////////

var num1 = 20;
var num2 = 5;

if(num1 < num2){
    num2 = num2 * num1;
}
else{
    num1 = num1 /num2;
    if(num1 < num2){
        num1 = num1 * 2;
    }

    else if(num1 == num2){
        num2 = num1 * num2;
    }
    else{
        num2 = num2 * 2;
    }
}

console.log(num1)
//First  | Second
//num1   | 20
//num2   | 5
//num1   | 4
//num1   | 8

console.log(num2); //output 5