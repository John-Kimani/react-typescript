import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import firebaseApp from './config/config'
import AuthRoute from './component/AuthRoute'

export interface IApplicationProps {};

const Application: React.FC<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AuthRoute>
        <HomePage />
      </AuthRoute>} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Application