import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import Life from "../components/Life";

const QuotesLife = () => {
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
                            <option value="1">Life</option>
                            <option value="2">Auto Insurance</option>
                            <option value="3">Landlord</option>
                            <option value="4">Condo</option>
                            <option value="5">Renters</option>
                        </select>
                    </div>
                    <form action="">
                        <Life />
                    </form>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default QuotesLife;
