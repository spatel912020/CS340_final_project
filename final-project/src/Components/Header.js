import './Header.css'

const Header = (props) => {
  const loginLink = <a href="https://www.google.com">log in</a>;
  return (
    <div>
      <div className="title">
        <div className= "user_account">
          <ul>
            <li><button>Login</button></li>
            <li><button>Create</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
