import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../shared/App";
import { AboutMain, Awards, Main, Triangle } from "../pages";
import { ThreeDModeling } from "../pages";
import { WorkPage } from "../pages";
import Contact from "../components/contact/Contact";
import Madang from "../pages/Madang";
import Cube from "../pages/Cube";
import Allubium from "../pages/Allubium";
import Ssamzi from "../pages/Ssamzi";
import Sazik from "../pages/Sazik";
import Nest from "../pages/Nest";
import Buja from "../pages/Buja";
import Student from "../pages/Student";
import Facilleum from "../pages/Facileum";
const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/graphics" element={<ThreeDModeling />}></Route>
      <Route path="/works" element={<WorkPage />}></Route>
      <Route path="/awards" element={<Awards />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<AboutMain />}></Route>
      <Route path="/works/triangle" element={<Triangle />}></Route>
      <Route path="/works/madang" element={<Madang />}></Route>
      <Route path="/works/cube" element={<Cube />}></Route>
      <Route path="/works/allubium" element={<Allubium />}></Route>
      <Route path="/works/ssamzi" element={<Ssamzi />}></Route>
      <Route path="/works/sazik" element={<Sazik />}></Route>
      <Route path="/works/nest" element={<Nest />}></Route>
      <Route path="/works/buja" element={<Buja />}></Route>
      <Route path="/works/student" element={<Student />}></Route>
      <Route path="/works/facileum" element={<Facilleum />}></Route>
    </Routes>
  </BrowserRouter>
);

export default Root;
