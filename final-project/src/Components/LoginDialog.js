import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Link } from 'react-router-dom';

export default function LoginDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignUp = () => {
    alert("They tried to signup");
    setOpen(false);
  };

  const handleLogin = () => {
    setOpen(false);
  };

  return (
    <div>
      <ListItem button key={"Create Playlist"} onClick={handleClickOpen}>
        <ListItemText primary={"Login or Create Account"} />
        <AccountBoxIcon />
      </ListItem>

      <Dialog 
        open={open} 
        onClose={handleClose} 
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            backgroundColor: '#b388ff',
          },
        }}
        >
        <DialogTitle id="form-dialog-title">Login or Sign Up</DialogTitle>
        <DialogContent>
          <DialogContentText>
              Thanks for using Merge Sort Music!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            required="true"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            required="true"
            color="black"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
        <Button
          component={Link}
          to="/user"
          onClick={handleLogin}
          color="black"
        >
            Login
          </Button>
          <Button
            onClick={handleSignUp}
            color="black"
          >
            Sign Up
          </Button>
          <Button
            onClick={handleClose}
            color="black"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
