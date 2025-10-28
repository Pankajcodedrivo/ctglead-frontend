import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="footer-top">
                <Link to="/" className="footer-logo"><img src={logo} alt="" /></Link>    
                <ul className="social-list">
                    <li>
                        <Link to="/"><FontAwesomeIcon icon={faFacebook} /></Link>    
                    </li>
                    <li>
                        <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link>   
                    </li>
                    <li>
                        <Link to="/"><FontAwesomeIcon icon={faYoutube} /></Link>   
                    </li>
                    <li>
                        <Link to="/"><FontAwesomeIcon icon={faLinkedin} /></Link>   
                    </li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>© Copyright CTGLead 2025. All rights reserved.</p>
                <p>Opening Hours | Sunday - Friday | 08:00 AM - 05:00 PM</p>
            </div>
        </div>
    </div>
  )
};

export default Footer;
