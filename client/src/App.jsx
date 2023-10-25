import { Outlet } from "react-router-dom";
import SideNavbar from "./components/SideNavbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SideNavbar />
      <Outlet />
    </div>
  );
}

export default App;
