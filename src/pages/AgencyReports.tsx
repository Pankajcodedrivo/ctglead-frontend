import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import menuToggle from "../assets/images/menu-toggle.svg"
import graph from "../assets/images/graph.png"

const AgencyReports = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
    return (
        <div className="dashboard-wrapper">
            <DashboardHeader toggleMenu={toggleMenu} />
            <div className="dashboard-body">
                <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />
                <div className="dashboard-right">
                    <div className="dash-hdr d-flex">
                        <div className="dash-hdr-left">
                            <h3>Agency Reports</h3>
                            <p className="font-16">Analytics-driven insights to enhance agency performance.</p>
                        </div>
                        <div className="dash-hdr-right">
                            <select name="" id="" className="form-control wd-91">
                                <option value="1">Date Range</option>
                                <option value="2">Date Range</option>
                                <option value="3">Date Range</option>
                            </select>
                            <button className="menu-toggle"><img src={menuToggle} alt="" /></button>
                        </div>
                    </div>
                    <div className="agency-reports mb-4">
                        <div className="graph-top">
                            <ul>
                                <li>
                                    <span className="color-1"></span>
                                    Total Leads
                                </li>
                                <li>
                                    <span className="color-2"></span>
                                    Quotes Sent
                                </li>
                                <li>
                                    <span className="color-3"></span>
                                    Sold Policies
                                </li>
                            </ul>
                        </div>
                        <div className="graph-img">
                            <img src={graph} alt="" />
                        </div>
                    </div>
                    <div className="agency-reports-box">
                        <div className="row">
                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <div className="agency-reports-box-innr">
                                    <h2>320</h2>
                                    <p className="mb-0">Total Leads</p>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <div className="agency-reports-box-innr">
                                    <h2>240</h2>
                                    <p className="mb-0">Quotes Sent</p>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <div className="agency-reports-box-innr">
                                    <h2>56</h2>
                                    <p className="mb-0">Sold Policies</p>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <div className="agency-reports-box-innr">
                                    <h2>32%</h2>
                                    <p className="mb-0">Conversion Rate</p>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <div className="agency-reports-box-innr">
                                    <h2>1.4 H</h2>
                                    <p className="mb-0">Average Response
                                        Time</p>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                                <div className="agency-reports-box-innr">
                                    <h2>24</h2>
                                    <p className="mb-0">Declines</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default AgencyReports;
