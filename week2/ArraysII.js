var myArr = [];
console.log(myArr.length); // -> "0"

myArr[0] = 42; // myArr is now [42], length is now 1
console.log(myArr[0]); // -> 42

myArr[1] = "hi"; // myArr is now [42, "hi"], length is now 2
myArr[2] = true; // myArr is now [42, "hi", true], length is now 3

result = myArr;
console.log(result);


myArr[myArr.length + 1] = 2; // myArr is now [42, "hi", true, undefined, 2]
console.log(result);
console.log(myArr.length); // -> 5

myArr[0] = 101;
console.log(result); // [ 101, 'hi', true, <1 empty item>, 2 ]

myArr.pop(); // myArr is now [101, "hi", true, "MG"], length is now 4
myArr.push("TE"); // myArr is now [101, "hi", true, "MG", "TE"], length is now 5
console.log(result); //[ 101, 'hi', true, <1 empty item>, 'TE' ]
