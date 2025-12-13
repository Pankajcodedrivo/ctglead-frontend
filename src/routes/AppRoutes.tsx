import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "../pages/home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../pages/auth/Login/Login";
import VerifyEmail from "../pages/auth/Login/VerifyEmail"
import VerifySecurityCode from "../pages/auth/Login/VerifySecurityCode"

export default function AppRoutes() {
  const location = useLocation();
  const showHeaderFooter = location.pathname === "/";
  return (
    <>
    {/* home */}
      {showHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {showHeaderFooter && <Footer />}

      {/* login */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/verify-security-code" element={<VerifySecurityCode />} />
      </Routes>
    </>
  );
}