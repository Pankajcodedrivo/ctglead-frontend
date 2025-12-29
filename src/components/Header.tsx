import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg"
const Header = () => {
  return (
    <div className="header">
        <div className="container">
          <div className="header-otr">
              <Link to="/" className="logo"><img src={logo} alt="" /></Link>
              <Link to="/login" className="btn btn-primary"> Login</Link>
          </div>
        </div>
    </div>
  )
};

export default Header;
