import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../pages/auth/Login/Login";
import VerifyEmail from "../pages/auth/forget-password/VerifyEmail";
import VerifySecurityCode from "../pages/auth/forget-password/VerifySecurityCode";
import Dashboard from "../pages/Dashboard";
import MyLeads from "../pages/MyLeads";
import MyQuotes from "../pages/MyQuotes";
import SellPolicy from "../pages/SellPolicy";
import ProfileDetails from "../pages/ProfileDetails";
import MyQuotesDetails from "../pages/MyQuotesDetails";
import QuotesCondo from "../pages/QuotesCondo";
import QuotesLandlord from "../pages/QuotesLandlord";
import QuotesLife from "../pages/QuotesLife";
import QuotesRenters from "../pages/QuotesRenters";
import Messages from "../pages/Messages";
import AgencyReports from "../pages/AgencyReports";
import TeamManagement from "../pages/TeamManagement";
import AuthLayout from "../layout/AuthLayout";
import Support from "../pages/Support";
import Notifications from "../pages/Notifications";
import MyAccount from "../pages/myAccount/MyAccount";
import Security from "../pages/Security";
import Settings from "../pages/Settings";
import Modal from "../pages/Modal";

export default function AppRoutes() {
  const location = useLocation();
  const showHeaderFooter = location.pathname === "/";

  return (
    <>
      {showHeaderFooter && <Header />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/verify-security-code" element={<VerifySecurityCode />} />

        {/* Protected Routes */}
        <Route element={<AuthLayout />}>
        {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-leads" element={<MyLeads />} />
          <Route path="/my-quotes" element={<MyQuotes />} />
          <Route path="/sell-policy" element={<SellPolicy />} />
          <Route path="/profile-details" element={<ProfileDetails />} />
          <Route path="/my-quotes-details" element={<MyQuotesDetails />} />
          <Route path="/quotes-condo" element={<QuotesCondo />} />
          <Route path="/quotes-landlord" element={<QuotesLandlord />} />
          <Route path="/quotes-life" element={<QuotesLife />} />
          <Route path="/quotes-renters" element={<QuotesRenters />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/agency-reports" element={<AgencyReports />} />
          <Route path="/team-management" element={<TeamManagement />} />
           {/* other screen */}
          <Route path="/support" element={<Support />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/security" element={<Security />} />
          <Route path="/settings" element={<Settings />} />
          {/* modal */}
          <Route path="/modal" element={<Modal />} />
        </Route>
      </Routes>
      {showHeaderFooter && <Footer />}
    </>
  );
}
