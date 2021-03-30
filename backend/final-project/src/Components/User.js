import './User.css'
import React, { useState } from 'react';
import axios from 'axios';
import SavedPlaylistsAccordion from './SavedPlaylistsAccordion.js'
import NewPlaylistDialog from './NewPlaylistDialog.js'


const User = (props) => {
  const [playlistNames, setPlaylistNames] = useState(props.location.state.playlist);
  const username = props.location.state.username;
  const password = props.location.state.password;

  return (
    <div>
        <div className="main_content_user">
          <h1 className="title">This is where you take control of your listening.</h1>
          <div className="saved_playlists">
            <NewPlaylistDialog playlist={playlistNames} setPlaylist={setPlaylistNames} username={username} password={password}></NewPlaylistDialog>
            {playlistNames.map(function(cur_playlist, index){
                    return <SavedPlaylistsAccordion playlist = {cur_playlist}></SavedPlaylistsAccordion>
                  })}
          </div>
        </div>
    </div>
  );
};

export default User;