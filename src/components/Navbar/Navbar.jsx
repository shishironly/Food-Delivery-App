import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";



const Navbar = ({setShowLogin}) => {

  const{getTotalCartAmount}=useContext(StoreContext);
  
  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="logo" /></Link>
      <ul className="navbar-menu">
       <Link to='/'><li>home</li></Link> 
        <a href="#explore-menu"><li>menu</li></a>
        <a href="#app-download"><li>mobile-app</li></a>
        <a href="#contact"><li>contact-us</li></a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">
         <Link to="/cart"><img src={assets.basket_icon} alt="basket-icon" /></Link> 
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>

        <button className="btn1" onClick={()=>setShowLogin(true)}>
          sign in 
        </button>
      </div>
    </div>
  );
};

export default Navbar;
