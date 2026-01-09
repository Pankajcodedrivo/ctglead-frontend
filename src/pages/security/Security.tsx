
import { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardLeft from "../../components/DashboardLeft";
import DashboardFooter from "../../components/DashboardFooter";
import eye from "../../assets/images/eye-off.svg"
import eyeOn from "../../assets/images/eye-on.jpeg"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../components/UI/input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateProfile } from "../../service/apis/user.api";
import { changePasswordApi } from "../../service/apis/auth.api";
import { logOut } from "../../store/auth.store";
import { emailSchema, oldPasswordSchema, newPasswordSchema, confirmPasswordSchema } from "../../utils/yupSchemas";

const Security = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);
    const user = useSelector((state: any) => state.authSlice.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [updatingEmail, setUpdatingEmail] = useState(false);

    const [showOld, setShowOld] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [updatingPassword, setUpdatingPassword] = useState(false);

  // Email update
  const emailFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: user?.email || "",
    },
    validationSchema: Yup.object({
      email: emailSchema
    }),
    onSubmit: async (values) => {
      if (values.email === user?.email) return;
      setUpdatingEmail(true);
      try {
        await updateProfile({ email: values.email });
        dispatch(logOut());
        localStorage.clear();
        navigate("/login");
      } catch (error) {
        console.error("Email update failed", error);
      } finally {
        setUpdatingEmail(false);
      }
    },
  });

  // Change password
  const passwordFormik = useFormik({
  initialValues: {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  },
  validationSchema: Yup.object({
    oldPassword: oldPasswordSchema,
    newPassword: newPasswordSchema,
    confirmPassword: confirmPasswordSchema,
  }),
  onSubmit: async (values, { resetForm }) => {
    setUpdatingPassword(true);
    try {
      await changePasswordApi({
        password_new: values.newPassword,
        password_old: values.oldPassword,
      });
      resetForm();
      dispatch(logOut());
      localStorage.clear();
      navigate("/login");
    } catch (error) {
      console.error("Password update failed", error);
    } finally {
      setUpdatingPassword(false);
    }
  },
});

    return (
        <div className="dashboard-wrapper">
            <DashboardHeader toggleMenu={toggleMenu} />
            <div className="dashboard-body">
                <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />
                <div className="dashboard-right">
                    <div className="dash-hdr">
                        <h3>Security</h3>
                        <p className="font-16">Manage your security settings with ease.</p>
                    </div>
                    <div className="shadow-box my-account">
                        <div className="mbl-30">
                            <h5>Change Email</h5>
                            <div className="row align-items-end mb-4 gy-2">
                                <div className="col-lg-6 col-md-8">
                                  <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        label="Email Address *"
                                        placeholder="example@yahoo.com"
                                        value={emailFormik.values.email}
                                        onChange={emailFormik.handleChange}
                                        errorMsg={
                                        emailFormik.touched.email &&
                                        emailFormik.errors.email
                                        }
                                    />
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <button
                                    type="button"
                                    className="btn green-btn hg-60 mb-w-100 sm wd-150"
                                    onClick={() => emailFormik.handleSubmit()}
                                    disabled={updatingEmail}
                                >
                                    {updatingEmail ? "Updating..." : "Update"}
                                </button>
                                </div>
                            </div>
                        </div>
                        <h5>Change Password</h5>
                        <div className="row">
                        {/* Old Password */}
                        <div className="col-xl-4 col-md-6">
                            <Input
                            id="oldPassword"
                            name="oldPassword"
                            type={showOld ? "text" : "password"}
                            label="Old Password *"
                            placeholder="Enter old password"
                            value={passwordFormik.values.oldPassword}
                            onChange={passwordFormik.handleChange}
                            errorMsg={
                                passwordFormik.touched.oldPassword &&
                                passwordFormik.errors.oldPassword
                            }
                            rightIcon={
                                <img
                                src={showOld ? eyeOn : eye}
                                alt=""
                                onClick={() => setShowOld(!showOld)}
                                />
                            }
                            />
                            </div>
                            {/* New Password */}
                            <div className="col-xl-4 col-md-6">
                                <Input
                                id="newPassword"
                                name="newPassword"
                                type={showNew ? "text" : "password"}
                                label="New Password *"
                                placeholder="Enter new password"
                                value={passwordFormik.values.newPassword}
                                onChange={passwordFormik.handleChange}
                                errorMsg={
                                    passwordFormik.touched.newPassword &&
                                    passwordFormik.errors.newPassword
                                }
                                rightIcon={
                                    <img
                                    src={showNew ? eyeOn : eye}
                                    alt=""
                                    onClick={() => setShowNew(!showNew)}
                                    />
                                }
                                />
                            </div>
                            {/* Confirm Password */}
                            <div className="col-xl-4 col-md-6">
                                <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showConfirm ? "text" : "password"}
                                label="Confirm Password *"
                                placeholder="Confirm password"
                                value={passwordFormik.values.confirmPassword}
                                onChange={passwordFormik.handleChange}
                                errorMsg={
                                    passwordFormik.touched.confirmPassword &&
                                    passwordFormik.errors.confirmPassword
                                }
                                rightIcon={
                                    <img
                                    src={showConfirm ? eyeOn : eye}
                                    alt=""
                                    onClick={() => setShowConfirm(!showConfirm)}
                                    />
                                }
                                />
                            </div>
                            {/* Update button */}
                            <div className="col-md-12">
                                <button
                                type="button"
                                className="btn green-btn mb-w-100 sm wd-150"
                                onClick={() => passwordFormik.handleSubmit()}
                                disabled={updatingPassword}
                                >
                                {updatingPassword ? "Updating..." : "Update"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default Security;
