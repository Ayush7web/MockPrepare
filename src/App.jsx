// import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/blogs";
import LetsFun from "./pages/letsFun";
import YourMock from "./pages/yourMock";
import Login from "./pages/login";
import AppLayout from "./pages/AppLayout";
import PhysicsMock from "./pages/PhysicsMock";
import ChemistryMock from "./pages/ChemistryMock";
import MathsMock from "./pages/MathsMock";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* child component ke inner koi component call karege bhi to / remove kar dege */}
          <Route path="/yourmock" element={<YourMock />} />
          <Route path="physics" element={<PhysicsMock />} />
          <Route path="chemistry" element={<ChemistryMock />} />
          <Route path="maths" element={<MathsMock />} />

          <Route path="/blogs" element={<Blogs />} />
          <Route path="/letsfun" element={<LetsFun />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
