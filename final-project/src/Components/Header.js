import './Header.css'

const Header = (props) => {
  const loginLink = <a href="https://www.google.com">log in</a>;
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
      <div className= "Message">
          <p>
            Song merge sort is a utility to help you create more personalized Spotify playlists.
          </p>
          <p>
            Click the song you perfer below to get started, or {loginLink} for a more personal experience!
          </p>
      </div>
    </div>
  );
};

export default Header;
