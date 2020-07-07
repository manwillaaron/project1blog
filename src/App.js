import React from "react";
import "./App.css";
import Header  from './components/header/Header'
import Routes from './Routes'


const App=()=>{
    return (
      <div className="App">
        <Header/>
        <Routes/>
      </div>
    );
  }


export default App;
