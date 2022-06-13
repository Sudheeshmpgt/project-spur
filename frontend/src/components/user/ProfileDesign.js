import { Box, Button, Fab, Grid, IconButton, Paper, TextField } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'

function ProfileDesign() {
    return (
        <Grid container>
            <Grid item xs={12} sx={{ width: '100%', mt: 10 }}>
                <Box component={Paper} sx={{ m: '0 auto', width: { sm: 820, xs: 330, md: 1200 }, height: 550, backgroundColor: 'primary.main', borderRadius: '15px' }}>
                    <Box sx={{ width: { sm: 820, xs: 330, md: 1200 }, height: 100, backgroundColor: 'white', borderRadius: '15px 15px 0 0' }}></Box>
                    <Paper sx={{ width: 150, height: 150, mt: -8, ml: 'auto', mr: 'auto', borderRadius: '50%' }}>
                        <Fab size='medium' sx={{ ml: 13, mt: 12, backgroundColor: 'white' }}><PhotoCameraIcon sx={{ fontSize: 26 }} /></Fab>
                    </Paper>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '35%', m: '0 auto' }}>
                        <Box  sx={{width:'100%', display:'flex'}}>
                            <TextField variant='standard' fullWidth label='Name' value='sudheesh' textAlign='center' sx={{ mt: 1 }}></TextField>
                            <Fab size='medium'><EditIcon sx={{fontSize:20}}/></Fab>
                        </Box>
                        <TextField variant='standard' fullWidth label='About' value='sudheesh' textAlign='center' sx={{ mt: 1 }}></TextField>
                        <TextField variant='standard' fullWidth label='Email' value='sudheesh' textAlign='center' sx={{ mt: 1 }}></TextField>
                        <TextField variant='standard' fullWidth label='Phone' value='sudheesh' textAlign='center' sx={{ mt: 1 }}></TextField>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ProfileDesign