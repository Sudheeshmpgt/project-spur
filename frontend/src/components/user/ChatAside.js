import { Avatar, Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

function ChatAside() {
    return (
        <Grid container>
            <Box width='100%'>
                <Paper sx={{ m: '80px auto', elevalation: 10, borderRadius: '15px', width: '72%', }}>
                    <Box sx={{ width: '100%', height: 480, backgroundColor: 'secondary.main', borderRadius: '15px' }}>
                        <Box sx={{ width: '100%', height: 80, backgroundColor: 'white', borderRadius: '15px 15px 0 0' }}></Box>
                        <Paper elevation={5} sx={{ width: '80%', height: 70, m: '-45px auto', borderRadius: '10px' }} >
                            <Box sx={{ width: '100%', height: 70, backgroundColor: 'primary.main', borderRadius: '10px' }}>
                            </Box>
                            <Typography textAlign='center' fontSize={{ sm: '1.25rem' }} fontWeight={500} sx={{ color: 'text.primary', mt: -6 }}>
                                Messaging
                            </Typography>
                        </Paper>
                        <Box width='100%' sx={{ mt: "70px" }}></Box>
                        <Box width='90%' m='0px auto'>
                            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', m: '25px auto' }} >
                                <Box width='35%'>
                                    <Avatar sx={{ width: 50, height: 50, m:'0 auto' }}></Avatar>
                                </Box>
                                <Box width='65%' borderBottom={1} borderColor='rgba(0, 0, 0, 0.38)'>
                                    <Typography fontSize={{ sm: '1rem' }} mt={2} >Networks</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', m: '25px auto' }} >
                                <Box width='35%'>
                                    <Avatar sx={{ width: 50, height: 50, m:'0 auto' }}></Avatar>
                                </Box>
                                <Box width='65%' borderBottom={1} borderColor='rgba(0, 0, 0, 0.38)'>
                                    <Typography fontSize={{ sm: '1rem' }} mt={2} >Networks</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', m: '25px auto' }} >
                                <Box width='35%'>
                                    <Avatar sx={{ width: 50, height: 50, m:'0 auto' }}></Avatar>
                                </Box>
                                <Box width='65%' borderBottom={1} borderColor='rgba(0, 0, 0, 0.38)'>
                                    <Typography fontSize={{ sm: '1rem' }} mt={2} >Networks</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Grid>
    )
}

export default ChatAside