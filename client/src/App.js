import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import DeveloperList from "./components/developerList";
import RegisterForm from "./components/Register";
import PersonalInfo from "./components/personalInfo";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/devlist" element={<DeveloperList/>} />
          <Route path="/register" element={<RegisterForm/>} />
          <Route path="/user/:id" element={<PersonalInfo/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
