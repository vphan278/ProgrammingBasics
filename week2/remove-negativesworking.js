// Debug the following code that removes negative values from an array

function removeNegatives(arr) {
    for(var i=0; i<=arr.length; i++) {
        if(arr[i] <= 0) {
            arr[i] = arr.pop();
            i--;
        }
    }
    return arr;
}

var result = removeNegatives([3, 7, -23, 0, 2.5, -4]);
console.log(result);



//the code won't run in VS studio after I debugged it. But, it runs in JS bin.