//Array 1
var produceList = ["apples", "oranges", "jalapenos"];



//Array 2
var accountBalances = [5000, 10, 2500];
//Array 3
var auntsContact = ["Jayne", "Smithe", "123 Main Street", "Springfield", "MO", 12345];
console.log(auntsContact);

var my_books = ["Book1", "Book2", "Book3", 555]
console.log(my_books);
console.log(my_books[3]);
my_books.pop();
console.log(my_books);
my_books.push(100000);
console.log(my_books);
console.log(my_books.length);


var userFirstName = "Dwight";
var userLastName = "Shute";
var userEmail = "DS@email.com";

//Array
var user =["Dwight", "Shute", "DS@email.com"];
console.log(userFirstName);
console.log(user);
user[1] = "Shoess";
console.log(user);


//Code Snippet 1
var contactInfo = ["Paula", "Smith", "1234 Main Street", "St. Louis", "MO", 12345];
console.log(contactInfo);
//// T-diagram
// contactInfo || Paula, Smith, 1234 Main Street, St. Louis, MO, 12345

//Code Snippet 2
var produce = ["apples", "oranges"];
var frozen = ["broccoli", "ice cream"];
frozen.push("hashbrowns");
console.log(frozen);
/////T-Diagram
///produce ||apples, oranges
///frozen  ||broccoli, ice cream
// frozen  || hasbrowns

//Code Snippet 3
var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zorro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

//T-Diagram
//movieLibrary || ["Bambi", "E.T.", "Toy Story"]
//movieLibrary || ["Bambi", "E.T.", "Toy Story", "Zorro"]
//movieLibrary || ["Bambi", "Beetlejuice", "Toy Story", "Zorro"]

//Test Comment