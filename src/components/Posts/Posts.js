import React, {Component} from 'react';

import './Posts.css';


class posts extends Component{
  constructor(props) {
    super()
    this.state = {
      title: props.post.title,
      image: props.post.image,
      content: props.post.content,
      editing: false

    }
  }

  flipEditing = () => {
    this.setState({editing: !this.state.editing})
  }

  SaveEditing = () => {
   this.flipEditing()
   this.props.editPost(this.state.title,this.state.image,this.state.content,this.props.post.id)
  }

  handleChange = (e) => {
    let{name, value} = e.target
    this.setState({[name]: value})
    console.log({value})
  }


  render() {
    let {post} = this.props
    let {editing,title,image,content} = this.state
    return (
      <div className="App">
        <p>{post.title}</p>
        <img src={post.image} className="post-image" alt= "" />
        <p>{post.content}</p>
        {editing ? (
          <input value={title} onChange={this.handleChange} name="title" />
        ) : (
          null
        )}
         {editing ? (
          <input value={image} onChange={this.handleChange} name="image" />
        ) : (
          null
        )}
         {editing ? (
          <input value={content} onChange={this.handleChange} name="content" />
        ) : (
          null
        )}
        {editing ? (
          <button onClick={this.SaveEditing}>Save Changes</button>
        ) : (
          <button onClick={this.flipEditing}>Edit</button>
        )}
        <button onClick = {() => this.props.deletePost(this.props.id)}>delete</button>
      </div>
    );
  } 
}

export default posts;