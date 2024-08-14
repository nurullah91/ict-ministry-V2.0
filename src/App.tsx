import { Outlet } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar";
import TopActions from "./Components/TopActions";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="max-w-screen-lg w-11/12 mx-auto">
      <TopActions />
      <Hero />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
