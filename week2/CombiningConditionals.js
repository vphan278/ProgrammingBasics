if(today=="Friday" && moodLevel >= 100){
    goDancing();
}

if(raining ==true || distanceMiles >3){
    CallUber();
}

if(!snowing){
    wearShorts();
}

weather = !raining;
distanceToStadium = 1;

if(weather !="rainy"){
    if(distanceToStadium < 3){
        console.log("I think I'll walk to the game");
    }
    else{
        console.log("It's a bit far, so maybe I'll fly.");
    }
    else{
        console.log("Hey, I'm a duck! A little water is OK");
    }
}




/////////////////////////////////////////////////
var height = 42;
age = 12;
if( height > 42 || age == 10){
    console.log("You are tall enough, get on that ride; also you are old enough")
}
else if(height < 42 || age < 10){
    console.log("You are not tall enough, maybe next year; you are also not old enough")
}
else if(height == 42){
    console.log("You barely made it, get on the ride");
}