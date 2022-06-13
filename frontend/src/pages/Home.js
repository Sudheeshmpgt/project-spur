import React from 'react'
import { Box, Grid } from '@mui/material'
import Header from '../components/Header'
import StaticContents from '../components/StaticHeading'
import StaticRowOne from '../components/StaticRowOne'
import TopDesign from '../components/TopDesign'
import Footer from '../components/Footer'


function Home() {
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