import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SongSort from './Song';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <div className="title">
      <h1>Song Merge Sort</h1>
      <ul>
        <li><a class="active" href="#login">Login</a></li>
        <li><a href="#Creat account">Create</a></li>
      </ul>
    </div>
    <SongSort/>
  </div>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
