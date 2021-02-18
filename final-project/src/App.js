import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import User from './Components/User'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = (props) => {
  return (
    <div>
      <div className="Navbar">
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/" exact component={Header} />
            <Route path="/user" component={User} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
