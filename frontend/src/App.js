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
import InterviewManagementPage from './pages/InterviewManagementPage';
import InterviewerReportPage from './pages/InterviewerReportPage';
import AdminLoginPage from './pages/Admin/AdminLoginPage';
import AdminRegisterPage from './pages/Admin/AdminRegisterPage';
import AdminDashboardPage from './pages/Admin/AdminDashboardPage';
import ManageUserPage from './pages/Admin/ManageUserPage';
import UpdateUserPage from './pages/Admin/UpdateUserPage';
import ManageInterviewerPage from './pages/Admin/ManageInterviewerPage';
import UpdateInterviewerPage from './pages/Admin/UpdateInterviewerPage';


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
        <Route path='/interview/management' element={<InterviewManagementPage/>} />
        <Route path='/report' element={<InterviewerReportPage/>} />
        <Route path='/admin/login' element={<AdminLoginPage/>} />
        <Route path='/admin/register' element={<AdminRegisterPage/>} />
        <Route path='/admin/dashboard' element={<AdminDashboardPage/>} />
        <Route path='/admin/user' element={<ManageUserPage/>} />
        <Route path='/admin/user/update' element={<UpdateUserPage/>} />
        <Route path='/admin/interviewer' element={<ManageInterviewerPage/>}/>
        <Route path='/admin/interviewer/update' element={<UpdateInterviewerPage/>}/>
      </Routes>
  );
}

export default App;
