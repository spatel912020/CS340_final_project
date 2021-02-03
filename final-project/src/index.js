import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SongSort from './Song';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <div className="title">
      <h1>Song Merge Sort</h1>
      <div className= "user_account">
        <ul>
          <li><a class="active" href="#login">Login</a></li>
          <li><a href="#Creat account">Create</a></li>
        </ul>
      </div>
      <div className= "mode_switch">
        <ul>
          <li><a class="active" href="#Spotify">Spotify</a></li>
          <li><a href="#Youtube">Youtube</a></li>
        </ul>
      </div>
    </div>
    <SongSort/>
  </div>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
