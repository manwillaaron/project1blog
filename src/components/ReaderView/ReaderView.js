import React from 'react';
import './ReaderView.css';
import Posts from '../Posts/Posts.js';

const ReaderView = ({ filteredArr }) => {
  return (
    <div className="reader-view">
      <div className="posts">
        {filteredArr.map(post => (
         
            
            <Posts key={post.id} id={post.id} post={post} />
          
        ))}
      </div>
    </div>
  );
};

export default ReaderView;
