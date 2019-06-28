import React, {Component}from 'react';
import './inputs.css'

export default class Inputs extends Component {
    constructor() {
        super()
        this.state = {
            titleInput: '',
            imageInput: '',
            contentInput: '',
            searchInput: '',
          
            } 
            
        
       
    }
    
    handleChange = (e) => {
        let{name, value} = e.target
        this.setState({[name]: value})
        console.log(this.state.searchInput)
        
      }

    
      


  resetInputs =() => { 
    // let{titleInput,imageInput,contentInput,searchInput} = this.state
    this.setState({titleInput: ''})
    this.setState({imageInput: ''})
    this.setState({contentInput: ''})
    this.setState({searchInput: ''})
    
    }

        
      

render(){
    let {searchInput, titleInput, imageInput, contentInput} = this.state

    return (
        <div className='inputs-box'>
            <div className = 'title-image'>
                 <textarea className = 'box1' type = 'textarea' value={this.state.titleInput} onChange = {this.handleChange} placeholder='Title' name='titleInput'></textarea>
                 <textarea className = 'box2' value = {this.state.imageInput} onChange = {this.handleChange} placeholder = 'Image' name = 'imageInput' ></textarea>
            </div>
            <div className = 'content-post'>   
                <div className = 'content-input-box'>
                 <textarea className= 'content-input' 
                 value = {this.state.contentInput} 
                 onChange = {this.handleChange} 
                 placeholder = 'Content' 
                 name = 'contentInput' >
                 </textarea>
                </div > 
               
            
             </div> 
        <div className= 'button-container'> 
            <div className = 'post-reset'>
                 <button className='post-button' 
                 onClick = {(event) => {
                     if(event){
                     this.props.createPost(titleInput, imageInput, contentInput)} 
                 
                     if(event){ 
                    this.resetInputs( titleInput, imageInput, contentInput)
                }
                }}
                
                 >Post</button>
                  
                  <button className='reset-button' 
                 onClick= {() => this.resetInputs( titleInput, imageInput, contentInput)}
                 >reset</button>
                  
            </div>
            <div>
            <input name ='searchInput' value= {searchInput} 
                onChange={this.handleChange}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                      this.props.searchPosts(searchInput)} 
                      if (event.key === 'Enter') { 
                          this.resetInputs(searchInput)
                    }
                  }}
              
                className='search-box'
                placeholder= 'Search'>
                </input>
            </div>   
                
                
    </div>
        </div>
         
        
    )
}
}