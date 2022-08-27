import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';

export interface IApplicationProps {};

const Application: React.FC<IApplicationProps> = (props) => {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/login' element={<LoginPage />} />
  </Routes>
  </BrowserRouter>;
}

export default Application