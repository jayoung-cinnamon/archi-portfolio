import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../shared/App";
import { Main } from "../pages";
import { ThreeDModeling } from "../pages";

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/graphics" element={<ThreeDModeling />}></Route>
    </Routes>
  </BrowserRouter>
);

export default Root;
