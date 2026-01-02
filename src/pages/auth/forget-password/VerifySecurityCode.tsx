import { Link } from "react-router-dom";
import LeftPanel from "../../../components/LeftPanel";
import SubFooter from "../../../components/SubFooter";
import SubHeader from "../../../components/SubHeader";
import img3 from "../../../assets/images/img-3.png"
const Login = () => {
    return (
        <section className="auth-wrapper">
            <div className="right-panel">
                <div className="form-top">
                    <SubHeader />
                    <form action="">
                        <div className="auth-form">
                            <div className="mb-40">
                                <h4>Enter Security Code</h4>
                                <p>Check your email for the 4-digit security code and enter it below to continue.</p>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-center security-code">
                                        <div className="otp-container">
                                            <input type="text" placeholder="1" maxLength={1} className="otp-input" />
                                            <input type="text" placeholder="1" maxLength={1} className="otp-input" />
                                            <input type="text" placeholder="1" maxLength={1} className="otp-input" />
                                            <input type="text" placeholder="1" maxLength={1} className="otp-input" />
                                        </div>
                                        <p>We sent a code to sele <span>*************</span>@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-40">
                                <Link to="/" className="btn btn-secondary sm">Verify Code</Link>
                            </div>
                            <ul className="resend-code">
                                <li><Link to="/">Resend Code</Link></li>
                                <li><Link to="/">Get Help</Link></li>
                            </ul>
                        </div>
                    </form>
                </div>
                <SubFooter />
            </div>
            <LeftPanel title="We’re setting the standard for what insurance tech should look like." subtitle="Selena, Founder of CTG Quotes" img={img3} />
        </section>
    )
};

export default Login;
