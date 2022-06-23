import { Box, Grid } from '@mui/material'
import React from 'react'
import Header from '../components/common/Header'
import Login from '../components/common/Login'
import TopDesign from '../components/common/TopDesign'

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