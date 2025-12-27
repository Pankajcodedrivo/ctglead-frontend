import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "../pages/home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../pages/auth/Login/Login";
import VerifyEmail from "../pages/auth/Login/VerifyEmail"
import VerifySecurityCode from "../pages/auth/Login/VerifySecurityCode"
import MyProfile from "../pages/MyProfile";
import MyLeads from "../pages/MyLeads";
import MyQuotes from "../pages/MyQuotes";
import SellPolicy from "../pages/SellPolicy";
import ProfileDetails from "../pages/ProfileDetails";
import MyQuotesDetails from "../pages/MyQuotesDetails";

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
        {/* my profile */}
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-leads" element={<MyLeads />} />
        <Route path="/my-quotes" element={<MyQuotes />} />
        <Route path="/sell-policy" element={<SellPolicy />} />
        <Route path="/profile-details" element={<ProfileDetails />} />
        <Route path="/my-quotes-details" element={<MyQuotesDetails />} />
      </Routes>
      
    </>
  );
}