import React, {Component}from 'react';
import Posts from './components/Posts/Posts.js'

import axios from 'axios'
import './View.css'



class View extends Component{
  constructor() {
    super()
    this.state = {
      arrOfPostsOnly: [],
      searchInput:''
    }
  }


  searchPosts = (title ) => {
    
    axios
      .get(`/api/search?title=${title}`)
      .then(data => {
        this.setState({arrOfPosts: data.data})
      })
      .catch(err => console.log('not able to search', err))
      

      
  }

  getAllPosts = () => {
 
    axios
    .get('/api/posts')
    .then(res => {
      this.setState({arrOfPostsOnly: res.data})
    })
    .catch(err=> {console.log("server err", err) 
  })}


 

 




  searchPosts = (title,content) => {
    
    axios
      .get(`/api/search?title=${title}`)
      .then(data => {
        this.setState({arrOfPostsOnly: data.data})
      })
      .catch(err => console.log('not able to search', err))
      console.log(this.state.arrOfPostsOnly);
  }

  resetInputs =() => { 
    
    this.setState({titleInput: ''})
    this.setState({imageInput: ''})
    this.setState({contentInput: ''})
    this.setState({searchInput: ''})
    
    }

    handleChange = (e) => {
      let{name, value} = e.target
      this.setState({[name]: value})
      console.log(this.state.searchInput)
      
    }

   
  

  render() {
    return (
    <div >
     
      
 

<input name ='searchInput' value= {this.state.searchInput} 
                onChange={this.handleChange}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                      this.searchPosts(this.state.searchInput)} 
                      if (event.key === 'Enter') { 
                          this.resetInputs(this.state.searchInput)
                    }
                  }}
                  
              
                className='search-box'
                placeholder= 'Search'>
                </input>
                <div className='top-stickybox'>
                    <button onClick= {() => this.props.setScrollbarTop()} className='top'>Top</button>
                </div>
        
        
        
       
       
        <div className='posts'>
        {this.state.arrOfPostsOnly.map( post => {
          return(
            <Posts 
              key= {post.id}
              id = {post.id}
              post = {post}
            />
            
          );
        })
        }
       
        
        </div>    
        
    </div>
    );
  } 
}

export default View

