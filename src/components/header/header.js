import React, {Component} from 'react';
import  './header.css';

export default class Header extends Component {
render(){
    return (
        <header className= 'header'>
            <img alt = "" className = 'logo' src = 'https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' >
             </img>
          <div className = 'title-box'>
            <p className= 'main-title' >CODING IS COOL</p>
          </div>  
        </header>
    )
}
}