import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainImages from './Components/MainPage/MainImages/MainImages'
import AuthContext from './contexts/AuthContext'
import MainLayout from './layouts/MainLayout'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <AuthContext>
      <MainLayout />
      <MainImages />
      <Footer />
    </AuthContext>
    </BrowserRouter>
  )
}

export default App
