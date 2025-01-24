import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />  {/* Make sure Navbar is inside BrowserRouter */}
    
    <Routes>
      <Route index element={<Home />} />  {/* Home route */}


    </Routes>
    
    <Footer />  {/* Make sure Footer is inside BrowserRouter */}
  </BrowserRouter>
  );
};

export default App;
