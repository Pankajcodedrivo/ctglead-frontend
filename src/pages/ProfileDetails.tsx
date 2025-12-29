import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import pen from "../assets/images/pen.svg"
import TabButton from "../components/TabButton";
import TabPanel from "../components/TabPanel";
import tabImg from "../assets/images/tab-img.png"
import icn1 from "../assets/images/icn1.svg"
import icn2 from "../assets/images/icn2.svg"
import icn3 from "../assets/images/icn3.svg"
import icn4 from "../assets/images/icn4.svg"
import tick from "../assets/images/tick-green.svg"

const ProfileDetails = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
    const [activeTab, setActiveTab] = useState("tab1");
    return (
        <div className="dashboard-wrapper">
            <DashboardHeader toggleMenu={toggleMenu} />
            <div className="dashboard-body">
                <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />
                <div className="dashboard-right">
                    <div className="build-quote mb-4">
                        <div className="build-quote-left">
                            <div className="dash-hdr mb-0">
                                <h3>Sarah Johnson</h3>
                                <p className="font-16">Ready to be Quoted.</p>
                            </div>
                            <button type="button" className="notes-btn"><span><img src={pen} alt="" /></span>Notes</button>
                        </div>
                        <button type="button" className="btn green-btn">Build Quote</button>
                    </div>
                    <div className="shadow-box">
                        <div className="tabs">
                            <div className="tab-header">
                                <TabButton
                                    label="Sarah"
                                    desc="Main Insured"
                                    img={tabImg}
                                    isActive={activeTab === "tab1"}
                                    onClick={() => setActiveTab("tab1")}
                                />
                                <TabButton
                                    label="David"
                                    desc="Spouse"
                                    img={tabImg}
                                    isActive={activeTab === "tab2"}
                                    onClick={() => setActiveTab("tab2")}
                                />
                                <TabButton
                                    label="Carlos"
                                    desc="Dad"
                                    img={tabImg}
                                    isActive={activeTab === "tab3"}
                                    onClick={() => setActiveTab("tab3")}
                                />
                                <TabButton
                                    label="Selena"
                                    desc="Daughter"
                                    img={tabImg}
                                    isActive={activeTab === "tab4"}
                                    onClick={() => setActiveTab("tab4")}
                                />
                                <TabButton
                                    label="Gina"
                                    desc="Daughter"
                                    img={tabImg}
                                    isActive={activeTab === "tab5"}
                                    onClick={() => setActiveTab("tab5")}
                                />
                            </div>
                            <div className="tab-body">
                                <TabPanel isActive={activeTab === "tab1"}>
                                    <div className="mb-32">
                                        <div className="tab-top">
                                            <h4 className="mb-0">Sarah Johnson</h4>
                                            <ul>
                                                <li>Age 38</li>
                                                <li> Main Insured</li>
                                            </ul>
                                        </div>
                                        <div className="row g-4">
                                            <div className="col-xl-8">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <ul className="pro-details-list">
                                                            <li>
                                                                <span><img src={icn1} alt="" /></span>
                                                                122 Main St, Austin, TX 77077
                                                            </li>
                                                            <li>
                                                                <span><img src={icn2} alt="" /></span>
                                                                <a href="mailto:">s.johnson@yahoo.com</a> <em><img src={tick} alt="" /></em>
                                                            </li>
                                                            <li>
                                                                <span><img src={icn3} alt="" /></span>
                                                                <a href="tel:+">(713) 455-2839</a><em><img src={tick} alt="" /></em>
                                                            </li>
                                                            <li>
                                                                <span><img src={icn4} alt="" /></span>
                                                                TX/DL:8765432210 <br />Years Licensed: 10+ years
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <ul className="pro-details-list">
                                                            <li>
                                                                DOB: 05/12/1987
                                                            </li>
                                                            <li>
                                                                Gender:
                                                                F
                                                            </li>
                                                            <li>
                                                                Marital Status:
                                                                Married
                                                            </li>
                                                            <li>
                                                                Home Owner:
                                                                Yes
                                                            </li>
                                                            <li>Employment: Full time, Bartender</li>
                                                            <li>Education: Bachelor's Degree</li>
                                                            <li>Military Afiliated: No</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-12 mt-4">
                                                        <h4 className="mb-4">Preferences / Discounts</h4>
                                                        <ul className="pref-list">
                                                            <li>Would you like to enroll in paperless billing?: <span>Yes</span> </li>
                                                            <li>Would you like to enroll in automatic payments?: <span>Yes</span></li>
                                                            <li>Would you like to track your driving for savings?: <span>Yes</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4">
                                                <div className="shadow-box">
                                                    <h4 className="mb-4">Insurance History</h4>
                                                    <ul className="pref-list mb-4">
                                                        <li>Current Insurer: <span>ABC Insurance</span></li>
                                                        <li>Premium: <span>$1,204</span></li>
                                                        <li>Length of Coverage: <span>5 Years</span></li>
                                                        <li>Lapses: <span>No</span></li>
                                                    </ul>
                                                    <h4 className="mb-4">Driving History</h4>
                                                    <ul className="pref-list">
                                                        <li>Has your license been
                                                            suspended in the last 5 years?:
                                                            <span>No</span></li>
                                                        <li>Accidents or claims in the past
                                                            7 years?: <span>No</span></li>
                                                        <li>Tickets or violations in the past 5
                                                            years?: <span>Yes</span></li>
                                                        <li>SR-22?: <span>Yes</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-innr-header">
                                        <ul className="nav nav-pills">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-bs-toggle="pill" href="#auto">Auto</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="pill" href="#home">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="pill" href="#life">Life</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content shadow-box">
                                            <div className="tab-pane active" id="auto">
                                                <div className="acc-box">
                                                    <div className="row m-0">
                                                        <div className="col-xl-4 acc-box-innr">
                                                            <div className="acc-hdr mb-4">
                                                                <span>Vehicle 1</span>
                                                                <h5>2018 Honda Accord</h5>
                                                                <p>VIN: WAUZZZA12BC345678</p>
                                                            </div>
                                                            <div id="accordion">
                                                                <div className="card">
                                                                    <div className="card-header">
                                                                        <a data-bs-toggle="collapse" href="#acc1">
                                                                            Ownership
                                                                        </a>
                                                                    </div>
                                                                    <div id="acc1" className="collapse show" data-bs-parent="#accordion">
                                                                        <div className="card-body">
                                                                            <ul>
                                                                                <li>Ownership Type: Finance</li>
                                                                                <li>Lender Name: Auto GMC Finance</li>
                                                                                <li>Primary Use: School</li>
                                                                                <li>Annual Mileage: 12,000</li>
                                                                                <li>How long you've had the vehicle: 5 Years</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="card">
                                                                    <div className="card-header">
                                                                        <a className="collapsed" data-bs-toggle="collapse" href="#acc2">
                                                                            Safety Features
                                                                        </a>
                                                                    </div>
                                                                    <div id="acc2" className="collapse" data-bs-parent="#accordion">
                                                                        <div className="card-body">
                                                                            <ul>
                                                                                <li>ABS: Yes</li>
                                                                                <li>Airbags: Yes</li>
                                                                                <li>Anti-theft Device: Yes</li>
                                                                                <li>Tracking Device: Yes</li>
                                                                                <li>Backup Camera: Yes</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="card">
                                                                    <div className="card-header">
                                                                        <a className="collapsed" data-bs-toggle="collapse" href="#acc3">
                                                                            Vehicle Risk
                                                                        </a>
                                                                    </div>
                                                                    <div id="acc3" className="collapse" data-bs-parent="#accordion">
                                                                        <div className="card-body">
                                                                            <ul>
                                                                                <li>Used for rideshare or delivery?: No</li>
                                                                                <li>Any aftermarket modifications?: Yes</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="card">
                                                                    <div className="card-header">
                                                                        <a className="collapsed" data-bs-toggle="collapse" href="#acc4">
                                                                            Coverages
                                                                        </a>
                                                                    </div>
                                                                    <div id="acc4" className="collapse" data-bs-parent="#accordion">
                                                                        <div className="card-body">
                                                                            <ul>
                                                                                <li>Bodily Injury Liability:
                                                                                    100/300</li>
                                                                                <li>Property Damage Liability: $100,000</li>
                                                                                <li>PIP:
                                                                                    $5,000</li>
                                                                                <li>Medical Payments:
                                                                                    $2,000</li>
                                                                                <li>UM/UIM Bodily Injury:
                                                                                    100/300</li>
                                                                                <li>UM/UIM Property Damage: $50,000</li>
                                                                                <li>Comprehensive Deductible: $500</li>
                                                                                <li>Collision Deductible:
                                                                                    $500</li>
                                                                                <li>Towing & Labor:
                                                                                    $100</li>
                                                                                <li>Rental Reimbursement:
                                                                                    $40/day</li>
                                                                                <li>Roadside Assistance:
                                                                                    Yes</li>
                                                                                <li>GAP Coverage:
                                                                                    Yes</li>
                                                                                <li>New Car Replacement:
                                                                                    No</li>
                                                                                <li>Custom Equipment:
                                                                                    $2,000</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-4 acc-box-innr">
                                                            <div className="acc-hdr mb-4">
                                                                <span>Vehicle 2</span>
                                                                <h5>2021 For Explorer</h5>
                                                                <p>VIN: 1G1YZ23J9P5803427</p>
                                                            </div>
                                                            <div id="accordion">
                                                                <div className="card">
                                                                    <div className="card-header">
                                                                        <a data-bs-toggle="collapse" href="#acc5">
                                                                            Ownership
                                                                        </a>
                                                                    </div>
                                                                    <div id="acc5" className="collapse show" data-bs-parent="#accordion">
                                                                        <div className="card-body">
                                                                            <ul>
                                                                                <li>Ownership Type: Finance</li>
                                                                                <li>Lender Name: Auto GMC Finance</li>
                                                                                <li>Primary Use: School</li>
                                                                                <li>Annual Mileage: 12,000</li>
                                                                                <li>How long you've had the vehicle: 5 Years</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="card">
                                                                    <div className="card-header">
                                                                        <a className="collapsed" data-bs-toggle="collapse" href="#acc6">
                                                                            Safety Features
                                                                        </a>
                                                                    </div>
                                                                    <div id="acc6" className="collapse" data-bs-parent="#accordion">
                                                                        <div className="card-body">
                                                                            <ul>
                                                                                <li>ABS: Yes</li>
                                                                                <li>Airbags: Yes</li>
                                                                                <li>Anti-theft Device: Yes</li>
                                                                                <li>Tracking Device: Yes</li>
                                                                                <li>Backup Camera: Yes</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="card">
                                                                    <div className="card-header">
                                                                        <a className="collapsed" data-bs-toggle="collapse" href="#acc7">
                                                                            Vehicle Risk
                                                                        </a>
                                                                    </div>
                                                                    <div id="acc7" className="collapse" data-bs-parent="#accordion">
                                                                        <div className="card-body">
                                                                            <ul>
                                                                                <li>Used for rideshare or delivery?: No</li>
                                                                                <li>Any aftermarket modifications?: Yes</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="card">
                                                                    <div className="card-header">
                                                                        <a className="collapsed" data-bs-toggle="collapse" href="#acc8">
                                                                            Coverages
                                                                        </a>
                                                                    </div>
                                                                    <div id="acc8" className="collapse" data-bs-parent="#accordion">
                                                                        <div className="card-body">
                                                                            <ul>
                                                                                <li>Agency Recommendations</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-4 acc-box-innr">
                                                            <div className="acc-hdr mb-4">
                                                                <span>Vehicle 3</span>
                                                                <h5>2017 Toyota RAV4</h5>
                                                                <p>VIN: ZHNYDZH30DH50804S</p>
                                                            </div>
                                                            <div id="accordion">
                                                                <div className="card">
                                                                    <div className="card-header">
                                                                        <a data-bs-toggle="collapse" href="#acc9">
                                                                            Ownership
                                                                        </a>
                                                                    </div>
                                                                    <div id="acc9" className="collapse show" data-bs-parent="#accordion">
                                                                        <div className="card-body">
                                                                            <ul>
                                                                                <li>Ownership Type: Finance</li>
                                                                                <li>Lender Name: Auto GMC Finance</li>
                                                                                <li>Primary Use: School</li>
                                                                                <li>Annual Mileage: 12,000</li>
                                                                                <li>How long you've had the vehicle: 5 Years</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="card">
                                                                    <div className="card-header">
                                                                        <a className="collapsed" data-bs-toggle="collapse" href="#acc10">
                                                                            Safety Features
                                                                        </a>
                                                                    </div>
                                                                    <div id="acc10" className="collapse" data-bs-parent="#accordion">
                                                                        <div className="card-body">
                                                                            <ul>
                                                                                <li>ABS: Yes</li>
                                                                                <li>Airbags: Yes</li>
                                                                                <li>Anti-theft Device: Yes</li>
                                                                                <li>Tracking Device: Yes</li>
                                                                                <li>Backup Camera: Yes</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="card">
                                                                    <div className="card-header">
                                                                        <a className="collapsed" data-bs-toggle="collapse" href="#acc11">
                                                                            Vehicle Risk
                                                                        </a>
                                                                    </div>
                                                                    <div id="acc11" className="collapse" data-bs-parent="#accordion">
                                                                        <div className="card-body">
                                                                            <ul>
                                                                                <li>Used for rideshare or delivery?: No</li>
                                                                                <li>Any aftermarket modifications?: Yes</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="card">
                                                                    <div className="card-header">
                                                                        <a className="collapsed" data-bs-toggle="collapse" href="#acc12">
                                                                            Coverages
                                                                        </a>
                                                                    </div>
                                                                    <div id="acc12" className="collapse" data-bs-parent="#accordion">
                                                                        <div className="card-body">
                                                                            <ul>
                                                                                <li>Bodily Injury Liability:
                                                                                    100/300</li>
                                                                                <li>Property Damage Liability: $100,000</li>
                                                                                <li>PIP:
                                                                                    $5,000</li>
                                                                                <li>Medical Payments:
                                                                                    $2,000</li>
                                                                                <li>UM/UIM Bodily Injury:
                                                                                    100/300</li>
                                                                                <li>UM/UIM Property Damage: $50,000</li>
                                                                                <li>Comprehensive Deductible: $500</li>
                                                                                <li>Collision Deductible:
                                                                                    $500</li>
                                                                                <li>Towing & Labor:
                                                                                    $100</li>
                                                                                <li>Rental Reimbursement:
                                                                                    $40/day</li>
                                                                                <li>Roadside Assistance:
                                                                                    Yes</li>
                                                                                <li>GAP Coverage:
                                                                                    Yes</li>
                                                                                <li>New Car Replacement:
                                                                                    No</li>
                                                                                <li>Custom Equipment:
                                                                                    $2,000</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="home">
                                                <p>Tab 2</p>
                                            </div>
                                            <div className="tab-pane fade" id="life">
                                                <p>Tab 3</p>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel isActive={activeTab === "tab2"}>
                                    <h3>Tab Two Content</h3>
                                </TabPanel>
                                <TabPanel isActive={activeTab === "tab3"}>
                                    <h3>Tab Three Content</h3>
                                </TabPanel>
                                <TabPanel isActive={activeTab === "tab4"}>
                                    <h3>Tab Four Content</h3>
                                </TabPanel>
                                <TabPanel isActive={activeTab === "tab5"}>
                                    <h3>Tab Five Content</h3>
                                </TabPanel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default ProfileDetails;
