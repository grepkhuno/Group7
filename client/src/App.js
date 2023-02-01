import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import DeveloperList from "./components/developerList";
import RegisterForm from "./components/Register";
import Summary from "./components/summary";
import PersonalInfo from "./components/personalInfo";
import ContactInfo from "./components/contactInfo";
import Jobs from "./components/jobsAvailable";
import Tools from "./components/tool";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/devlist" element={<DeveloperList />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/summary/:id" element={<Summary />} />
          <Route path="/contactinfo" element={<ContactInfo />} />
          <Route path="/jobavailable" element={<Jobs />} />
          <Route path="/user/:id" element={<PersonalInfo />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/contact/:id" element={<ContactInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
