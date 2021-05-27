const root = document.querySelector("#root");

class Book extends React.Component{

    constructor(props){
        super(props);

        this.pageConstructor = this.pageConstructor.bind(this);
        this.state = {
            name: "1984",
            author: "George Orwell",
            pageCount: 200
        }
        
}

pageConstructor(){
    this.setState({
        name: "Heyvanistan",
        pageCount: 205 
    })
}


    render(){
        return(
              
           <div style={{"margin-left":"100px"}}>
               <h1>{this.state.author}</h1>
               <p>{this.state.name}</p>
               <p>{this.state.pageCount}</p>
               <button onClick={this.pageConstructor}> Page</button>
           </div> 


        );
    }
}


const template = <Book />;


ReactDOM.render(template,root);
