import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import pieChart from "../assets/images/pie-chart.png"
import star from "../assets/images/star.svg"
import cup from "../assets/images/cup.svg"

const MyProfile = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
    return (
        <div className="dashboard-wrapper">
            <DashboardHeader toggleMenu={toggleMenu} />
            <div className="dashboard-body">
                <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />
                <div className="dashboard-right">
                    <div className="dash-hdr">
                        <h3>Welcome back, Glenn!</h3>
                        <p className="font-16">Exclusive to the agency owner; focuses on financial performance, ROI, investment, and team accountability </p>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-4 width-3">
                            <h4 className="sub-title">Lead Conversion</h4>
                            <div className="dash-cmn-box">
                                <div className="row pie-chart align-items-center">
                                    <div className="col-6">
                                        <figure><img src={pieChart} alt="" /></figure>
                                    </div>
                                    <div className="col-6">
                                        <ul className="pie-chart-list">
                                            <li>
                                                <div className="pie-chart-left">
                                                    <span></span>
                                                    <em>Auto</em>
                                                </div>
                                                <p>56%</p>
                                            </li>
                                            <li>
                                                <div className="pie-chart-left">
                                                    <span></span>
                                                    <em>Home</em>
                                                </div>
                                                <p>43%</p>
                                            </li>
                                            <li>
                                                <div className="pie-chart-left">
                                                    <span></span>
                                                    <em>Renters</em>
                                                </div>
                                                <p>1%</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4 width-6">
                            <h4 className="sub-title">Goal Tracker</h4>
                            <div className="dash-cmn-box">
                                <table className="dash-table table">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Agent</th>
                                            <th>Policy Type</th>
                                            <th>Premium</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>04/22</td>
                                            <td>Ava M.</td>
                                            <td>Auto</td>
                                            <td>$8,500</td>
                                        </tr>
                                        <tr>
                                            <td>04/21</td>
                                            <td>Michael S.</td>
                                            <td>Home</td>
                                            <td>$19,200</td>
                                        </tr>
                                        <tr>
                                            <td>04/19</td>
                                            <td>Carios R.</td>
                                            <td>Bundle</td>
                                            <td>$12,800</td>
                                        </tr>
                                        <tr>
                                            <td>04/18</td>
                                            <td>Lisa H.</td>
                                            <td>Condo</td>
                                            <td>$4,100</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-3 width-3">
                            <h4 className="sub-title">Hot Leads</h4>
                            <div className="dash-cmn-box">
                                <ul className="hot-leads">
                                    <li>
                                        <div className="hot-leads-top">
                                            <h5>Sarah Cooper</h5>
                                            <h6>Home</h6>
                                            <span>$1,100</span>
                                        </div>
                                        <div className="hot-leads-bottom">
                                            <span><img src={star} alt="" /></span>
                                            <p>Ready to Buy</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="hot-leads-top">
                                            <h5>Carlos Smith</h5>
                                            <h6>Auto</h6>
                                            <span>$210</span>
                                        </div>
                                        <div className="hot-leads-bottom">
                                            <span><img src={star} alt="" /></span>
                                            <p>Ready to Buy</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 width-3">
                            <h4 className="sub-title">Pending Quotes</h4>
                            <div className="dash-cmn-box">
                                <ul className="hot-leads">
                                    <li>
                                        <div className="hot-leads-top">
                                            <h5>David Kite</h5>
                                            <span>$2,500</span>
                                        </div>
                                        <div className="hot-leads-bottom">
                                            <h6>Bundle</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="hot-leads-top">
                                            <h5>Stephanie White</h5>
                                            <span>$1,300</span>
                                        </div>
                                        <div className="hot-leads-bottom">
                                            <h6>Auto</h6>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-9 width-9">
                            <h4 className="sub-title">Agent Performance Leaderboard</h4>
                            <div className="dash-cmn-box">
                                <table className="dash-table table">
                                    <thead>
                                        <tr>
                                            <th>Rank</th>
                                            <th>Agent</th>
                                            <th>Sold</th>
                                            <th>Conversion</th>
                                            <th>Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span className="ms-2"><img src={cup} alt="" /></span></td>
                                            <td>Ava M.</td>
                                            <td>12</td>
                                            <td>20%</td>
                                            <td>$25,000</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-number ms-3">2</span></td>
                                            <td>Michael B.</td>
                                            <td>9</td>
                                            <td>18%</td>
                                            <td>$16,600</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-number ms-3">3</span></td>
                                            <td>Carios R.</td>
                                            <td>6</td>
                                            <td>12%</td>
                                            <td>$11,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default MyProfile;
