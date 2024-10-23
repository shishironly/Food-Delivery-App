import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";


const Navbar = ({setShowLogin}) => {
  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="logo" /></Link>
      <ul className="navbar-menu">
       <Link to='/'><li>home</li></Link> 
        <li>menu</li>
        <li>mobile-app</li>
        <li>contact-us</li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">
         <Link to="/cart"><img src={assets.basket_icon} alt="basket-icon" /></Link> 
          <div className="dot"></div>
        </div>

        <button className="btn1" onClick={()=>setShowLogin(true)}>
          sign in 
        </button>
      </div>
    </div>
  );
};

export default Navbar;
