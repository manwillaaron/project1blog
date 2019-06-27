import React, {Component} from 'react';
import  './header.css';

export default class Header extends Component {
render(){
    return (
        <header>
            <img alt = "" className = 'logo' src = 'https://images.unsplash.com/photo-1559656428-6f31733e0937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80' >
             </img>
            <p>BLOG NAME</p>
        </header>
    )
}
}