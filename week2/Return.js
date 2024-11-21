function hello(){
    console.log("hello");
}
hello();
console.log("Dojo");

function hello(){
    console.log("Hello");
    return 15;
}
console.log(hello());

var result = hello();
console.log("result is:",result);


//Code Snippet 3
function numPlus(num){
    console.log("num is ", num);
    return num + 15;
}
var result = numPlus(3);
console.log("result ", result);

//Code Snippet 4
var num =15;
console.log(num);
function logandReturn(num){
    console.log(num);
    return num;
}
//var result = logandReturn(10);
console.log(result);
console.log(num); //15

//Code Snippet 5
var num =15;
console.log(num);
function timesTwo(num){
    console.log(num);
    return num * 2;
}
var result = timesTwo(20);
console.log(result);


//Code Snippet 6
function timesTwoAgain(num){
    console.log("num is", num);
    var y = num *2;
    return y;
}
timesTwoAgain(3);
var result = timesTwoAgain(4);
console.log(result);

//Code Snippet 7
function sumNums(num1, num2){
    return num1 + num2;
}
console.log(sumNums(2,3));

//Code Snippet 8
function printSumNums(num1, num2){
    console.log(num1);
    return num1 + num2;
}
console.log(printSumNums(3,3))

//Code Snippet 9
function sumNums(num1, num2){
    var sum = num1 + num2;
    console.log("sum is", sum);
    return sum
}
var result = sumNums(4,3) + sumNums(3,5);
console.log("result is ", result);

//Code Snippet 10
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);

var x = [1,3,5,7];

function abc(){
    var x =[0,1,2,3];
    for(var i =0; i<x.length; i++){
        x[i] = x[i] + 2;
    }
    return x;
}

abc();
console.log(x); //[1,3,5,7]

y =abc();
console.log(y); //[2,3,4,5]

function abc(num){
    var arr = [ ];
    for(var i = 0; i<num; i++){
        arr.push(i)
    }
    return arr;
}

dojo = abc(5);
console.log(dojo); //[0,1,2,3,4]

function abc(num) {
    var arr = [ ];
    for(var i =0; i<num; i++){
        if(i%2==0){
            arr.push(i);
        }
    }
    return arr;
}

dojo = abc(5);
console.log(dojo);


function abc(arr){
    for(var i =0; i<arr.length; i++){
        if(arr[i]< 0){
            arr[i]= "dojo";
        }
    }
    return arr;
}
output = abc([-3,0,3,-5]);
console.log(output);

function abc(number){
    var sum = 0;
    for( var i =0; i<=number; i++){
        sum = sum +i;
    }
    console.log(sum);
    return sum +10;
}
output = abc(2);
console.log(output); //3,13

function abc(number){
    var sum = 0;
    for( var i =0; i<=number; i++){
        sum = sum +i;
    }
    console.log(sum);
    return sum +10;
}
output = abc(2) + abc(3); //3 + 6 =13 +16 =29
console.log(output);

function abc(number){
    var sum = 0;
    for( var i =0; i<=number; i++){
        sum = sum +i;
    }
    console.log(sum);
    return sum +10;
}
output = abc(2) + abc(3); //3 + 6 =13 +16 =29
console.log(output);

function looping(x,y){
    for(var i =0; i<x; i++){
        for(var j =0; j<y; j++){
            console.log(i*j);
        }
    }
    return x*y;
}
z = looping(2,3);
console.log(z);