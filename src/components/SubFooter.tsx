import { Link } from "react-router-dom";
const SubFooter = () => {
    return (
        <div className="sub-footer text-center">
            <p className="copiright">© 2026 <span> CTG Lead.</span> All rights reserved.  <Link to="/">Privacy Policy</Link>  |  <Link to="/">Terms & Conditions</Link></p>
        </div>
    )
};

export default SubFooter;