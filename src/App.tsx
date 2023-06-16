import { Router } from "./routes/Router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <div className="container d-flex justify-content-between flex-column px-4 px-sm-0">
        {pathname.substring(0, 7) != "/search" && <Navbar />}

        <Router />
        <Footer />
      </div>
    </>
  );
}

export default App;
