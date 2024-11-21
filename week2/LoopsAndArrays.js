//Challenge 1
var arr =["Up", "You", "Give","To", "Going", "Never"];
for(var i = arr.length; i>=0; i--){
    console.log(arr[i]);
}

//T-Diagram
//arr || ["Up", "You", "Give","To", "Going", "Never"];


//Challenge 2
var arr = [1,2,3,4,5,6,7,8,9,10];
var sum =0;
for(var i =2; i<arr.length; i=i+2){
    sum= sum + arr[i];
    console.log(arr[i]);
    console.log(sum);
}
console.log(arr);

//T-Diagram
//arr || [1,2,3,4,5,6,7,8,9,10]
//sum || 0

//Challenge 3
var arr = [8,2,0,6,12,4,3];
for(var i =0; i<arr.length; i++){
    if(arr[i]>=6){
        console.log(true)
        console.log(arr[i]);
    }
}
//T-Diagram
//arr || [8,2,0,6,12,4,3]



/*var arr = [2,4,6,8,10];
for(var i=0; i<arr.length; i++){
    console.log(i);
    console.log(arr[i]);
}
console.log(arr);

*/