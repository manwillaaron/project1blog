import React, {Component} from 'react';
import  './header.css';

export default class Header extends Component {
render(){
    return (
      
      <div className= 'sticky-box'>
        <link href="https://fonts.googleapis.com/css?family=Julius+Sans+One&display=swap" rel="stylesheet"></link>
        <header className= 'header'>
            <img alt = "" className = 'logo' src = 'https://images.unsplash.com/photo-1496154704336-6c88a94a019a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' >
             </img>
          <div className = 'title-box'>
            <text className= 'main-title' >CODING IS COOL</text>
          </div>  
        </header>
      </div>    
    )
}
}