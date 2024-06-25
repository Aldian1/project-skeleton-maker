import { CardVoice } from "./components/card-voice";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <nav className="mb-4">
        <Link to="/hume" className="text-blue-500 hover:underline">
          Go to Hume Page
        </Link>
      </nav>
      <CardVoice />
    </div>
  );
}
export default App;