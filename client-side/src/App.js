import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import HomePage from "./pages/homePage/HomePage";

import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Fragment>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
