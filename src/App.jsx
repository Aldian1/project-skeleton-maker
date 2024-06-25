import { CardVoice } from "./components/card-voice";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HumePage from "./pages/hume";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center h-screen bg-background">
        <nav className="w-full bg-gray-800 p-4">
          <ul className="flex justify-around text-white">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/hume">Hume</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<CardVoice />} />
          <Route path="/hume" element={<HumePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;