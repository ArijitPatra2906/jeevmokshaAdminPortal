import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography, Box, Grid, TextField, TextareaAutosize } from '@mui/material';
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LoadingButton from '@mui/lab/LoadingButton';
function BlogDetails() {
    const [blogDetails, setBlogDetails] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [pic, setPic] = useState("");
    const [updateMode, setUpdatMode] = useState(false);
    const [picLoading, setPicLoading] = useState(false)


    const location = useLocation();

    const path = location.pathname.split("/")[2];
    useEffect(() => {
        const getBlog = async () => {
            const result = await axios.get("https://jeevmokshayogaadmin.herokuapp.com/api/blogs/" + path);

            setBlogDetails(result.data);
            setDesc(result.data.desc);
            setTitle(result.data.title);
            setPic(result.data.pic)
            // console.log(result.data)
        };
        getBlog();
    }, [blogDetails, path]);



    const handleDelete = async () => {
        try {
            await axios.delete("https://jeevmokshayogaadmin.herokuapp.com/api/blogs/" + path);
            setUpdatMode(false);

            toast.success('Blog deleted successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            window.location.replace("/blog");

        } catch (err) { }
    };
    const handleUpdate = async () => {
        try {
            await axios.put("https://jeevmokshayogaadmin.herokuapp.com/api/blogs/" + path, {
                // username: user.username,
                title,
                desc,
                pic
            });
            toast.success('Blog updated successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            window.location.reload();
        } catch (err) { }
    };
    const postDetails = (pics) => {
        setPicLoading(true);
        if (pics === undefined) {
            toast.warning('Please select an image!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        // console.log(pics);
        if (
            pics.type === "image/jpeg" ||
            pics.type === "image/png" ||
            pics.type === "image/gif"
        ) {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "jeevmoksha");
            data.append("cloud_name", "ar1stin");
            fetch("https://api.cloudinary.com/v1_1/ar1stin/image/upload", {
                method: "post",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                    setPic(data.url.toString());
                    console.log(data.url.toString());
                    setPicLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setPicLoading(false);
                });
        } else {
            toast.warning('Please select an image!', {
                position: "top-right",
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
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid className='blog_details_screen2' item xs={12}>
                    <Box className='blog_details_scr2'>
                        {updateMode ? (
                            <Box className="blogDetails">
                                <form>
                                    <input type="file"
                                        // value={pic}
                                        onChange={(e) => postDetails(e.target.files[0])}
                                        style={{ margin: "5px" }}
                                    />
                                    <br />
                                    <TextField
                                        className='textfield'
                                        type="text"
                                        label="Blog title"
                                        variant="outlined"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                    <br />
                                    <TextareaAutosize
                                        className='desctextfield'
                                        aria-label="minimum height"
                                        minRows={6}
                                        placeholder="Blog description"
                                        value={desc}
                                        onChange={(e) => setDesc(e.target.value)}
                                    />
                                    <br />
                                    <LoadingButton loading={picLoading} onClick={handleUpdate} style={{ margin: "5px", width: "150px" }} variant="contained" color="primary">
                                        Update
                                    </LoadingButton>
                                </form>
                                {pic && <img className="image" src={pic} alt="" />}

                            </Box>
                        ) : (
                            <Box className="blog_details_scr2">
                                <Box className='blog_scr2_left'>
                                    <img src={pic} alt="" />
                                </Box>
                                <Box className='blog_scr2_right'>
                                    <Typography fontWeight="600" fontFamily="sora" letterSpacing={1.2} lineHeight={2} pt={3} pl={4} pr={4} textAlign="left" color="black" fontSize="18px">
                                        {title}
                                    </Typography>
                                    <Typography fontWeight="600" fontFamily="sora" letterSpacing={1.2} lineHeight={2} pt={3} pl={4} pr={4} textAlign="left" color="black" fontSize="18px">
                                        {desc}
                                    </Typography>
                                    <div className="editbutton">
                                        <EditIcon
                                            onClick={() => setUpdatMode(true)}
                                        />
                                        <DeleteIcon
                                            onClick={handleDelete}
                                        />
                                    </div>
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Grid>

            </Grid>
            <ToastContainer />
        </Box>
    )
}

export default BlogDetails
