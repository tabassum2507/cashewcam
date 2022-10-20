import AnimationPage from "./pages/AnimationPage/AnimationPage";
import Cam from "./pages/Camera/Cam";
import Home from "./pages/Home/Home";
import Report from "./pages/Report/Report";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (


    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Animation" element={<AnimationPage />} />
        <Route path="/Camera" element={<Cam />} />
        <Route path="/Report" element={<Report />} />
      </Routes>
    </div>

      
  );
}

export default App;
