const root = document.querySelector("#root");

class Booklist extends React.Component{
render(){
    var bookInfo = {
        author: "George Orwel",
        name: "1984",
        page:200
    
    } 
    return(
        
        <div>
        <h1>Book List</h1>
        <p>{bookInfo.author}</p>
        <p>{bookInfo.name}</p>
        <p>{bookInfo.page}</p>
    </div>
    )
}
}

const publicTemp = <div>
<Booklist />
<Booklist />
<Booklist />
<Booklist />
<Booklist />
</div>


ReactDOM.render(publicTemp,root)