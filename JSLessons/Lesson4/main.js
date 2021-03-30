var valueTime = 19;

var morning         =   "Good Morning";
var afterNoon       =   "Good Afternoon";
var evening         =   "Good Evening";

var morningTime     =   6;
var afterNoonTime   =   13;
var eveningTime     =   19;


if(valueTime == morningTime){
    document.write(morning);
}else if(valueTime == afterNoonTime){
    document.write(afterNoon);
}else if(valueTime == eveningTime){
    document.write(evening);
}else{
    document.write("Not Time");
}

