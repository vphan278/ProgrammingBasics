//print 1 to 255
function get_array(){
    var arr = [ ];
    for(i =1; i<256; i++){
    arr.push(i);
    }
    return arr;
}

y=get_array();
console.log(y);

//Get sum of all even numbers to 1000
function sum_even_numbers(){
    var sum = 0;
    for(i = 1; i<=1000; i++){
        if(i%2==0){
            sum = sum +i;
        }
    }
    return sum;
}
console.log(sum_even_numbers());

//Sum of all odd numbers to 5000
function sum_odd_numbers(){
    var sum = 0;
    for(i =1; i<=5000; i++){
        if(i%2==1){
            sum = sum +i;
        }
    }
    return sum;
}
console.log(sum_odd_numbers());

//sum with an array
function iterArr(arr){
    var sum = 0;
    for( i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(iterArr([1,2,5])); //8

//Find Max in an array
function findMax(arr){
    var max = 0;
    for(i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([-3,3,5,34]));//43

//Find Average of array
function findAvg(arr){
    var sum = 0;
    for(i=0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    return sum/arr.length
}
console.log(findAvg([1,3,5,7,10]));//5.2

//Array of odds from 1 to 50
function OddNumbers(){
   var arr = []
   for(i = 0; i<=50; i++){
    if(i%2==1){
        arr.push(i);
    }
   }
   return arr;
}
console.log(OddNumbers());

//Greater than Y
function greaterY(arr, Y){
    var count =0;
    arr.forEach(function(elem){
        if(elem> Y){
            count++;
        }
    });
    return count;
}
console.log(greaterY([1,3,5,7], 3)); //2

