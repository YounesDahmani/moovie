import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Browse, Series, Moovie, Search } from "./pages";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Browse />} />
          <Route exact path="/browse" element={<Browse />} />
          <Route exact path="/series" element={<Series />} />
          <Route exact path="/films" element={<Moovie />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
