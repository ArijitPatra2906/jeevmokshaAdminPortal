import React, { useEffect, useState } from 'react'
import "./Blog.css"
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, getDialogTitleUtilityClass, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

function Blog() {
    // const PF = "http://localhost:7000/images/";

    const [blog, setBlog] = useState([])

    useEffect(() => {
        const getBlogs = async () => {
            const result = await axios.get("/api/blogs");
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
                                Create
                            </Button>
                        </Link>
                        <Typography fontSize="30px" mt={3} mb={3}>Curated Blogs</Typography>

                    </div>
                    <Grid className='blog_screen_2' item xs={12} >
                        <Box className="blog_Sec_card">

                            {blog && blog?.map((b) => (
                                <Box className='blog1'>
                                    <Link to={`/blog/${b._id}`} style={{ textDecoration: "none" }}>

                                        <Card sx={{ maxWidth: 300, height: 500, bgcolor: "#906A47" }} >
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
                                                        {/* <FiUser /> */}
                                                        {/* <Typography fontSize="12px" color="black">by jeevmoksha | Jan 14, 2018 | Yoga</Typography> */}
                                                    </div>
                                                    <Typography mt={1.5} fontSize="12px" color="white" textAlign="left" letterSpacing={1} fontWeight="500" variant="body2">
                                                        {b.desc}
                                                    </Typography>
                                                    {/* <button className='blog_card_btn'>
                                                    Read More
                                                </button> */}
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Link>
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
