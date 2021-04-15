console.log();

// const infoArray = ['table','book',5,true];
// document.write(infoArray);

// const infoArray = new Array('table','book',5,true);
// document.write(infoArray);

// ------------------------------------------------------------------------------------


// const infoArray = ['table','book',5,true];
// document.write(infoArray[0]+"<br>");
// document.write(infoArray[1]+"<br>");
// document.write(infoArray[2]+"<br>");
// document.write(infoArray[3]+"<br>");
// document.write(infoArray);


// ------------------------------------------------------------------------------------
// const schoolThing =  ['pen','table','desk']; uniThing = ['notebook','phone','copybook'];

// document.write(schoolThing+"<br>");
// document.write(uniThing+"<br>");
// ------------------------------------------------------------------------------------

// var infoArray = [];
// infoArray[0] = "table";
// infoArray[1] = "book";
// infoArray[2] = 5;
// infoArray[3] = true;

// document.write(infoArray);


// var infoArray = ['pen','copybook','desk'];
// infoArray[1] = "table";


// document.write(infoArray);

// ------------------------------------------------------------------------------------


// var infoArray = [];
// infoArray["thing1"] = "table";
// infoArray["esya2"] = "book";
// infoArray[2] = 5;
// infoArray[3] = true;

// document.write(infoArray["thing1"]+"<br>");
// document.write(infoArray["esya2"]);


// ------------------------------------------------------------------------------------

// const infoArray = ['pen',["tv",["rain","sun"],"soft",["snow","cloud","storm"],"door"],'copybook','desk'];
// document.write(infoArray[0]+"<br>");
// document.write(infoArray[1][3][0]+"<br>");


// ------------------------------------------------------------------------------------
// Object

const car ={
    model:"Toyota",
    year:"2021",
    doFunc: function(event){
        document.write("Auto"+event);
    },
    stock: true

}

document.write(car.model+"<br>");
document.write(car.year+"<br>");
document.write(car.doFunc(" Drive")+"<br>");
document.write(car.stock+"<br>");