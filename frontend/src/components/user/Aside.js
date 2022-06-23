import { Avatar, Box, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Aside() {
    const navigate = useNavigate()
    const user = useSelector(state => state.userData.value)
    const [name, setName] = useState('')


    useEffect(() => {
        const token = localStorage.getItem("usertoken")
        if (!token) {
            navigate('/')
        } else {
            const name = localStorage.getItem('userName')
            const image = localStorage.getItem('userImg')
            const about = localStorage.getItem('userAbout')
            setName(name)
        }
    }, [])

    return (
        <Grid container>
            <Box width='100%'>
                <Paper sx={{ m: '80px auto', elevalation: 10, borderRadius: '15px', width: '72%' }}>
                    <Box sx={{ width: '100%', height: 480, backgroundColor: 'secondary.main', borderRadius: '15px' }}>
                        <Box sx={{ width: '100%', height: 80, backgroundColor: 'white', borderRadius: '15px 15px 0 0' }}></Box>
                        <Paper sx={{width:120, m:'0 auto', borderRadius:15}}>
                            <Avatar src={user && user.profileImg} sx={{ width: 120, height: 120, m: '-55px auto', elevation: 10 }} />
                        </Paper>
                        <Box width='90%' borderBottom={1} borderColor='rgba(0, 0, 0, 0.38)' m='0 auto' >
                            <Typography fontSize={{ sm: '1.1rem' }}
                                fontWeight={600}
                                mt='60px'
                                textAlign='center'
                                fontFamily='Poppins, sans-serif'>{user.name ? user.name : name}</Typography>
                            <Typography fontSize={{ sm: '0.9rem' }} color='#757575' textAlign='center' mb={1} >
                                {user && user.about}
                            </Typography>
                        </Box>
                        <Box width='90%' borderBottom={1} borderColor='rgba(0, 0, 0, 0.38)' m='0 auto'>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%', m: '0 auto' }} >
                                <Typography fontSize={{ sm: '1rem' }} mt={2}  >Networks</Typography>
                                <Typography fontSize={{ sm: '1rem' }} mt={2}  >100</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%', m: '0 auto' }} >
                                <Typography fontSize={{ sm: '1rem' }} mt={1} >Posts</Typography>
                                <Typography fontSize={{ sm: '1rem' }} mt={1} >10</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%', m: '0 auto' }} >
                                <Typography fontSize={{ sm: '1rem' }} mt={1} mb={1.5} >Interviews</Typography>
                                <Typography fontSize={{ sm: '1rem' }} mt={1} mb={1.5} >5</Typography>
                            </Box>
                        </Box>
                        <Box width='90%' m='0 auto'>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%', m: '0 auto' }} >
                                <Typography fontSize={{ sm: '1rem' }} mt={2} >Pending Requests</Typography>
                                <Typography fontSize={{ sm: '1rem' }} mt={2} >5</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%', m: '0 auto' }} >
                                <Typography fontSize={{ sm: '1rem' }} mt={1} >Notifications</Typography>
                                <Typography fontSize={{ sm: '1rem' }} mt={1} >3</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%', m: '0 auto' }} >
                                <Typography fontSize={{ sm: '1rem' }} mt={1} mb={1.5} >Upcomming</Typography>
                                <Typography fontSize={{ sm: '1rem' }} mt={1} mb={1.5} >0</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Grid>
    )
}

export default Aside