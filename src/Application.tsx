import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'

export interface IApplicationProps {};

const Application: React.FC<IApplicationProps> = (props) => {
  return <BrowserRouter>
  <Routes>
    
  </Routes>
  </BrowserRouter>;
}

export default Application