import React, { useEffect, useState } from 'react'
import "./Blog.css"
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios'

function Blog() {

    const [blog, setBlog] = useState([])

    useEffect(() => {
        const getBlogs = async () => {
            const result = await axios.get("/api/blogs");
            setBlog(result.data)
            console.log(blog)
        };
        getBlogs()
    })

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid className='blog_container' item xs={12}>
                    {/* <form>
                        <input type="file"
                            style={{ margin: "5px" }}
                        />
                        <br />
                        <TextField
                            className='textfield'
                            type="text"
                            label="blog title"
                            variant="outlined"
                        />
                        <br />
                        <TextField
                            className='textfield'
                            type="text"
                            label="blog description"
                            variant="outlined"
                        />
                        <br />
                        <Button style={{ margin: "5px", width: "150px" }} variant="contained" color="primary">
                            Upload
                        </Button>
                    </form> */}



                    {blog && blog?.map((b) => (
                        <div style={{ display: "flex", gap: "20px", flexDirection: "row", flexWrap: "wrap" }}>
                            <Card sx={{ maxWidth: 300, maxHeight: 700, bgcolor: "#906A47" }} >
                                <CardActionArea >
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={b.photo}
                                        alt="green iguana"
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
                        </div>
                    ))}
                </Grid>
            </Grid>
        </Box>

    )
}

export default Blog
