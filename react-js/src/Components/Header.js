import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, admin }) => {

  const navigation = () => {
    if (isLoggedIn && admin) {
      return (
        <nav>
          
        </nav>
      )
    } else if (isLoggedIn) {
      return (
        <nav>
          
        </nav>
      )
    } else {
      return (
        <nav>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/login">Login</Link></p>
          <p>Contact us at: contact@automob.com</p>
          <p>1 (800) 357-6498</p>
        </nav>
      )
    }
  }

  return (
    <div className="header">
      <h1><Link to="/">AutoMob Mechanic</Link></h1>
      {navigation()}
    </div>
  );
};

export default Header;
