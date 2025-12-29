import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import email from "../assets/images/email.svg";
import tel from "../assets/images/tel.svg";
import AutoInsurance from "../components/AutoInsurance";
import edit from "../assets/images/edit-icon.svg";

const MyQuotesDetails = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
    return (
        <div className="dashboard-wrapper">
            <DashboardHeader toggleMenu={toggleMenu} />
            <div className="dashboard-body">
                <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />
                <div className="dashboard-right">
                    <div className="card mb-40 card-innr">
                        <span className="edit-icon"><img src={edit} alt="" /></span>
                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                            <div>
                                <div className="dash-hdr">
                                    <h3 className="font-wight-600">Lone Star Agency Group</h3>
                                </div>
                                <ul className="details-list">
                                    <li>
                                        1234 Main St, Houston, TX 77002
                                    </li>
                                    <li>
                                        <a href="mailto:debra.holt@example.com"><span><img src={email} alt="" /></span>debra.holt@example.com</a>
                                    </li>
                                    <li>
                                        <a href="tel:+"><span><img src={tel} alt="" /></span>(229) 555-0109</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-end details-right">
                                <p className="mb-3">Quoted on: October 10, 2025 By Michael Davis</p>
                                <div className="btn-wrap">
                                    <button className="btn btn-outline-primary">Message Agency</button>
                                    <button className="btn btn-outline-danger">Decline</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group w-35">
                        <label className="form-label float">Quote Type</label>
                        <select name="" id="" className="form-control">
                            <option value="1">Auto Insurance</option>
                            <option value="2">Condo</option>
                            <option value="3">Landlord</option>
                            <option value="4">Life</option>
                            <option value="5">Renters</option>
                        </select>
                    </div>
                    <AutoInsurance />
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default MyQuotesDetails;
