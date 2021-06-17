import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/style.scss';


const App =(props)=>{

   const [count, setCount] =  useState(props.count);


   useEffect(()=>{
       console.log('count');
       localStorage.setItem('count', count);

   },[count])


return(
    <div className="container">
    <p>Count Number:{count}</p>
    <button onClick={()=> setCount(count + 1)}>+1</button>
    <button onClick={()=> setCount(count - 1)}>-1</button>
</div>
)
}
App.defaultProps ={
    count: 0
}

// class App extends Component {


//     constructor(props) {
//         super(props);
//         console.log("constructor");
//     }

//     componentDidMount(){
//         console.log("componentDidMount");
//     }
    
//     componentDidUpdate(){

//     }

//     render() {
//         return (
//             <div>
//                 <h1>Hello JS</h1>
//             </div>
//         );
//     }
// }

var temp = <App />

ReactDOM.render(temp, document.getElementById('root'));

