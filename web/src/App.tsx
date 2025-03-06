import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/header";
import Home from "./pages/home";
import Members from "./pages/members";
import Socials from "./pages/socials";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/members" element={<Members/>}/>
        <Route path="/members/:memberName" element={<Members />} />
      </Routes>
    </Router>
  );
}

export default App;