import { Box, Grid, Paper } from '@mui/material'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import TopDesign from '../components/TopDesign'
import Aside from '../components/user/Aside'
import ChatAside from '../components/user/ChatAside'
import CreatePost from '../components/CreatePost'
import Posts from '../components/Posts'
import '../components/Scroll.css'
import { useSelector } from 'react-redux'
import InterAside from '../components/interviewer/InterAside'
import { useNavigate } from 'react-router-dom'

function UserHome() {
  const user = useSelector(state => state.userData.value)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("usertoken")
    if (!token) {
      navigate('/')
    }
  }, [navigate])
  return (
    <Grid>
      <Header />
      <TopDesign />
      {
        user.interviewer ?
          (
            <Box sx={{ width: '100%', display: 'flex', backgroundColor: '', justifyContent: 'space-evenly' }}>
              <Box sx={{ width: '25%', display: 'flex', ml: 'auto', mr: 'auto' }}>
                <InterAside />
              </Box>
              <Box sx={{ width: '50%', height: 'auto', display: 'flex', flexDirection: 'column' }}>
                <CreatePost />
                <Box className='scrollbar-hidden' width='100%' sx={{ mt: -7.5, overflow: 'scroll' }}>
                  <Posts />
                </Box>
              </Box>
              <Box sx={{ width: '25%' }}>
                <ChatAside />
              </Box>
            </Box>
            ) : (
             <Box sx={{ width: '100%', display: 'flex', backgroundColor: '', justifyContent: 'space-evenly' }}>
               <Box sx={{ width: '25%', display: 'flex', ml: 'auto', mr: 'auto' }}>
                 <Aside />
               </Box>
               <Box sx={{ width: '50%', height: 'auto', display: 'flex', flexDirection: 'column' }}>
                 <CreatePost />
                 <Box className='scrollbar-hidden' width='100%' sx={{ mt: -7.5, overflow: 'scroll' }}>
                   <Posts />
                 </Box>
               </Box>
               <Box sx={{ width: '25%' }}>
                 <ChatAside />
               </Box>
             </Box>
           )
       } 
    </Grid>
  )
}

export default UserHome 