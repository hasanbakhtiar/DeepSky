

// var infoData = "ferid"

// const a = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, soluta!"; 
// var template = 

//     <h1 style={{
//         color:"red"
//     }}>
//         {infoData}</h1>
   

// ReactDOM.render(template,document.getElementById("root"));


const root = document.getElementById('root');
let number = 0;
const btnAddClassName = "btnRed";
const btnClearClassName = "btnGreen";

const addOne =()=>{
    number ++;
    renderApp();
}

const clearOne =()=>{
    number --;
    renderApp();
}


var renderApp = () =>{
    var template = 
    <div style={{
        "width":"100%",
        "height":"100vh",
        "display": "flex",
        "flex-direction":"column"

    }}>
        <h1 style={{
            "color":"red",
            "font-size":"40px"
        }}>Number: {number}</h1>
        <button className={btnAddClassName} onClick={addOne}>+1</button>
        <button className={btnClearClassName} onClick={clearOne}>-1</button>
    </div>
ReactDOM.render(template,root);

}


renderApp();