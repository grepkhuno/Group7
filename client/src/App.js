import Jobs from "./components/jobsAvailable";
import ContactInfo from "./components/contactInfo";
import Summary from "./components/summary";
import Tools from "./components/tools";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/findjobs" element={<Jobs />} />
            <Route path="/contactinfo/:id" element={<ContactInfo />} />
            <Route path="/summary/:id" element={<Summary />} />
            <Route path="/tools/:id" element={<Tools />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
