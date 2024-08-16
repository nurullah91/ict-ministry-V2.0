import { Outlet } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar";
import TopActions from "./Components/TopActions";
import Hero from "./Components/Hero";
import Footer from "./Components/Shared/Footer";

function App() {
  return (
    <div className="max-w-screen-xl w-11/12 mx-auto overflow-hidden">
      <TopActions />
      <Hero />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
