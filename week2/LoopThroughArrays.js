//Print each number in an array
var arr1 = [8,6,7,5,3,0,9];
for( i=0; i<arr1.length; i++){
    console.log(arr1[i]);
}

//Print the sum of array
var arr2 = [4,7,13,13,19,37,-2];
var sum =0;
for(i =0; i<arr2.length; i++){
    sum = sum + arr2[i];
    console.log(sum);
    console.log(arr2[i])
}

//Print number greater than 5
var arr3 = [6,2,12,14,-24,5,0];
for( var i=0; i<arr3.length; i++){
    if(arr3[i]> 5 ){
        console.log(arr3[i]);
    }
    else if(arr3[i] <5){
        console.log("No Dice");
    }
    
}