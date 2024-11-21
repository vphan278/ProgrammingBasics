var number = "";
var x = 5;

while(x<10){
    number += x;
    x++ 
}
console.log(number); //"56789"
/////////////////////////////////////////////////////

var count = 1;

while(count<5){
    console.log("Dojo");
    count++;
}
//Dojo,Dojo,Dojo,Dojo
//////////////////////////////////////////////////

var x =1;
var y =48;

while(x<100){
    if(x==y){
        break;
    }
    x++;
}
console.log(x);//48
//////////////////////////////////////////////////////

var x = 7;
var message = "boom";

while(x>message.length){
    console.log(message + x);
    x--;
}
//boom7,boom6,boom5

var num =0;
while (num <=5){
    console.log(num);
    num++;
}
//0,1,2,3,4,5

var start = 1;
var end = 9;
while(start<=end){
    console.log(start +" :" + end);
    start++;
    end--;
}
////////1:9, 2:8, 3:7, 4:6, 5:5

var teams = ["Man U", "Real Madrid", "Barcelona", "Man City", "Liverpool"]
for( i=0; i< teams.length; i++){
    console.log(teams[i]);
}

var i =0;
while(i <teams.length){
    console.log(teams[i]);
    i++;
    
}