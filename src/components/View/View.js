import React, { useState, useEffect } from 'react';
import './View.css';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import AdminView from '../AdminView/AdminView.js';
import ReaderView from '../ReaderView/ReaderView.js';

const View = props => {
  const [hState, changeH] = useState({ postArr: [], searchTerm: '' });
  useEffect(() => {
    axios
      .get('/api/posts')
      .then(res => {
        changeH({ ...hState, postArr: [...res.data] });
      })
      .catch(err => alert('could not find posts'));
  }, []);
  const filteredArr = hState.postArr.filter(el =>
    el.title.toLowerCase().includes(hState.searchTerm.toLowerCase())
  );
  return (
    <div>
      <input
        name="searchTerm"
        value={hState.searchTerm}
        onChange={e => changeH({ ...hState, searchTerm: e.target.value })}
        className="search-box"
        placeholder="Search"
      ></input>
      <div className="top-stickybox">
        <button onClick={() => window.scrollTo(0, 0)} className="top">
          Top
        </button>
      </div>
      <Switch>
        <Route path="/admin" component={() => <AdminView filteredArr={filteredArr} />}/>
        <ReaderView filteredArr={filteredArr} />
      </Switch>
    </div>
  );
};

export default View;
