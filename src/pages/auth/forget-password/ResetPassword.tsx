import rightArrow from "../../../assets/images/right-arrow-long.svg"
import LeftPanel from "../../../components/LeftPanel";
import SubFooter from "../../../components/SubFooter";
import SubHeader from "../../../components/SubHeader";
import img2 from "../../../assets/images/img-2.png"
import Input from "../../../components/UI/input/Input";
import { useResetPass } from "./useResetPass";
import eye from "../../../assets/images/eye-off.svg"
import eyeOn from "../../../assets/images/eye-on.jpeg"
import { useState } from "react";

const ResetPassBox = () => {
    const email = localStorage.getItem("email") || "";
    const { resetPasswordFormik } = useResetPass(email);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isCnfPasswordVisible, setIsCnfPasswordVisible] = useState(false);

    // toggle password
    const togglePassword = () => {
        setIsPasswordVisible((prev) => !prev);
    }

    // toggle cnf password
    const toggleCnfPassword = () => {
        setIsCnfPasswordVisible((cprev) => !cprev);
    };
    return (
        <section className="auth-wrapper">
            <div className="right-panel">
                <div className="form-top">
                    <SubHeader />
                    <form onSubmit={resetPasswordFormik.handleSubmit}>
                        <div className="auth-form">
                            <div className="mb-40">
                                <h4>Reset Password</h4>
                                <p>Please enter your new password</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group mb-0">
                                        <Input
                                            id="password"
                                            type={isPasswordVisible ? "text" : "password"}
                                            name="password"
                                            label="Password *"
                                            placeholder="Enter Password"
                                            onChange={resetPasswordFormik.handleChange}
                                            value={resetPasswordFormik.values.password}
                                            errorMsg={resetPasswordFormik.errors.password}
                                            rightIcon={
                                            <img
                                                src={isPasswordVisible ? eyeOn : eye}
                                                alt="toggle"
                                                onClick={togglePassword}
                                                style={{ cursor: "pointer" }}
                                            />
                                            }
                                        />
                                    </div>
                                </div>
                                 <div className="col-lg-6">
                                    <div className="form-group mb-0">
                                        <Input
                                            id="cpassword"
                                            type={isCnfPasswordVisible ? "text" : "password"}
                                            name="cpassword"
                                            label="Confirm Password *"
                                            placeholder="Enter Confirm Password"
                                            onChange={resetPasswordFormik.handleChange}
                                            value={resetPasswordFormik.values.cpassword}
                                            errorMsg={resetPasswordFormik.errors.cpassword}
                                            rightIcon={
                                            <img
                                                src={isCnfPasswordVisible ? eyeOn : eye}
                                                alt="toggle"
                                                onClick={toggleCnfPassword}
                                                style={{ cursor: "pointer" }}
                                            />
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Send Button */}
                            <div className="text-center mt-40">
                                <button className="btn btn-secondary sm" type="submit">
                                Reset Password <span><img src={rightArrow} alt="" /></span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <SubFooter />
            </div>
            <LeftPanel title="Do something today that your future self will thank you for." subtitle="Sean Patrick Flanery" img={img2} />
        </section>
    )
};
export default ResetPassBox;
