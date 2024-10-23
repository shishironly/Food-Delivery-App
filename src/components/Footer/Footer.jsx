import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
      <div>
        <div className="footer">
        <div className="footer-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            aperiam velit expedita, eum ea recusandae aliquid sed facilis
            voluptatem neque officiis eos voluptatum repellat eius maxime atque
            molestiae. Voluptates, veniam?
          </p>
          <div className="social-icons">
            <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div className="footer-right">
            <h2>Get in Touch</h2>
            <ul>
                <li>+977 9805400958</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
        <hr />
        <div className="copyright">
        <p>Copyright { new Date().getFullYear()} &copy;Tomato.com - All Rights Reserved.</p>  
        </div>
        </div>      
      </div>
    
  );
};

export default Footer;
