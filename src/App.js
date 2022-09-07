import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Browse, Home, Series, Moovie, MyList } from "./pages";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/browse/series" element={<Series />} />
          <Route path="/browse/films" element={<Moovie />} />
          <Route path="/browse/my-list" element={<MyList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
