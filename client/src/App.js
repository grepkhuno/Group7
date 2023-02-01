import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import DeveloperList from "./components/developerList";
import RegisterForm from "./components/Register";
import Summary from "./components/Summary";

import PersonalInfo from "./components/personalInfo";

import ContactInfo from "./components/contactInfo";
import Jobs from "./components/jobsAvailable";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/devlist" element={<DeveloperList />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/contactinfo" element={<ContactInfo />} />
          <Route path="/jobavailable" element={<Jobs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
