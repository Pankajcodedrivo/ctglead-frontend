import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import SettingsBox from "../components/SettingsBox";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../store/auth.store";
import { confirmDelete } from "../utils/confirmDeleteModal";
import { deleteAccount } from "../service/apis/user.api";

const Settings = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Logout handler
    function logoutHandler() {
        dispatch(logOut());
        localStorage.clear();
        navigate("/login");
    }
    // Delete account
    const handleDeleteAccount = async () => {
    const confirmed = await confirmDelete({
    title: "Delete Account?",
    description: "This will permanently delete your account and all associated data.",
    });
  if (!confirmed) return;
  try {
   await deleteAccount();
    dispatch(logOut());
    localStorage.clear();
    navigate("/login");
  } catch (error) {
    console.error("Account deletion failed", error);
  }
};

    return (
        <div className="dashboard-wrapper">
            <DashboardHeader toggleMenu={toggleMenu} />
            <div className="dashboard-body">
                <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />
                <div className="dashboard-right">
                    <div className="dash-hdr">
                        <h3>Settings</h3>
                        <p className="font-16">The settings page allows users to manage notifications, communication preferences, language, theme, and quick links. This page is strictly for user preferences, not visibility, mode selection, or profile details.</p>
                    </div>
                    <div className="shadow-box blue-border mb-4">
                        <div className="settings-hdr">
                            <h4>Notifications</h4>
                            <p>Use the switches below to control how you want to stay updated.</p>
                        </div>
                        <div className="settings-box-otr">
                            <SettingsBox title="Email Notifications" desc="Receive updates about quotes and uploaded documents" />
                            <SettingsBox title="Text Notifications" desc="Get SMS alerts for new quotes or document reminders" />
                            <SettingsBox title="New Quote Alerts" desc="Notified when carriers return new quote results" />
                            <SettingsBox title="Document Reminders" desc="Alerts for missing or incomplete uploads" />
                        </div>
                    </div>
                    <div className="shadow-box blue-border mb-4">
                        <div className="settings-hdr">
                            <h4>Communication Preferences</h4>
                            <p>Choose how and when our team can reach you.</p>
                        </div>
                        <div className="inner-shadow-box mb-4">
                            <p>Preferred Contact Method</p>
                            <div className="form-group mb-0 w-75">
                                <label className="form-label float">Contact Method</label>
                                <select name="" id="" className="form-control">
                                    <option value="1" disabled>Email</option>
                                    <option value="1">Email</option>
                                    <option value="1">Email</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-box blue-border mb-4">
                        <div className="settings-hdr">
                            <h4>Quick Links</h4>
                            <p>Access key tools quickly from here.</p>
                        </div>
                        <div className="inner-shadow-box pd-30 mb-4">
                            <ul className="settings-list">
                                <li>
                                    <Link to="/security">Manage Account Security</Link>
                                </li>
                                <li>
                                    <Link to="/my-leads">Manage Lead</Link>
                                </li>
                                <li>
                                    <Link to="/" onClick={logoutHandler}>Log Out </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="shadow-box blue-border">
                        <div className="settings-hdr">
                            <h5>Delete Account</h5>
                            <p>You can delete your account anytime, but please note this action is permanent. All your information will be erased.</p>
                        </div>
                        <button type="button" className="btn btn-secondary style2 mb-w-100 sm wd-250" onClick={handleDeleteAccount}>Manage Account</button>
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default Settings;
