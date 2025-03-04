import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<label>test</label>} />
      </Routes>
    </Router>
  );
}

export default App;
