import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Coursedetail from "./pages/Coursedetail";
import Components from "./components/Components";
import Coursepreview from "./pages/Coursepreview";
import Dashboard from "./pages/Dashboard";
import Course from "./pages/Course";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Verify from "./pages/auth/verify"
import ForgetPassword from "./pages/auth/ForgetPassword"

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  // console.log(isAuth);

  useEffect(() => {
    // Check if current path is /coursepreview
    if (location.pathname === "/coursepreview") {
      setShowHeaderFooter(false);
    } else {
      setShowHeaderFooter(true);
    }
  }, [location.pathname]);
  // console.log(location.pathname);
  return (
    <>
      {showHeaderFooter && <Header isAuth={isAuth}/>}
      <Routes>
        <Route path="/" element={<Components />} />
        <Route path="/coursedetail" element={<Coursedetail />} />
        <Route path="/course" element={<Course />} />
        <Route path="/coursepreview" element={<Coursepreview />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={isAuth ? <Components /> : <Login  setIsAuth={setIsAuth}/>} />
        <Route path="/register" element={isAuth ? <Components /> :<Register />} />
        <Route path="/verify" element={isAuth ? <Components /> :<Verify />} />
        <Route path="/forgetPassword" element={isAuth ? <Components /> :<ForgetPassword />} />
      </Routes>
      {showHeaderFooter && <Footer />}
    </>
  );
}

export default App;


