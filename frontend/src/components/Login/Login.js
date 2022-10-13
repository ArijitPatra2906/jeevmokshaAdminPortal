import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import "./Login.css"
import { ToastContainer, toast } from "react-toastify"
function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [picLoading, setPicLoading] = useState(false);
    const navigate = useNavigate();

    const submitHandler = async () => {
        setPicLoading(true);
        if (!email || !password) {
            toast.warning("Please Fill all the fields", {
                position: "bottom-middle",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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
                "https://jeevmokshayogaadmin.herokuapp.com/api/auth/login",
                { email, password },
                config
            );
            toast.success("Login Successful", {
                position: "bottom-middle",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            localStorage.setItem("userInfo", JSON.stringify(data));
            setPicLoading(false);
            navigate("/dashboard");
        } catch (error) {
            toast.error(error.response.data.message, {
                position: "bottom-middle",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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
                            {picLoading ? "Loading..." : "Login"}
                        </Button>
                        {/* <Typography variant="h7" mt={2}>Don't have an account? <Link style={{ textDecoration: "none" }} to="/register">Sign Up</Link></Typography> */}
                    </form>
                </Grid>
            </Grid>
            <ToastContainer />
        </Box>
    )
}

export default Login
