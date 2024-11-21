var timeOfday =15;

if(timeOfday <10){
    console.log("I get a latte");
}
//else if(timeOfday >=10 && timeOfday <=16){
//    console.log("I get a hot chocolate");
//}

else if(timeOfday >=15 && timeOfday <=18){
    if(timeOfday %2 ==0){
        console.log("I want to have ice cream");
    }
    else{
        console.log("I want hot chocolate instead.")
    }
}


else{
    console.log("I don't want anything other than sleep");
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  const rndInt = randomIntFromInterval(15, 18);
  console.log(rndInt);

else if(rndInt %2 ==0){
    console.log("I want ice cream, cookies, or candy")
}
else{
    console.log("I want hot chocolate, tea, or coke");
}
