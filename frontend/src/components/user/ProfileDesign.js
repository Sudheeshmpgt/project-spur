import { Avatar, Box, Button, Fab, Grid, IconButton, Paper, TextField, Typography } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import axios from '../../axiosinstance'
import Toast from '../common/sweetAlert';
import { useForm } from 'react-hook-form'
import Statistics from './Statistics';
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from 'react-redux'
import { login } from '../../features/userData'


function ProfileDesign() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [users, setUsers] = useState({
        name: '',
        phone: '',
        email: '',
        about: '',
        experience: '',
        profileImg: ''
    })
    const [userId, setUserId] = useState('')
    const [image, setImage] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.userData.value)

    const handleClick = () => {
        const { name, phone, email, about, experience } = users
        let values = new FormData()
        if (users) {
            values.append('profileImg', image)
            values.append('name', name)
            values.append('phone', phone)
            values.append('email', email)
            values.append('about', about)
            values.append('experience', experience)
        }
        axios.put(`api/user/update/${userId}`, values, {
            headers: {
                'authToken': localStorage.getItem("usertoken"),
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                const message = res.data.message
                Toast.fire({
                    icon: 'success',
                    title: message
                })
                setUsers(res.data.user)
                dispatch(login(res.data.user))
            })
        reset({ values })
    }

    useEffect(() => {
        const token = localStorage.getItem('userToken')
        const id = user._id
        setUserId(id)
        axios.get(`api/user/details/${id}`, {
            headers: {
                'authToken': token,
            }
        })
            .then((res) => {
                setUsers(res.data.user)
            })
    }, [user])

    useEffect(() => {
        handleClick();
    }, [image]);

    const handleChange = (e) => {
        const { name, value } = e.target
        setUsers({
            ...users,
            [name]: value
        })
    }

    const changeImage = (e) => {
        setImage(e.target.files[0])
    }

    const Input = styled('input')({
        display: 'none',
    });

    const goBack = () => {
        navigate('/home')
    }

    return (
        <Grid container>
            <Grid item xs={12} sx={{ width: '100%', mt: 10 }}>
                <form onSubmit={handleSubmit(handleClick)}>
                    <Box component={Paper} sx={{ m: '0 auto', width: { sm: 820, xs: 330, md: 1200 }, height: 570, backgroundColor: 'secondary.main', borderRadius: '15px' }}>
                        <Box sx={{ width: { sm: 820, xs: 330, md: 1200 }, height: 100, backgroundColor: 'white', borderRadius: '15px 15px 0 0', display: 'flex', justifyContent: 'space-between' }}>
                            <IconButton
                                variant='text'
                                onClick={goBack}
                                sx={{ mt: -5, ml: 2, color: 'text.primary', fontSize: 13 }}
                            >
                                <ArrowBackIcon sx={{ fontSize: 20 }} /> Go Back
                            </IconButton>
                            <Button>
                                <Typography color='text.primary' fontSize='1rem' fontWeight={600} sx={{ mt: 8, mr: 2 }}>Change Password</Typography>
                            </Button>
                        </Box>
                        <Paper sx={{ width: 150, height: 150, mt: -9, ml: 'auto', mr: 'auto', borderRadius: '50%' }}>
                            <Avatar alt='profile' src={image ? URL.createObjectURL(image) : users.profileImg} sx={{ m: '0 auto', width: 150, height: 150 }}></Avatar>
                            <Fab size='small' color='primary' sx={{ mt: -9, ml: 14, zIndex: 0 }}>
                                <label htmlFor="icon-button-file" >
                                    <Input accept="image/*"
                                        id="icon-button-file"
                                        type="file"
                                        {...register('picture')}
                                        onChange={changeImage}
                                    />
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <PhotoCameraIcon style={{ fontSize: 24, color: 'white' }} />
                                    </IconButton>
                                </label>
                            </Fab>
                        </Paper>
                        <Typography sx={{ textAlign: 'center', mt: 2, fontSize: { sm: '1.3rem' }, fontWeight: 700 }}>
                            {users && users.name}
                        </Typography>
                        <Typography sx={{ textAlign: 'center', mt: 0.6, fontSize: '0.9rem' }}>
                            {users && users.about}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: '35%', m: '0 auto' }}>
                                <Box sx={{ width: '100%', display: 'flex' }}>
                                    <Box width='80%'>
                                        <TextField
                                            name='name'
                                            type='string'
                                            {...register('name', {
                                                required: 'This field is required',
                                                minLength: {
                                                    value: 4,
                                                    message: 'Please enter atleast 4 characters'
                                                },
                                                pattern: {
                                                    value: /^[a-zA-Z][a-zA-Z][a-zA-Z ]*$/,
                                                    message: 'Please enter a valid name'
                                                }
                                            })}
                                            error={!!errors?.name}
                                            helperText={errors?.name ? errors.name.message : null}
                                            variant='standard'
                                            fullWidth
                                            label='Name'
                                            value={users.name}
                                            onChange={handleChange}
                                            sx={{ mt: 1 }} />
                                    </Box>
                                    <Box width='20%' >
                                        <IconButton
                                            type='submit'
                                            onClick={handleClick}>
                                            <EditIcon
                                                sx={{ fontSize: 23, ml: 'auto', mr: 'auto', mt: 1, color: 'text.secondary' }} />
                                        </IconButton>
                                    </Box>
                                </Box>
                                <Box sx={{ width: '100%', display: 'flex' }}>
                                    <Box width='80%'>
                                        <TextField
                                            name='about'
                                            type='string'
                                            {...register('about')}
                                            variant='standard'
                                            fullWidth label='About'
                                            value={users.about} onChange={handleChange}
                                            sx={{ mt: 1 }} />
                                    </Box>
                                    <Box width='20%' >
                                        <IconButton
                                            type='submit'
                                            onClick={handleClick}>
                                            <EditIcon sx={{ fontSize: 23, ml: 'auto', mr: 'auto', mt: 1, color: 'text.secondary' }} />
                                        </IconButton>
                                    </Box>
                                </Box>
                                <Box sx={{ width: '100%', display: 'flex' }}>
                                    <Box width='80%'>
                                        <TextField
                                            name='email'
                                            type='email'
                                            {...register('email', {
                                                required: 'This field is required',
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: 'Please enter a valid email'
                                                }
                                            })}
                                            error={!!errors?.email}
                                            helperText={errors?.email ? errors.email.message : null}
                                            variant='standard'
                                            fullWidth label='Email'
                                            value={users.email}
                                            onChange={handleChange}
                                            sx={{ mt: 1 }} />
                                    </Box>
                                    <Box width='20%' >
                                        <IconButton
                                            type='submit'
                                            onClick={handleClick}>
                                            <EditIcon sx={{ fontSize: 23, ml: 'auto', mr: 'auto', mt: 1, color: 'text.secondary' }} />
                                        </IconButton>
                                    </Box>
                                </Box>
                                <Box sx={{ width: '100%', display: 'flex' }}>
                                    <Box width='80%'>
                                        <TextField
                                            name='phone'
                                            type='string'
                                            {...register('phone', {
                                                required: 'This field is required',
                                                pattern: {
                                                    value: /^\d{10}$/,
                                                    message: 'Please enter a valid phone number'
                                                }
                                            })}
                                            error={!!errors?.phone}
                                            helperText={errors?.phone ? errors.phone.message : null}
                                            variant='standard'
                                            fullWidth
                                            label='Phone'
                                            value={users.phone}
                                            onChange={handleChange}
                                            sx={{ mt: 1 }} />
                                    </Box>
                                    <Box width='20%' >
                                        <IconButton
                                            type='submit'
                                            onClick={handleClick}>
                                            <EditIcon
                                                sx={{ fontSize: 23, ml: 'auto', mr: 'auto', mt: 1, color: 'text.secondary' }} />
                                        </IconButton>
                                    </Box>
                                </Box>
                                {
                                    user.interviewer &&
                                    <Box sx={{ width: '100%', display: 'flex' }}>
                                        <Box width='80%'>
                                            <TextField
                                                name='experience'
                                                type='string'
                                                {...register('experience', {
                                                    required: 'This field is required',
                                                })}
                                                error={!!errors?.experience}
                                                helperText={errors?.experience ? errors.experience.message : null}
                                                variant='standard'
                                                fullWidth
                                                label='Experience'
                                                value={users.experience}
                                                onChange={handleChange}
                                                sx={{ mt: 1 }} />
                                        </Box>
                                        <Box width='20%' >
                                            <IconButton
                                                type='submit'
                                                onClick={handleClick}>
                                                <EditIcon
                                                    sx={{ fontSize: 23, ml: 'auto', mr: 'auto', mt: 1, color: 'text.secondary' }} />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                }
                            </Box>
                            <Box sx={{ width: '35%', m: '0 auto' }} >
                                <Statistics />
                            </Box>
                        </Box>
                    </Box>
                </form>
            </Grid>
        </Grid>
    )
}

export default ProfileDesign