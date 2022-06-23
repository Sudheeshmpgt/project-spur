import React from 'react'
import {Grid} from '@mui/material'
import Header from '../components/common/Header'
import TopDesign from '../components/common/TopDesign'
import ProfileDesign from '../components/user/ProfileDesign'

function Profile() {
  return (
    <Grid>
        <Header/>
        <TopDesign />
        <ProfileDesign/>
    </Grid>
  )
}

export default Profile