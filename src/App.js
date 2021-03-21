import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import User from './Components/User';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme.js';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = (props) => {
  return (
    <div>
      <div className="Navbar">
        <ThemeProvider theme={theme}>
          <Router>
            <Navbar></Navbar>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/user" component={User} />
            </Switch>
          </Router>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default App;