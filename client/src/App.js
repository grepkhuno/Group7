import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import DeveloperList from "./components/DeveloperList";
import RegisterForm from "./components/Register";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/devlist" element={<DeveloperList/>} />
          <Route path="/register" element={<RegisterForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
