import { Link } from "react-router-dom";
const DashboardFooter = () => {
    return (
        <div className="dashboard-footer">
            <div className="dashboard-footer-content">
                <p>© 2025 <span>CTG Lead</span> All rights reserved.  <Link to="/">Privacy Policy</Link>  |  <Link to="/">Terms & Conditions</Link></p>
            </div>
        </div>
    )
};

export default DashboardFooter;