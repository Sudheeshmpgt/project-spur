import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage';
import JoinNowPage from './pages/JoinNowPage';
import UserHome from './pages/UserHome';
import Profile from './pages/ProfilePage';
import Messenger from './pages/MessengerPage';
import InterviewRequestPage from './pages/InterviewRequestPage';
import UserNotification from './pages/userNotification';
import PaymentPage from './pages/PaymentPage';
import UserUpcommingPage from './pages/UserUpcommingPage';
import InterviewerUpcommingPage from './pages/InterviewerUpcommingPage';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<JoinNowPage />} />
        <Route path='/home' element={<UserHome/>} />
        <Route path='/profile' element={<Profile/>} /> 
        <Route path='/messenger' element={<Messenger/>} /> 
        <Route path='/requests' element={<InterviewRequestPage/>} /> 
        <Route path='/notifications' element={<UserNotification/>} />
        <Route path='/payment' element={<PaymentPage/>} />
        <Route path='/upcomming' element={<UserUpcommingPage/>} />
        <Route path='/upcommings' element={<InterviewerUpcommingPage/>} />
      </Routes>
  );
}

export default App;
