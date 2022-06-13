import { Box, Grid } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import Login from '../components/Login'
import TopDesign from '../components/TopDesign'

function LoginPage() {
    return (
        <Grid container>
            <Header />
            <TopDesign />
            <Box width='100%'>
                <Login />
            </Box>
        </Grid>
    )
}

export default LoginPage