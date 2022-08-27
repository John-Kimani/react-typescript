import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutComponent from "./components/Layout";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

export interface IApplicationProps {}

const Application: React.FC<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about">
          <Route index element={<AboutPage />} />
          <Route path=":number" element={<AboutPage />} />
        </Route>
        <Route path="/layout" element={<LayoutComponent />}>
          <Route index element={<AboutPage />} />
          <Route path=":number" element={<AboutPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Application;
