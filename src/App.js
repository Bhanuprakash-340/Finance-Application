import LeftMenuBar from "./components/LeftMenuBar";
import TopMenuBar from "./components/TopMenuBar";
import CenterDashboard from "./components/CenterDashboard";

import "./App.css";
import RightDashBoard from "./components/RightDashboard";

function App() {
  return (
    <div className="app-container">
      <LeftMenuBar />
      <TopMenuBar />
      <CenterDashboard />
      <RightDashBoard />
    </div>
  );
}

export default App;
