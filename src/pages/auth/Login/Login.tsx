import { Link } from "react-router-dom";
import rightArrow from "../../../assets/images/right-arrow-long.svg"
import LeftPanel from "../../../components/LeftPanel";
import SubFooter from "../../../components/SubFooter";
import SubHeader from "../../../components/SubHeader";
import eye from "../../../assets/images/eye-off.svg"
import eyeOn from "../../../assets/images/eye-on.jpeg"
import loginImg from "../../../assets/images/login-img.png"
import Input from "../../../components/UI/input/Input";
import { useState } from "react";
import { useLogin } from "./useLogin";

const Login = () => {
  const { loginFormik } = useLogin();
  const [remember, setRemember] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <section className="auth-wrapper">
      <div className="right-panel">
        <div className="form-top">
          <SubHeader />

          <form onSubmit={loginFormik.handleSubmit}>
            <div className="auth-form">

              {/* Header */}
              <div className="mb-40 lead-top">
                <div className="lead-top-left">
                  <h4>Welcome Back!</h4>
                  <p>Enter your email and password to access your account.</p>
                </div>
              </div>

              {/* Inputs */}
              <div className="row">

                {/* Email */}
                <div className="col-lg-6">
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    label="Email Address *"
                    placeholder="Enter Email"
                    onChange={loginFormik.handleChange}
                    value={loginFormik.values.email}
                    errorMsg={loginFormik.errors.email}
                  />
                </div>

                {/* Password */}
                <div className="col-lg-6">
                  <Input
                    id="password"
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    label="Password *"
                    placeholder="Enter Password"
                    onChange={loginFormik.handleChange}
                    value={loginFormik.values.password}
                    errorMsg={loginFormik.errors.password}
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

              {/* Remember + Forgot */}
              <div className="remember-innr">
                <label className="checkbox-container">
                  Remember Me
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <span className="checkmark"></span>
                </label>

                <Link to="/verify-email" className="forgot-password">
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <div className="text-center mt-40">
                <button className="btn btn-secondary sm" type="submit">
                  Login <span><img src={rightArrow} alt="" /></span>
                </button>
              </div>

            </div>
          </form>
        </div>
        <SubFooter />
      </div>

      <LeftPanel
        title="Price is what you pay. Value is what you get."
        subtitle="Warren Buffett"
        img={loginImg}
      />
    </section>
  );
};
export default Login;
