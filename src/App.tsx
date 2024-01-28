import { Routes, Route, useLocation } from "react-router-dom";
//importing react slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { animateScroll } from "react-scroll";
import NavBar from "./components/organs/NavBar";
import Home from "./components/pages/Home";
import Mobile_Development from "./components/pages/MobileDevelopment";
import Software from "./components/pages/Software Development";
import Consulting from "./components/pages/Consulting";
import ERP from "./components/pages/ERP";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../reduxToolkit/hooks";
import { getClients } from "../reduxToolkit/features/tbcClients/clientSlice";
import Footer from "./components/organs/Footer";

function App() {
  const dispatch = useAppDispatch();
  const directory = useLocation();

  const client = useAppSelector((state) => state.client.clientData);
  console.log("🚀 ~ file: App.tsx:18 ~ App ~ client:", client);

  useEffect(() => {
    dispatch(getClients());
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);

  return (
    <div className="w-full bg-white bg-opacity-90  text-gray-950 font-poppins">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/Mobile Application Development" element={<Mobile_Development/>}/>
        <Route path="/services/Software Development" element={<Software/>}/>
        <Route path="/services/Technology Consultancy" element={<Consulting/>}/>
        <Route path="/services/ERP system" element={<ERP/>}/>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
