// ES5
// const infoData = function() {
//     document.write("Hello OOP");
// }

// const infoObj = new infoData();
// console.log(infoObj);




// ES6
// const infoData = (b) =>{
// document.write(b);
// }
// const infoObj = new infoData("Hello");
// console.log(infoObj);


// Class 
// class infoData{

// }

// const myData = new infoData();
// console.log(myData);



class infoData{
        constructor(name,year){
            this.addName = name;
            this.addAge = year;
        }

    sayHi(){
        return `My name is ${this.addName}.Im ${this.addAge}`;
    }
}

class infoPush extends infoData{

    constructor(name,year,addSubject){
        super(name,year);
        this.subject = addSubject;
    }

        learn(){
            return `${this.addName} learns ${this.subject}.Im ${this.addAge}`; 
            
        }
}

const myData = new infoPush("Reshad",20, "React");
console.log(myData.learn());