import React, {Component}from 'react';
import './inputs.css'

export default class Inputs extends Component {
    constructor() {
        super()
        this.state = {
            titleInput: '',
            imageInput: '',
            contentInput: '',
            
        }
    }
    
    handleChange = (e) => {
        let{name, value} = e.target
        this.setState({[name]: value})
        console.log({value})
      }

      

render(){
    let {titleInput, imageInput, contentInput} = this.state
    return (
        <div>
            <input value={this.state.titleInput} onChange = {this.handleChange} placeholder='Title' name='titleInput'></input>
            <input value = {this.state.imageInput} onChange = {this.handleChange} placeholder = 'Image' name = 'imageInput' ></input>
            <input value = {this.state.contentInput} onChange = {this.handleChange} placeholder = 'Content' name = 'contentInput' ></input>
            <button onClick = {() => this.props.createPost(titleInput, imageInput, contentInput)} >Post</button>
        </div>
    )
}
}