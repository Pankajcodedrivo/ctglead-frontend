import { useEffect, useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardLeft from "../../components/DashboardLeft";
import DashboardFooter from "../../components/DashboardFooter";
import Input from "../../components/UI/input/Input";
import { useAccount } from "./useAccount";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const MyAccount = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);
  const { accountFormik, loading } = useAccount();

  const user = useSelector((state: RootState) => state.authSlice.user);
    useEffect(() => {
    if (user) {
        accountFormik.setValues({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        DOB: user.DOB
        ? new Date(user.DOB).toISOString().substring(0, 10)
        : "",
        phoneNumber: user.phoneNumber || "",
        address: user.address || "",
        email: user.email || "",
        });
    }
    }, [user]);

  return (
    <div className="dashboard-wrapper">
      <DashboardHeader toggleMenu={toggleMenu} />

      <div className="dashboard-body">
        <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />

        <div className="dashboard-right">
          <div className="dash-hdr">
            <h3>My Account</h3>
            <p className="font-16">Manage your personal details.</p>
          </div>

          <div className="shadow-box blue-border my-account">
            <h5>Profile Summary</h5>

            <form onSubmit={accountFormik.handleSubmit}>
              <div className="row">

                {/* First Name */}
                <div className="col-md-6">
                  <div className="form-group">
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      label="First Name *"
                      placeholder="Enter First Name"
                      value={accountFormik.values.firstName}
                      onChange={accountFormik.handleChange}
                      // onBlur={accountFormik.handleBlur}
                      errorMsg={
                        accountFormik.touched.firstName
                          ? accountFormik.errors.firstName
                          : ""
                      }
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div className="col-md-6">
                  <div className="form-group">
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      label="Last Name *"
                      placeholder="Enter Last Name"
                      value={accountFormik.values.lastName}
                      onChange={accountFormik.handleChange}
                      // onBlur={accountFormik.handleBlur}
                      errorMsg={
                        accountFormik.touched.lastName
                          ? accountFormik.errors.lastName
                          : ""
                      }
                    />
                  </div>
                </div>

                {/* Date of Birth */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label float">Date of Birth</label>
                    <input
                      type="date"
                      name="DOB"
                      className="form-control"
                      value={accountFormik.values.DOB}
                      onChange={accountFormik.handleChange}
                      onBlur={accountFormik.handleBlur}
                    />
                    {accountFormik.touched.DOB && accountFormik.errors.DOB && (
                      <small className="text-danger">
                        {accountFormik.errors.DOB}
                      </small>
                    )}
                  </div>
                </div>

                {/* Email (read-only example) */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label float">Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        value={accountFormik.values.email}
                        disabled
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label float">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      className="form-control"
                      placeholder="(555) 123-4567"
                      value={accountFormik.values.phoneNumber}
                      onChange={accountFormik.handleChange}
                      onBlur={accountFormik.handleBlur}
                    />
                    {accountFormik.touched.phoneNumber &&
                      accountFormik.errors.phoneNumber && (
                        <small className="text-danger">
                          {accountFormik.errors.phoneNumber}
                        </small>
                      )}
                  </div>
                </div>

                {/* Address (Optional) */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label float">Home Address</label>
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      placeholder="123 Main Street, Springfield, IL"
                      value={accountFormik.values.address}
                      onChange={accountFormik.handleChange}
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="col-md-12">
                  <button
                    type="submit"
                    className="btn green-btn sm wd-150 mb-w-100"
                    disabled={loading}
                  >
                    {loading ? "Updating..." : "Update"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
};

export default MyAccount;
