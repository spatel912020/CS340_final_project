import './Header.css'

const Header = (props) => {
  return (
    <div>
      <div className="title">
        <h1>Song Merge Sort</h1>
        <div className= "user_account">
          <ul>
            <li><button>Login</button></li>
            <li><button>Create</button></li>
          </ul>
        </div>
      </div>
      <div className= "mode_switch">
        <ul>
          <li><button id="Spotify">Spotify</button></li>
          <li><button id="Youtube">Youtube</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
