import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Service from "./pages/service";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />  {/* Make sure Navbar is inside BrowserRouter */}
    
    <Routes>
      <Route index element={<Home />} />  {/* Home route */}
      <Route path="/Services" element={<Service />} />  {/* Service route */}
      <Route path="/*" element={<Home />} /> 


    </Routes>
    
    <Footer />  {/* Make sure Footer is inside BrowserRouter */}
  </BrowserRouter>
  );
};

export default App;
