import { Box, Grid } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import JoinNow from '../components/JoinNow'
import TopDesign from '../components/TopDesign'

function JoinNowPage() {
    return (
        <Grid container>
            <Header />
            <TopDesign />
            <Box width='100%'>
                <JoinNow />
            </Box>
        </Grid>
    )
}

export default JoinNowPage