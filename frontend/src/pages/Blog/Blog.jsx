import React, { useEffect, useState } from 'react'
import "./Blog.css"
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

function Blog() {
    const PF = "http://localhost:7000/images/";

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
                    <Link to="/createBlog">
                        <Button className='btn_faq' variant="contained" endIcon={<AddIcon />}>
                            Create
                        </Button>
                    </Link>

                    {blog && blog?.map((b) => (
                        <div style={{ display: "flex", justifyContent: "cenetr", alignItems: "center", gap: "20px", flexDirection: "column", flexWrap: "wrap" }}>
                            <Link to={`/blog/${b._id}`}>
                                <Card sx={{ marginBottom: "20px", maxWidth: 300, maxHeight: 700, bgcolor: "#906A47", display: "flex" }} >
                                    <CardActionArea >
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={PF + b.photo}
                                            alt="blog_image"
                                        />
                                        <CardContent>
                                            <Typography fontFamily="inter" gutterBottom variant="h7" fontSize="18px" fontWeight="600" lineHeight={1.5} color="white" textAlign="left" component="div">
                                                {b.title}
                                            </Typography>
                                            <div className="author">
                                                {/* <FiUser /> */}
                                                {/* <Typography fontSize="12px" color="white">by jeevmoksha | Jan 14, 2018 | Yoga</Typography> */}
                                            </div>
                                            <Typography mt={1.5} fontSize="12px" color="white" textAlign="left" letterSpacing={1} fontWeight="500" variant="body2">
                                                {b.desc}
                                            </Typography>
                                            {/* <Link to="/blogpage">
                                            <button className='blog_card_btn'>
                                                Read More
                                            </button>
                                        </Link> */}
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </Grid>
            </Grid>
        </Box>

    )
}

export default Blog
