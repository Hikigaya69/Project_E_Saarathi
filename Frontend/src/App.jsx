import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CaptainHome from './pages/CaptainHome'
import CaptainLogin from './pages/CaptainLogin'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/home'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserLogout from './pages/UserLogout'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserSIgnup from './pages/UserSIgnup'
const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/UserSignup" element={<UserSIgnup />} />
        <Route path="/CaptainLogin" element={<CaptainLogin />} />
        <Route path="/CaptainSignup" element={<CaptainSignup />} />
        <Route path="/home" element={
          <UserProtectWrapper>
            <Home/>
          </UserProtectWrapper>
        } />

<Route path="/users/logout" element={
          <UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
        } />

        <Route path="/captain/home" element={<CaptainProtectWrapper>
          <CaptainHome />
        </CaptainProtectWrapper>} />

      </Routes>
    </div>
  )
}

export default App
