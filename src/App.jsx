// import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blogs from "./pages/blogs";
import LetsFun from "./pages/letsFun";
import YourMock from "./pages/yourMock";
import Login from "./pages/login";

import MockBanner from "./components/mockBanner";

const App = () => {
  return (
    <BrowserRouter>
      <MockBanner />
      <Navbar />

      <Routes>
        <Route path="/yourmock" element={<YourMock />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/letsfun" element={<LetsFun />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
