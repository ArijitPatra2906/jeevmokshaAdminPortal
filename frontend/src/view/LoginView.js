import React from 'react'
import Login from '../components/Login/Login'
import loginImage from "../assets/jeevmoksha-banner-1 mobile.jpg"
import { Typography } from '@mui/material'

function LoginView() {
    return (
        <div style={{ display: "flex" }}>
            <div className='homeleft'>
                <Typography variant='h3' alignItems="center" mb={3} textAlign="center">Login</Typography>
                <Login />
            </div>
            <div className='home_right'>
                <img src={loginImage} alt="" />
            </div>
        </div>
    )
}

export default LoginView
