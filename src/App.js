import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import HomePage from "./componentes/Home";
import RestaurantDetailsPage from "./componentes/Restaurant";
import ConfirmationPage from "./componentes/Confirmation";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/detalhes/:id" element={<RestaurantDetailsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/confirmacao" element={<ConfirmationPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
