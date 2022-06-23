import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import Header from '../components/common/Header'
import StaticContents from '../components/common/StaticHeading'
import StaticRowOne from '../components/common/StaticRowOne'
import TopDesign from '../components/common/TopDesign'
import Footer from '../components/common/Footer'
import { useNavigate } from 'react-router-dom'


function Home() {
  const [token, setToken] = useState('')

  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('usertoken')
    setToken(token);
  }, [token]) 

  if(token){
    navigate('/home')
  }
  
  return (
    <Grid container>
      <TopDesign />
      <Header />
      <Box sx={{ margin: '9% auto' }}>
        <StaticContents />
      </Box>
      <StaticRowOne sx={{ width: '100%', margin: '10 auto' }} />
      <Footer />
    </Grid>
  )
}

export default Home