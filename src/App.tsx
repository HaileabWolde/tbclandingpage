import { Routes, Route, useLocation } from "react-router-dom";
//importing react slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { animateScroll } from "react-scroll";
import NavBar from "./components/organs/NavBar";
import Home from "./components/pages/Home";
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
    <div className="w-full bg-[#F5F5F5] bg-opacity-50  text-gray-950 font-poppins">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
