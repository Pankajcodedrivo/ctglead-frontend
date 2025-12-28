import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";

const SellPolicy = () => {
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
                        <h3>Sold Policy</h3>
                        <p className="font-16">Streamlined policy sales with clarity, trust, and efficiency. </p>
                    </div>
                    <form action="">
                        <div className="shadow-box mb-40">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="form-label float">Insured Person Name*</label>
                                        <input type="text" className="form-control" placeholder="Sarah Johnson" />
                                    </div>
                                </div>
                            </div>
                            <h5 className="frm-hdr mb-3">Policy</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="form-label float">Policy Type*</label>
                                        <select name="" id="" className="form-control">
                                            <option value="1">Auto</option>
                                            <option value="2">Auto</option>
                                            <option value="3">Auto</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="form-label float">Policy Number*</label>
                                        <input type="text" className="form-control" placeholder="ABC1234567" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="form-label float">Effective Date*</label>
                                        <input type="date" className="form-control" placeholder="Select" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="form-label float">Carrier*</label>
                                        <select name="" id="" className="form-control">
                                            <option value="1">Progressive</option>
                                            <option value="2">Progressive</option>
                                            <option value="3">Progressive</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="form-label float">Producer*</label>
                                        <select name="" id="" className="form-control">
                                            <option value="1">ABC Agency</option>
                                            <option value="2">ABC Agency</option>
                                            <option value="3">ABC Agency</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="form-label float">Premium*</label>
                                        <input type="text" className="form-control" placeholder="$1,150" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="form-label">Bundled?*</label>
                                        <ul className="radio-list">
                                            <li>
                                                <label className="radio-container">Yes
                                                    <input type="radio" name="radio" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="radio-container">No
                                                    <input type="radio" name="radio" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-end">
                            <button type="submit" className="btn green-btn sm">Add Another Policy <span>+</span></button>
                        </div>
                    </form>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default SellPolicy;