import React, { useEffect } from 'react';
import './AdminView.css';
import Posts from '../Posts/Posts';
import Inputs from '../inputs/Inputs';
import axios from 'axios'
import { withRouter } from 'react-router-dom';


const AdminView = ({ filteredArr, history }) => {
  useEffect(() => {
    async function check(){
      try {
        await axios.get('/auth/check');
      } catch {
        history.push('/login');
      }
    };
    check()
  },[]);
  return (
    <div className="admin-view">
      <div className="posts">
        {filteredArr.map(post => (
          <div class="posts-inputs">
            <Inputs/>
            <Posts key={post.id} id={post.id} post={post} isAdmin={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default withRouter(AdminView);
