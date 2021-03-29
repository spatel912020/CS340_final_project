import './User.css'
import React, { useState } from 'react';
import SavedPlaylistsAccordion from './SavedPlaylistsAccordion.js'
import NewPlaylistDialog from './NewPlaylistDialog.js'


const User = (props) => {
  const [playlistNames, setPlaylistNames] = useState([]);
  return (
    <div>
        <div className="main_content_user">
          <h1 className="title">This is where you take control of your listening.</h1>
          <div className="saved_playlists">
            <NewPlaylistDialog playlist={playlistNames} setPlaylistNames={setPlaylistNames}></NewPlaylistDialog>
            {playlistNames.map(function(playlistName, index){
                    return <SavedPlaylistsAccordion playlistName = {playlistName}></SavedPlaylistsAccordion>
                  })}
          </div>
        </div>
    </div>
  );
};

export default User;