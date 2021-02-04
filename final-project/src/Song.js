import React, { Component } from 'react';
import './Song.css'

const song_list = {
    songs : [
      { name: "Till I Collapse", artist: "Eminem", album: "The Eminem Show", img_src: "https://i.ytimg.com/vi/Obim8BYGnOE/maxresdefault.jpg"},
      { name: "100 Bad Days", artist: "AJR", album: "Neotheater", img_src: "https://i2.wp.com/thewestwordonline.com/wp-content/uploads/2019/05/FA4DF1CF-D5A1-4840-9E57-9DD614BD8DD7.jpeg?fit=800%2C450"},
      { name: "We Are Never Ever Getting Back Together", artist: "Taylor Swift", album: "Red", img_src: "https://images-na.ssl-images-amazon.com/images/I/61b1nEYZnnL._AC_SX522_.jpg"}
    ]
  }

class SongSort extends Component {
  state = {
    isSpotify: true
  };
  toggleToYoutube = () => {
    document.body.style.setProperty('background-color', 'rgb(82, 29, 29)');
    document.getElementsByClassName('left_song')[0].getElementsByTagName('h1')[0].style.setProperty('color', 'black');
    document.getElementsByClassName('left_song')[0].getElementsByTagName('h3')[0].style.setProperty('color', 'black');
    document.getElementsByClassName('right_song')[0].getElementsByTagName('h1')[0].style.setProperty('color', 'black');
    document.getElementsByClassName('right_song')[0].getElementsByTagName('h3')[0].style.setProperty('color', 'black');
    this.setState({isSpotify: false})
    return false
  }
  toggleToSpotify = () => {
    document.body.style.setProperty('background-color', 'rgb(36, 59, 39)');
    document.getElementsByClassName('left_song')[0].getElementsByTagName('h1')[0].style.setProperty('color', 'color: rgb(2, 12, 56);');
    document.getElementsByClassName('left_song')[0].getElementsByTagName('h3')[0].style.setProperty('color', 'color: rgb(2, 12, 56);');
    document.getElementsByClassName('right_song')[0].getElementsByTagName('h1')[0].style.setProperty('color', 'color: rgb(2, 12, 56);');
    document.getElementsByClassName('right_song')[0].getElementsByTagName('h3')[0].style.setProperty('color', 'color: rgb(2, 12, 56);');
    this.setState({isSpotify: true})
    return false
  }

  render(){
    return (
      <div>
        <div className= "mode_switch">
          <ul>
            <li><a onClick={this.toggleToSpotify} id="Spotify" href="#">Spotify</a></li>
            <li><a onClick={this.toggleToYoutube} id="Youtube" href="#">Youtube</a></li>
          </ul>
        </div>
        <div className="grid-container">
          <button className="song_button">
            <div className="left_song">
              <img className= "left_song_img" src={song_list.songs[0].img_src} alt={song_list.songs[0].name} />
              <h1>{song_list.songs[0].name}</h1>
              <h3>{song_list.songs[0].artist}</h3>
            </div>
          </button>
          <button className="song_button">
            <div className="right_song">
              <img className= "right_song_img" src={song_list.songs[1].img_src} alt={song_list.songs[1].name}/>
              <h1>{song_list.songs[1].name}</h1>
              <h3>{song_list.songs[1].artist}</h3>
            </div>
          </button>
        </div>
      </div>
    );
  }
};

export default SongSort;
