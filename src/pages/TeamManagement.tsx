import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import plus from "../assets/images/plus-icon.svg";
import minus from "../assets/images/minus-circle.svg"

const TeamManagement = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
    return (
        <div className="dashboard-wrapper">
            <DashboardHeader toggleMenu={toggleMenu} />
            <div className="dashboard-body">
                <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />
                <div className="dashboard-right">
                    <div className="d-flex justify-content-between align-items-center mb-column mb-32">
                        <div className="dash-hdr mb-0">
                            <h3 className="font-wight-600">Team Management</h3>
                            <p className="font-16">Ensure your team stays aligned, motivated, and on track.</p>
                        </div>
                        <div className="save-btn-wrapper">
                            <button className="btn btn-outline-grey"><span><img src={plus} alt="" /></span> Add Member</button>
                            <button className="btn btn-outline-grey">Edit Member</button>
                        </div>
                    </div>
                    <div className="dash-cmn-box">
                        <table className="dash-table table team-table">
                            <thead>
                                <tr>
                                    <th>Agent</th>
                                    <th>Quotes Sent</th>
                                    <th>Overdue</th>
                                    <th>Declines Received</th>
                                    <th>Sold Policies</th>
                                    <th>Avg. Response Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span className="minus-cicle"><img src={minus} alt="" /></span>Daniel Smith</td>
                                    <td>45</td>
                                    <td>1</td>
                                    <td>8</td>
                                    <td>12</td>
                                    <td>1.2 Hours</td>
                                </tr>
                                <tr>
                                    <td><span className="minus-cicle"><img src={minus} alt="" /></span>Angela Rodriguez</td>
                                    <td>37</td>
                                    <td>0</td>
                                    <td>5</td>
                                    <td>15</td>
                                    <td>0.9 Hours</td>
                                </tr>
                                <tr>
                                    <td><span className="minus-cicle"><img src={minus} alt="" /></span>John Johnson</td>
                                    <td>29</td>
                                    <td>3</td>
                                    <td>7</td>
                                    <td>10</td>
                                    <td>1.5 Hours</td>
                                </tr>
                                <tr>
                                    <td><span className="minus-cicle"><img src={minus} alt="" /></span>Emily Davis</td>
                                    <td>20</td>
                                    <td>4</td>
                                    <td>6</td>
                                    <td>8</td>
                                    <td>2.1 Hours</td>
                                </tr>
                                <tr>
                                    <td><span className="minus-cicle"><img src={minus} alt="" /></span>Michael Brown</td>
                                    <td>33</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>14</td>
                                    <td>1.0 Hour</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default TeamManagement;
