import React, { useEffect, useState } from 'react'
import "./Blog.css"
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
function Blog() {

    const [blog, setBlog] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("userInfo"))
            navigate("/")
    }, [navigate])
    useEffect(() => {
        const getBlogs = async () => {
            const result = await axios.get("https://jeevmokshayogaadminportal.herokuapp.com/api/blogs");
            setBlog(result.data)
            // console.log(blog)
        };
        getBlogs()
    })

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid className='blog_container' item xs={12}>
                    <div className='blog_top'>
                        <Link to="/createBlog" style={{ textDecoration: "none" }}>
                            <Button className='btn_faq' variant="contained" endIcon={<AddIcon />}>
                                Add new blog
                            </Button>
                        </Link>
                        <Typography fontSize="30px" mt={3} mb={3}>Curated Blogs</Typography>

                    </div>
                    <Grid className='blog_screen_2' item xs={12} >
                        <Box className="blog_Sec_card">

                            {blog && blog?.map((b) => (
                                <Box className='blog1'>
                                    <Card sx={{ maxWidth: 300, height: "fit-content", bgcolor: "#906A47" }} >
                                        <CardActionArea >
                                            <CardMedia
                                                component="img"
                                                height="200"
                                                image={b.pic}
                                                alt="green iguana"
                                            />
                                            <CardContent >
                                                <Typography fontFamily="inter" gutterBottom variant="h7" fontSize="18px" fontWeight="600" lineHeight={1.5} color="white" textAlign="left" component="div">
                                                    {b.title}
                                                </Typography>
                                                <div className="author">
                                                    <PersonOutlineIcon />
                                                    <Typography fontSize="12px" color="white">{new Date(b.createdAt).toDateString()} | {new Date(b.createdAt).toLocaleTimeString()}</Typography>
                                                </div>
                                                <Typography mt={1.5} fontSize="12px" color="white" textAlign="left" letterSpacing={1} fontWeight="500" variant="body2">
                                                    {b.desc}
                                                </Typography>
                                                <Link to={`/blog/${b._id}`} style={{ textDecoration: "none" }}>
                                                    <button className='blog_card_btn'>
                                                        Action
                                                    </button>
                                                </Link>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                </Grid>
            </Grid>
        </Box>

    )
}

export default Blog
