import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Browse, Home, Series, Moovie, MyList } from "./pages";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/browse" element={<Browse />} />
          <Route exact path="/series" element={<Series />} />
          <Route exact path="/films" element={<Moovie />} />
          <Route exact path="/my-list" element={<MyList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
