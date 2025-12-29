import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import Renters from "../components/Renters";

const QuotesRenters = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
    return (
        <div className="dashboard-wrapper">
            <DashboardHeader toggleMenu={toggleMenu} />
            <div className="dashboard-body">
                <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />
                <div className="dashboard-right">
                    <div className="form-group w-35">
                        <label className="form-label float">Quote Type</label>
                        <select name="" id="" className="form-control">
                            <option value="1">Renters</option>
                            <option value="2">Auto Insurance</option>
                            <option value="3">Landlord</option>
                            <option value="4">Life</option>
                            <option value="5">Condo</option>
                        </select>
                    </div>
                    <Renters/>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default QuotesRenters;
