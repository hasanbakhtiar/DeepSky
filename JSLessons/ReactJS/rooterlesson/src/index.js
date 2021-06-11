import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/scss/bootstrap.scss'
import './sass/style.scss'
import { BrowserRouter, Route, Link } from 'react-router-dom'



const Nav = () => (
    <>
        <nav >
                    <li >
                        <Link exact to="/" activeClassName="active" className="home">Home </Link>
                    </li>
                    <li>
                        <Link to="/about" activeClassName="active">About </Link>
                    </li>
                    <li >
                        <Link to="/contact" activeClassName="active">Contact </Link>
                    </li>
        </nav>
    </>
)




const HomePage = () => (
    <>
        <div>HomePage</div>

    </>
)

const ContactPage = () => (
    <>
        <div>ContactPage</div>
    </>
)

const AboutPage = () => (
    <>
      <div>AboutPage</div>
    </>
)


const app =  (
    <BrowserRouter>
        <Nav />
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/contact" component={ContactPage}></Route>
        <Route path="/about" component={AboutPage}></Route>


    </BrowserRouter>
)






ReactDOM.render(app , document.getElementById('root'));