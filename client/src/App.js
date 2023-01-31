import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import DeveloperList from "./components/developerList";
import RegisterForm from "./components/Register";
<<<<<<< HEAD
import PersonalInfo from "./components/personalInfo";

=======
import ContactInfo from "./components/contactInfo";
>>>>>>> 1e90626c3bf68b8e1b98d14b0ba823674090407a


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/devlist" element={<DeveloperList/>} />
          <Route path="/register" element={<RegisterForm/>} />
<<<<<<< HEAD
          <Route path="/user/:id" element={<PersonalInfo/>} />
=======
          <Route path="/contact" element={<ContactInfo/>} />

>>>>>>> 1e90626c3bf68b8e1b98d14b0ba823674090407a
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
