import React, {Component}from 'react';
import Posts from './components/Posts/Posts.js'
import './App.css';
import axios from 'axios'
import Header from './components/header/header'
import Inputs from './components/inputs/Input.js'
import View from './View.js';




class App extends Component{
  constructor() {
    super()
    this.state = {
      arrOfPosts: [],
      showPosts: true
    }
  }

  componentDidMount(){
 
    axios
    .get('/api/posts')
    .then(res => {
      this.setState({arrOfPosts: res.data})
      
    })
    .catch(err=> {console.log("server err", err) 
  })}

  handleChange = (e) => {
    let{name, value} = e.target
    this.setState({[name]: value})
  }

 

  createPost = (titleInput, imageInput, contentInput) => {
    axios
     .post('/api/posts', {
       title: titleInput,
       image: imageInput,
       content: contentInput
     })
     .then( res => { 
        this.setState({arrOfPosts: res.data})
       
       
     })
     .catch(err => console.log('err', err))
     
  }

  deletePost = id => {
   
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

  searchPosts = (title ,content) => {
    
    axios
      .get(`/api/search?title=${title}`)
      .then(data => {
        this.setState({arrOfPosts: data.data})
      })
      .catch(err => console.log('not able to search', err))
      console.log(this.state.arrOfPosts);

      
  }


  navigate = () => {
      this.setState({
        showPosts: !this.state.showPosts
      })
    } 

    changeBtnName= () => {
      if(this.state.showPosts){
        return 'Admin'
      }else{
        return 'User'
      }
    }

    setScrollbarTop(){
      window.scrollTo(0,0)
  }

  
      

  render() {
    return (
    <div className="App">
       
        <Header
        navigate={this.navigate}
        changeBtnName={this.changeBtnName}
        
        />
        
        <div className="main-container">
          {this.state.showPosts ? 
            <View
            handleChange = {this.handleChange}
            setScrollbarTop = {this.setScrollbarTop}
            />
           : 
        <div>
            <Inputs
          createPost = {this.createPost}  
          searchPosts= {this.searchPosts}
          resetInputs= {this.resetInputs}
         
        />
        
        <div className='posts-box'>
       
        <div className='posts'>
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
        
        </div> 
          }
          </div> 
          }  
        </div>
          
      
        
        
        

     
        
        <div className='posts-box'>
       
        <div className='posts'>
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
        
        </div>    
        
    </div>
    );
  } 
}

export default App;
