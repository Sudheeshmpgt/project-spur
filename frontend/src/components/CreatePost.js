import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

function CreatePost() {
    return (
        <Grid container>
            <Box width='100%'>
                <Paper sx={{ m: '80px auto', elevalation: 10, borderRadius: '15px', width: '80%' }}>
                    <Box sx={{ backgroundColor: '', borderRadius: '15px' }} width='100%' height={80}>
                        <Box width='85%' sx={{ m: '0 auto' }}>
                            <Button fullWidth
                                variant='contained'
                                color='secondary'
                                size='large'
                                sx={{ m: '20px auto', borderRadius: '10px' }}>
                                <Typography fontSize='1rem'>
                                    Start a post...
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Grid>
    )
}

export default CreatePost