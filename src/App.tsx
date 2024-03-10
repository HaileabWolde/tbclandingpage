import { Routes, Route, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { animateScroll } from "react-scroll";
import NavBar from "./components/organs/Navbar/NavBar";
import Home from "./components/pages/Home/Home";
import Mobile_Development from "./components/pages/Mobile/MobileDevelopment";
import Software from "./components/pages/Software/Software Development";
import Consulting from "./components/pages/Consulting/Consulting";
import ERP from "./components/pages/ERP/ERP";
import Enginnering from "./components/pages/Engineering/Engineering";
import ManagingServices from "./components/pages/Services/Services";
import { useEffect } from "react";
import { useAppDispatch} from "../reduxToolkit/hooks";
import { getClients } from "../reduxToolkit/features/tbcClients/clientSlice";
import Footer from "./components/organs/Footer/Footer";

function App() {
  const dispatch = useAppDispatch();
  const directory = useLocation();

 // const client = useAppSelector((state) => state.client.clientData);
  

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
        <Route path="/services/It Consultancy & Training" element={<Consulting/>}/>
        <Route path="/services/ERP system" element={<ERP/>}/>
        <Route path="/services/Data Engineering" element={<Enginnering/>}/>
        <Route path="/services/Managing Services" element={<ManagingServices/>}/>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
