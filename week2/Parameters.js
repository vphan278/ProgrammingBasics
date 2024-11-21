function greetSomeone(person){
    if(person == "Martin"){
        console.log("Hello, partner!");
    }
    else{
        console.log("Greetings, Earthling!");
    }
}

greetSomeone("Martin");
greetSomeone("Vinh");

function goodDay(person){
    if(person == "Vinh"){
        console.log("Good Day", person)
        console.log("It is in the afternoon that we greeted.")
    }
    else{
        console.log("I'm coming for you Dooku", person);
    }
}

goodDay("Vinh");
goodDay("Count Dooku");

var arr = [2,4,6,8,10];
for (var i = 0; i < arr.length; i = i + 1) {        
    console.log(i);             // prints the index       
    console.log(arr[i]);        // prints the array value at that index
}

console.log(arr);


