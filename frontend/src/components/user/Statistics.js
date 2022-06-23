import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function Statistics() {
    return (
        <Grid container>
            <Box sx={{ width: '100%', display: 'flex',justifyContent:'space-around', m: '0 auto', }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection:'column', height:240 }}>
                    <Typography fontSize='1.1rem' fontWeight={600}>Networks</Typography>
                    <Typography fontSize='1.1rem' fontWeight={600}>Interviews</Typography>
                    <Typography fontSize='1.1rem' fontWeight={600}>Posts</Typography>
                    <Typography fontSize='1.1rem' fontWeight={600}>Pending</Typography>
                    <Typography fontSize='1.1rem' fontWeight={600}>Upcomming </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection:'column' }}>
                    <Typography fontSize='1.1rem' fontWeight={600} color='blue'>10</Typography>
                    <Typography fontSize='1.1rem' fontWeight={600} color='blue'>10</Typography>
                    <Typography fontSize='1.1rem' fontWeight={600} color='blue'>10</Typography>
                    <Typography fontSize='1.1rem' fontWeight={600} color='blue'>10</Typography>
                    <Typography fontSize='1.1rem' fontWeight={600} color='blue'>10</Typography>
                </Box>
            </Box>
        </Grid>
    )
}

export default Statistics