import { Link } from "react-router-dom";
import rightArrow from "../../../assets/images/right-arrow-long.svg"
import LeftPanel from "../../../components/LeftPanel";
import SubFooter from "../../../components/SubFooter";
import SubHeader from "../../../components/SubHeader";
import eye from "../../../assets/images/eye-off.svg"
import loginImg from "../../../assets/images/login-img.png"

const Login = () => {
    return (
        <section className="auth-wrapper">
            <div className="right-panel">
                <div className="form-top">
                    <SubHeader />
                    <form action="">
                        <div className="auth-form">
                            <div className="mb-40 lead-top">
                                <div className="lead-top-left">
                                    <h4>Welcome Back!</h4>
                                    <p>Enter your email and password to access your account.</p>
                                </div>
                                <div className="lead-top-right">
                                    <p>Already have an account? <Link to="/">Sign In</Link></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-label float">Email Address *</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-label float">Password *</label>
                                        <div className="password">
                                            <input type="password" className="form-control" placeholder="Enter Password" />
                                            <span className="password-icon">
                                                <img src={eye} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="remember-innr">
                                <label className="checkbox-container">Remember Me
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <Link to="/" className="forgot-password">Forgot Password?</Link>
                            </div>
                            <div className="text-center mt-40">
                                <Link to="/" className="btn btn-secondary sm">Login <span><img src={rightArrow} alt="" /></span></Link>
                            </div>
                        </div>
                    </form>
                </div>
                <SubFooter />
            </div>
            <LeftPanel title="“Price is what you pay. Value is what you get.”" subtitle="Warren Buffett" img={loginImg} />
        </section>
    )
};

export default Login;
