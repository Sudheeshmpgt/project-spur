import { Box, Grid } from '@mui/material'
import React from 'react'
import Header from '../components/common/Header'
import JoinNow from '../components/common/JoinNow'
import TopDesign from '../components/common/TopDesign'

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