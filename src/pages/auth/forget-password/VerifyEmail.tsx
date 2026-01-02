import { Link } from "react-router-dom";
import rightArrow from "../../../assets/images/right-arrow-long.svg"
import LeftPanel from "../../../components/LeftPanel";
import SubFooter from "../../../components/SubFooter";
import SubHeader from "../../../components/SubHeader";
import img2 from "../../../assets/images/img-2.png"

const Login = () => {
    return (
        <section className="auth-wrapper">
            <div className="right-panel">
                <div className="form-top">
                    <SubHeader />
                    <form action="">
                        <div className="auth-form">
                            <div className="mb-40">
                                <h4>Security Code</h4>
                                <p>We’ve sent a security code to your email address. Please check your inbox and enter the code below to continue.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group mb-0">
                                        <label className="form-label float">Email Address *</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-40">
                                <Link to="/" className="btn btn-secondary sm">Send Security Code <span><img src={rightArrow} alt="" /></span></Link>
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

export default Login;
