import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import DeveloperList from "./components/developerList";
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
