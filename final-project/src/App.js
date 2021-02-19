import './App.css'
import Main from './Components/Main'
import Navbar from './Components/Navbar'
import User from './Components/User'
import Spotify from './Components/Spotify'
import Youtube from './Components/Youtube'
import Account from './Components/Account'


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = (props) => {
  return (
    <div>
      <div className="Navbar">
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/user" component={User} />
            <Route path="/spotify" component={Spotify} />
            <Route path="/youtube" component={Youtube} />
            <Route path="/account" component={Account} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;