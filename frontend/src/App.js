import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage';
import JoinNowPage from './pages/JoinNowPage';
import UserHome from './pages/UserHome';
import Profile from './pages/Profile';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<JoinNowPage />} />
        <Route path='/home' element={<UserHome/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
  );
}

export default App;