num = 0;
speed= 6;

for (var num = 0; num <= 6; num+=2) {
    if(speed>=5.5)
    console.log("Candy is given at ", num, "miles and speed is faster than 5.5 miles");
}


for(var num = 10; num>2; num--){
    console.log("num is currently ", num);
} 

var x =[4,5,8,2,9,10,3,6]

for( var i = 0; i < x.length; i++){
   console.log("The current index is "+ structuredClone(i));
   console.log("The value at the index is "+ structuredClone(i))
}

var x = [4,5,7,3,8,2,6]
console.log("The length is " + (x.length));
for( var i = x.length-1; i>=0; i--){
    //console.log(x[i]);
    console.log(x);
}

var teams = ["Real Madrid", "Man U" , "Man City", "Liverpool"]
for( var t = 0; t<teams.length; t++){
    console.log(teams[t]);
    console.log(teams);
}

var counter = 1;
if(counter ==1){
    console.log("hello");
}

var counter = 1;
if(counter ==1){
    console.log("Hello");
}
else if(counter ==2){
    console.log("world");
}

var counter =2;
if(counter <10){
    console.log("less than 10")
}
else{
    console.log("greater than or equal to 10");
}

var counter =1;
if(counter ==5){
    console.log("coding");
}
else{
    console.log("dojo");
}

var x =[2,4,5];
var counter = 0;
if(x[counter] < 5){
    console.log("coding")
}
else{
    console.log("dojo")
}

var x =[2,4,5];
var counter = 2;
if(x[counter] > 10){
    console.log("coding")
}
else{
    console.log("dojo");
}

var x =[2,4,5];
var counter =0;
if(x[counter] > 0){
    console.log("coding");
    counter= counter +1;
}
console.log(x[counter]);

var x =[2,4,5];
var counter = 0;
if(x[counter] > 0){
    console.log("coding");
    counter = counter + 1;
}
if(x[counter] > 0){
    console.log("coding");
    counter = counter +1;
}
if(x[counter] > 0){
    console.log("coding");
    counter = counter +1;
}
console.log(x);
console.log(counter);

var x =1;
for(var i =0; i<3; i++){
    x = x +1;
}
console.log(x);

var x =1;
for(var i =0; i<3; i = i +2){
    x =x +1;
}
console.log(x);
console.log(i);

var x =[];
for(var i = 0; i <10; i++){
    x.push(i*2);
}
console.log(x);

for(var i =20; i!=10; i--){
    console.log(i);
}

var x = 0;
for(var i = 1; i <4; i++){
    x = x +i;
    console.log(x);
    console.log(i);
}
//1,1,3,2,6,3

function toggleFlashlight(flashlight) { // line 1
    if (flashlight.isOn == true){    // line 2
        flashlight.isOn = false;        // line 3
    } else {                            // line 4
        flashlight.isOn = true;         // line 5
    }                                   // line 6
}                                       // line 7


