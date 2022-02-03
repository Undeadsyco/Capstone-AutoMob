import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn, user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
    alert('Logout was successful');
    navigate('/');
  }

  const navigation = () => {
    if (isLoggedIn && user.isAdmin) {
      return (
        <nav>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/admin/reports">Reports</Link></p>
          <p onClick={() => logout()}>Logout</p>
          <p>Contact us at: contact@automob.com</p>
          <p>1 (800) 357-6498</p>
        </nav>
      )
    } else if (isLoggedIn) {
      return (
        <nav>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/services">Services</Link></p>
          <p><Link to="/booking">Booking</Link></p>
          <p><Link to="/profile">Profile</Link></p>
          <p onClick={() => logout()}>Logout</p>
          <p>Contact us at: contact@automob.com</p>
          <p>1 (800) 357-6498</p>
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
