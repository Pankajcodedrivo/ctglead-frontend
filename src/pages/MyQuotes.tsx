import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import LeadBoxOne from "../components/LeadBoxOne";
import LeadBoxTwo from "../components/LeadBoxTwo";
import LeadBoxThree from "../components/LeadBoxThree";

const MyQuotes = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
    return (
        <div className="dashboard-wrapper">
            <DashboardHeader toggleMenu={toggleMenu} />
            <div className="dashboard-body">
                <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />
                <div className="dashboard-right">
                    <div className="dash-wrapper">
                        <div className="dash-hdr d-flex">
                            <div className="dash-hdr-left">
                                <h3>My Quotes</h3>
                                <p className="font-16">Track and manage all your quotes in one place.</p>
                            </div>
                            <div className="dash-hdr-right">
                                <button type="button" className="btn">My Assigned Leads</button>
                                <select name="" id="" className="form-control">
                                    <option value="1">Sort by</option>
                                    <option value="2">Sort by</option>
                                    <option value="3">Sort by</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="leads-box-otr">
                        <LeadBoxOne />
                        <LeadBoxTwo />
                        <LeadBoxThree />
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default MyQuotes;
