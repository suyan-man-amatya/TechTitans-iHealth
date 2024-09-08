import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "mapbox-gl/dist/mapbox-gl.css";

import Landing from "./components/landing/Landing";
import CareCenter from "./components/landing/CareCenter";

import SignIn from "./log/SignIn";
import SignUp from "./log/SignUp";
import DocLog from "./log/DocLog";
import Admin from "./log/Admin";
import Pharma from "./log/Pharma";

import Footer from "./layouts/Footer";
import NavBar from "./layouts/NavBar";
import About from "./components/landing/About";
import Dashboard from "./components/admindashboard/Dashboard";
import Appoinment from "./components/admindashboard/Appoinment";
import Users from "./components/admindashboard/Users";
import Ambulance from "./components/admindashboard/Ambulance";
import Billing from "./components/admindashboard/Billing";
import Email from "./components/admindashboard/Email";
import Messages from "./components/admindashboard/Message";
import Setting from "./components/admindashboard/Setting";
import Help from "./components/admindashboard/help";
import Ddashboard from "./components/Doctorsdashboard/Ddashboard";
import Dappoinment from "./components/Doctorsdashboard/Dappoinment";
import Salary from "./components/Doctorsdashboard/Salary";
import Demail from "./components/Doctorsdashboard/Demail";
// import Demail from "./components/Doctorsdashboard/Demail";
import Dmessage from "./components/Doctorsdashboard/Dmessage";
import Dsetting from "./components/Doctorsdashboard/Dsetting";
import Dhelp from "./components/Doctorsdashboard/Dhelp";
import PharmacyDashboard from "./components/Pharmadashboard/Phardashboard";
import Medicinelist from "./components/Pharmadashboard/Pharmedicine";
import PharSetting from "./components/Pharmadashboard/Pharsetting";
import Pdashboard from "./components/Patientdashboard/Pdashboard";
import Pappoinment from "./components/Patientdashboard/Pappoinment";
import Pemail from "./components/Patientdashboard/Pemail";
import Pmessages from "./components/Patientdashboard/Pmessage";
import Psettings from "./components/Patientdashboard/Psettings";
import Phelp from "./components/Patientdashboard/Phelp";
import Addmedicine from "./components/Pharmadashboard/Addmedicine";
import Pambulance from "./components/Patientdashboard/Pambulance";
import Preports from "./components/Patientdashboard/Preports";
import Drep from "./components/Doctorsdashboard/Drep";
import Blood from "./components/admindashboard/Blood";
import PreLoader from "./components/PreLoader";

function App() {
  return (
    <div>
      {/* <PreLoader /> */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/carecenter" element={<CareCenter />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/docsignup" element={<DocLog />} />
          <Route path="/adminsignup" element={<Admin />} />
          <Route path="/blood" element={<Blood />} />
          <Route path="/pharmasignup" element={<Pharma />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/phardashboard" element={<PharmacyDashboard />} />
          <Route path="/pharsettings" element={<PharSetting />} />
          <Route path="/addmedicine" element={<Addmedicine />} />
          <Route path="/pharmedicine" element={<Medicinelist />} />
          <Route path="/ddashboard" element={<Ddashboard />} />
          <Route path="/pdashboard" element={<Pdashboard />} />
          <Route path="/dappointment" element={<Dappoinment />} />
          <Route path="/appointment" element={<Appoinment />} />
          <Route path="/pappointment" element={<Pappoinment />} />
          <Route path="/ambulance" element={<Ambulance />} />
          <Route path="/pambulance" element={<Pambulance />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/email" element={<Email />} />
          <Route path="/demail" element={<Demail />} />
          <Route path="/pemail" element={<Pemail />} />
          <Route path="/preports" element={<Preports />} />
          <Route path="/preports" element={<Preports />} />
          <Route path="/dreport" element={<Drep />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/dmessages" element={<Dmessage />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/dsettings" element={<Dsetting />} />
          <Route path="/psettings" element={<Psettings />} />
          <Route path="/pmessages" element={<Pmessages />} />
          <Route path="/help" element={<Help />} />
          <Route path="/dhelp" element={<Dhelp />} />
          <Route path="/phelp" element={<Phelp />} />

          <Route path="/carecenter" element={<CareCenter />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
