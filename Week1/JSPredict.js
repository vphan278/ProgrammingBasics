function myBirthYearFunc(){
    console.log("I was born in " + 1980);
}
myBirthYearFunc();//I was born in 1980


function myBirthYearFunc2(birthYearInput){
    console.log("I was born in " + birthYearInput);
}
myBirthYearFunc2(2000); // I was born in 2000

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log("Sum is: " + sum);
}
add(10,20);
//Output
//Summing Numbers!
//num1 is: 10
//num2 is: 20
//
function getFirstNameFromForm(){
    var firstName = "Juan";
    console.log("The firstName variable has been assigned a value.");
    return firstName;
}
getFirstNameFromForm();

function calculateTipAmount(billTotal, tipPercent){
    var tipDue = billTotal * tipPercent;
    console.log("If you see this, this is just after tipDue was calculated");
    return tipDue;
}
calculateTipAmount(140, .20);


