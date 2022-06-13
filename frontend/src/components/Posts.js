import { Avatar, Box, Button, Card, CardContent, CardMedia, Fab, Grid, IconButton, Typography } from '@mui/material'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import imagePostOne from '../images/sdlc.png'
import './Scroll.css'
import React from 'react'

function Posts() {
    return (
        <Grid container>
            <Box width='100%' height={460} className='scrollbar-hidden' sx={{overflow:'scroll', borderRadius:'15px',}} >
                <Card sx={{ borderRadius: '15px', width:'80%', m:'10px auto'}}>
                    <CardContent sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: 1, borderColor: 'rgba(0, 0, 0, 0.38)' }}>
                        <Box sx={{ display: 'flex' }}>
                            <Avatar sx={{ height: 60, width: 60 }}></Avatar>
                            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2, justifyContent: 'center' }}>
                                <Box width='100%'>
                                    <Typography fontSize='1rem' >
                                        Sudheesh M
                                    </Typography>
                                </Box>
                                <Box width='100%'>
                                    <Typography fontSize='0.8rem' >
                                        MERN stack developer
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Fab color='primary'>Ask</Fab>
                    </CardContent>
                    <CardMedia
                    component="img"
                    alt="green iguana"
                    image={imagePostOne}/>
                    <CardContent sx={{ display: 'flex', justifyContent: 'space-between', borderTop: 1, borderColor: 'rgba(0, 0, 0, 0.38)' }}>
                        <Box>
                            <IconButton>
                                <ThumbUpOutlinedIcon sx={{ fontSize: 30 }} />
                            </IconButton>
                            <IconButton>
                                <MessageOutlinedIcon sx={{ fontSize: 30, ml:3 }} />
                            </IconButton>
                        </Box>
                        <Button variant='contained' sx={{ borderRadius: '10px' }} size='small' color='primary'>
                            <Typography fontSize='1rem'>
                                  Connect  
                            </Typography>
                        </Button>
                    </CardContent>
                </Card>
            </Box>
        </Grid>
    )
}

export default Posts