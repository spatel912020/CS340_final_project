import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Divider } from '@material-ui/core';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default function NewPlaylistDialog(props) {
  const [open, setOpen] = useState(false);
  const [displayModal, setModalDisplay] = useState(false);
  const [spotifyAuthenticated, setSpotifyAuthenticated] = useState(false);
  const [spotifyPlaylist, setSpotifyPlaylist] = useState([]);
  var [possibleImportPlaylist, setPossibleImportPlaylist] = useState([]);

  const authenticateSpotify = () => {
    fetch("http://127.0.0.1:8000/spotify/is-authenticated")
      .then((response) => response.json())
      .then((data) => {
        setSpotifyAuthenticated(data.status);
        if (!data.status) {
          fetch("http://127.0.0.1:8000/spotify/get-auth-url")
            .then((response) => response.json())
            .then((data) => {
              window.location.replace(data.url);
              fetch("/spotify/get-playlists")
                .then((response) => {
                  if (!response.ok) {
                    return {};
                  } else {
                  return response.json();
                }
                }).then((data) => {
                  setSpotifyPlaylist(data);
                  console.log(data);
              });
            });
        }
        else{
          fetch("/spotify/get-playlists")
            .then((response) => {
              if (!response.ok) {
                return {};
              } else {
                return response.json();
              }
            }).then((data) => {
              setSpotifyPlaylist(data);
            });
        }
      });
  };

  const checkAuthentication = () => {
    fetch("/spotify/is-authenticated")
      .then((response) => response.json())
      .then((data) => {
        setSpotifyAuthenticated(data.status);
        console.log(data.status);
      });
  };

  const importPlaylist = () =>{
    props.setPlaylistNames(possibleImportPlaylist);
  }

  const addPossiblePlaylist = (name) => {
    var tempPlaylist = possibleImportPlaylist
    if(tempPlaylist.includes(name)){
      tempPlaylist.splice(tempPlaylist.indexOf(name), 1);
    }
    else{
      tempPlaylist.push(name);
    }
    setPossibleImportPlaylist(tempPlaylist)
  }

  const handleClickOpen = () => {
    setOpen(true);
    setModalDisplay(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setModalDisplay(false);
  };
  if(!displayModal){
    return (
      <div>
        <Button
          variant="outlined" 
          color="primary" 
          onClick={handleClickOpen}
          style={{minWidth: "15%", 
                  margin: "auto",
                  color: "#222326",
                  backgroundColor: "#1db954",
                }}>Import Playlist</Button>
      </div>
    );
  }
  else{
    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Here's where they'd import a playlist from spotify</DialogTitle>
        <Divider></Divider>
        <Button onClick={() => {authenticateSpotify();}} disabled={spotifyAuthenticated} variant="contained" color="default" startIcon={<ImportExportIcon />}>Link Spotify</Button>
        <List>
          {spotifyPlaylist.map((playlist) => {
            const labelId = `checkbox-list-label-${playlist.name}`;
            return (
              <ListItem key={playlist} role={undefined} dense button onClick={null}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    tabIndex={-1}
                    checked = {props.playlist.includes(playlist.name)}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    onClick = {() => {addPossiblePlaylist(playlist.name);}}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${playlist.name}`} />
              </ListItem>
            );
          })}
        </List>
        <Button onClick={() => {importPlaylist();}} disabled={!spotifyAuthenticated} variant="contained" color="default" startIcon={<ImportExportIcon />}>Import Playlist</Button>
      </Dialog>
    );
  }
}