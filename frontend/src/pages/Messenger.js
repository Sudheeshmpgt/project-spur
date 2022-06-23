import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import Header from '../components/common/Header'
import TopDesign from '../components/common/TopDesign'
import Aside from '../components/user/Aside'
import ChatAside from '../components/common/ChatAside' 
import '../components/common/Scroll.css'
import { useSelector } from 'react-redux'
import InterAside from '../components/interviewer/InterAside'
import { useNavigate } from 'react-router-dom'
import MessengerDetails from '../components/common/MessengerDetails'

function Messenger() {
    const user = useSelector(state => state.userData.value)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("usertoken")
        if (!token) {
            navigate('/')
        }
    }, [navigate])

    return (
        <Grid>
            <Header />
            <TopDesign />
            {
                user.interviewer ?
                    (
                        <Box sx={{ width: '100%', display: 'flex', backgroundColor: '', justifyContent: 'space-evenly' }}>
                            <Box sx={{ width: '25%', display: 'flex', ml: 'auto', mr: 'auto' }}>
                                <InterAside />
                            </Box>
                            <Box sx={{ width: '50%', height: 'auto', display: 'flex', flexDirection: 'column' }}>
                                <Box className='scrollbar-hidden' width='100%' sx={{ mt: -8.0, overflow: 'scroll' }}>
                                    <MessengerDetails />
                                </Box>
                            </Box>
                            <Box sx={{ width: '25%' }}>
                                <ChatAside />
                            </Box>
                        </Box>
                    ) : (
                        <Box sx={{ width: '100%', display: 'flex', backgroundColor: '', justifyContent: 'space-evenly' }}>
                            <Box sx={{ width: '25%', display: 'flex', ml: 'auto', mr: 'auto' }}>
                                <Aside />
                            </Box>
                            <Box sx={{ width: '50%', height: 'auto', display: 'flex', flexDirection: 'column', mt:10 }}>
                                <MessengerDetails />
                            </Box>
                            <Box sx={{ width: '25%' }}>
                                <ChatAside />
                            </Box>
                        </Box>
                    )
            }
        </Grid>
    )
}

export default Messenger