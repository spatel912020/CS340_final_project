import './App.css'
import PersistentDrawerLeft from './Components/Drawer'
import Divider from '@material-ui/core/Divider';

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
