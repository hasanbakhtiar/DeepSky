const root = document.querySelector("#root");


var infoText = {
    item:"Item Test",
    model: "Samsung S10+"
}

class InfoData extends React.Component{
    render(){
        return(
            <div>
                <h1>Phone Models</h1>
                <p>{this.props.model}</p>
            </div>
        );
    }
}

class List extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <Item item={infoText.item}/>
                </ul>
            </div>
        );
    }
}

class Item extends React.Component{
    render(){
        return(
            <div>
                <li>{this.props.item}</li>
            </div>
        );
    }
}


class Main extends React.Component{
    render(){
        return(
            <div>
                <InfoData  model={infoText.model}/>
                <List />
            </div>
        );
    }
}

const template = 
<div>
<Main />
</div>
;

ReactDOM.render(template,root);