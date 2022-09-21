import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography, Box, Grid, Container, TextField, TextareaAutosize } from '@mui/material';


function BlogDetails() {
    const [blogDetails, setBlogDetails] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdatMode] = useState(false);


    const location = useLocation();

    const path = location.pathname.split("/")[2];
    useEffect(() => {
        const getBlog = async () => {
            const result = await axios.get("/api/blogs/" + path);

            setBlogDetails(result.data);
            setDesc(result.data.desc);
            setTitle(result.data.title);
            // console.log(result.data)
        };
        getBlog();
    }, [blogDetails, path]);



    const handleDelete = async () => {
        try {
            await axios.delete("/api/blogs/" + path);
            setUpdatMode(false);
            window.location.replace("/blog");

        } catch (err) { }
    };
    const handleUpdate = async () => {
        try {
            await axios.put("/api/blogs/" + path, {
                // username: user.username,
                title,
                desc,
            });
            window.location.reload();
        } catch (err) { }
    };


    return (
        // <div>
        //     <h3>{title}</h3>
        //     <h3>{desc}</h3>
        //     <EditIcon
        //         onClick={() => setUpdatMode(true)}
        //     />
        //     <DeleteIcon
        //         onClick={handleDelete}
        //     />
        //     {updateMode ? (
        //         <div>Arijit</div>
        //     ) : ("")}
        // </div>

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid className='blog_details_screen2' style={{ background: "#8E8E8E5E" }} item xs={12}>
                    <Box className='blog_details_scr2'>
                        <Box className='blog_scr2_left'>
                        </Box>
                        <Box className='blog_scr2_right'>

                            {updateMode ? (
                                <TextField
                                    className='textfield'
                                    type="text"
                                    label="Blog title"
                                    variant="outlined"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            ) : (
                                <Box>
                                    <Typography fontWeight="600" fontFamily="sora" letterSpacing={1.2} lineHeight={2} pt={3} pl={4} pr={4} textAlign="left" color="white" fontSize="20px">
                                        {title}
                                    </Typography>
                                    <EditIcon
                                        onClick={() => setUpdatMode(true)}
                                    />
                                    <DeleteIcon
                                        onClick={handleDelete}
                                    />
                                </Box>
                            )}
                            <span className="singlePostDate">
                                {new Date(blogDetails.createdAt).toDateString()}
                            </span>

                            {updateMode ? (
                                <TextareaAutosize
                                    className='desctextfield'
                                    aria-label="minimum height"
                                    minRows={6}
                                    placeholder="Blog description"
                                    onChange={(e) => setDesc(e.target.value)}
                                />
                            ) : (
                                <Typography fontWeight="600" fontFamily="sora" letterSpacing={1.2} lineHeight={2} pt={3} pl={4} pr={4} textAlign="left" color="white" fontSize="16px">
                                    {desc}
                                </Typography>
                            )}

                            {updateMode && (
                                <button className="singlePostButton" onClick={handleUpdate}>
                                    Update
                                </button>
                            )}
                        </Box>

                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
}

export default BlogDetails
