import React from 'react'
import "./Blog.css"
import { Box, Button, Grid, TextField, Typography } from '@mui/material'

function Blog() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid className='blog_container' item xs={12}>
                    <form>
                        <input type="file"
                            style={{ margin: "5px" }}
                        />
                        <br />
                        <TextField
                            className='textfield'
                            // style={{ width: "800px", margin: "5px" }}
                            type="text"
                            label="blog title"
                            variant="outlined"
                        />
                        <br />
                        <TextField
                            className='textfield'

                            // style={{ width: "800px", margin: "5px" }}
                            type="text"
                            label="blog description"
                            variant="outlined"
                        />
                        <br />
                        {/* <TextField
                                    style={{ width: "200px", margin: "5px" }}
                                    type="text"
                                    label="goal stage"
                                    variant="outlined"
                                />
                                <br />
                                <TextField
                                    style={{ width: "200px", margin: "5px" }}
                                    type="number"
                                    label="job id"
                                    variant="outlined"
                                />
                                <br />
                                <TextField
                                    style={{ width: "900px", margin: "5px" }}
                                    type="text"
                                    label="job region"
                                    variant="outlined"
                                />
                                <br /> */}
                        <Button style={{ margin: "5px", width: "150px" }} variant="contained" color="primary">
                            Upload
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Box>

    )
}

export default Blog
