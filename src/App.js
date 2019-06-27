import React, {Component}from 'react';
import Posts from './components/Posts/Posts.js'
import './App.css';
import axios from 'axios'
import Header from './components/header/header'
import Inputs from './components/inputs/Input.js'

class App extends Component{
  constructor() {
    super()
    this.state = {
      arrOfPosts: []
    }
  }

  componentDidMount(){
    console.log('hit');
    axios
    .get('/api/posts')
    .then(res => {
      this.setState({arrOfPosts: res.data})
      console.log(this.state.arrOfPosts);
    })
    .catch(err=> {console.log("server err", err) 
  })}

  handleChange = (e) => {
    let{name, value} = e.target
    this.setState({[name]: value})
  }

  createPost = (titleInput, imageInput, contentInput) => {
    // console.log('hit2');
    axios
     .post('/api/posts', {
       title: titleInput,
       image: imageInput,
       content: contentInput
     })
     .then( res => { 
        this.setState({arrOfPosts: res.data})
        // console.log(this.state.arrOfPosts);
     })
     .catch(err => console.log('err', err))
  }

  deletePost = id => {
    // console.log('hit');
  axios 
    .delete(`/api/posts/${id}`)
    .then( res => {
      this.setState({arrOfPosts: res.data})
    })
    .catch(err => console.log('not able to delete', err))
  }

  editPost = (title,image,content,id) => {
    axios
      .put(`/api/posts/${id}?newTitle=${title}&newImage=${image}&newContent=${content}`)
      .then(res =>{
        this.setState({arrOfPosts: res.data})
      })
      .catch(err => console.log('not able to delete', err))
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Inputs
          createPost = {this.createPost}
          
        />
        {this.state.arrOfPosts.map( post => {
          return(
            <Posts 
              key= {post.id}
              id = {post.id}
              post = {post}
              deletePost = {this.deletePost}
              editPost = {this.editPost}
            
            />
          );
        })
        }
        
      </div>
    );
  } 
}

export default App;
