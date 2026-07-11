// import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/blogs";
import LetsFun from "./pages/letsFun";
import YourMock from "./pages/yourMock";
import Login from "./pages/login";
import AppLayout from "./pages/AppLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/yourmock" element={<YourMock />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/letsfun" element={<LetsFun />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
