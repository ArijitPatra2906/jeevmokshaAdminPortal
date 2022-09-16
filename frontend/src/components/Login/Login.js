import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import "./Login.css"

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [picLoading, setPicLoading] = useState(false);
    const navigate = useNavigate();

    const submitHandler = async () => {
        setPicLoading(true);
        if (!email || !password) {
            // toast({
            //     title: "Please Fill all the fields",
            //     status: "warning",
            //     duration: 5000,
            //     isClosable: true,
            //     position: "bottom",
            // });
            setPicLoading(false);
            return;
        }
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const { data } = await axios.post(
                "http://localhost:7000/api/auth/login",
                { email, password },
                config
            );
            // toast({
            //     title: "Login Successful",
            //     status: "success",
            //     duration: 5000,
            //     isClosable: true,
            //     position: "top-right",
            // });
            localStorage.setItem("userInfo", JSON.stringify(data));
            setPicLoading(false);
            navigate("/dashboard");
        } catch (error) {
            // toast({
            //     // title: "Error Occured!",
            //     description: error.response.data.message,
            //     status: "error",
            //     duration: 5000,
            //     isClosable: true,
            //     position: "bottom",
            // });
            setPicLoading(false);
        }
    };


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid className='blog_container' item xs={12}>
                    <form>
                        <br />
                        <TextField
                            required
                            className='login_textfield'
                            type="email"
                            label="Enter Your Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                        <br />
                        <TextField
                            required
                            className='password'
                            type="password"
                            label="Enter You Password"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <Button className="loginBttn"
                            isLoading={picLoading}
                            onClick={submitHandler} variant="contained" color="primary">
                            Login
                        </Button>
                        <Typography variant="h7" mt={2}>Don't have an account? <Link style={{ textDecoration: "none" }} to="/register">Sign Up</Link></Typography>
                    </form>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login
