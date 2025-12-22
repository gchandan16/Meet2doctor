import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "../pages/Aboutus";
import ContactUs from "../pages/Contactus";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Search from "../pages/Search";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import Home from "../pages/Home.jsx";
import TermsAndConditions from "../pages/Termsandconditions.jsx";
import PrivacyPolicy from "../pages/Privacypolicy.jsx";
import DoctorDetail from "../pages/DoctorDetail.jsx";
import PageNotFound from "../components/layout/PageNotFound.jsx";
import Profile from "../pages/Profile.jsx";
import GuestRoute from "./GuestRoute.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/register" element={ <GuestRoute><Register /></GuestRoute>} />
          <Route path="/login" element={  <GuestRoute><Login /></GuestRoute>} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/search" element={<Search />} />
          <Route path="/doctordetail" element={<DoctorDetail />} />
          <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>} />
          <Route path="/:type/:keyword" element={<Search />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
