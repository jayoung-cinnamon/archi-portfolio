import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../shared/App";
import { AboutMain, Awards, Main } from "../pages";
import { ThreeDModeling } from "../pages";
import { GraphicPage } from "../pages";
import Contact from "../components/contact/Contact";
const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/graphics" element={<ThreeDModeling />}></Route>
      <Route path="/graphicpage" element={<GraphicPage />}></Route>
      <Route path="/awards" element={<Awards />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<AboutMain />}></Route>
    </Routes>
  </BrowserRouter>
);

export default Root;
