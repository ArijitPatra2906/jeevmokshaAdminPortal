import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Blog.css"
import { TextareaAutosize, TextField } from '@mui/material';
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';

function CreateBlog() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [pic, setPic] = useState();
    const [picLoading, setPicLoading] = useState(false)


    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("userInfo"))
            navigate("/")
    }, [navigate])

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
        console.log(pics);
        if (
            pics.type === "image/jpeg" ||
            pics.type === "image/jpg" ||
            pics.type === "image/png"
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



    const handleSubmit = async (e) => {
        if (!title || !desc) {
            toast.warning('Please Fill all the required fields', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            return;
        }
        if (!pic) {
            toast.warning('Please select an image', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            return;
        }

        try {
            setPicLoading(true)
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };
            const { data } = await axios.post(
                "https://jeevmokshayogaadminportal.herokuapp.com/api/blogs",
                { title, desc, pic },
                config
            );
            console.log(data);
            toast.success('Blog created successfully!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            setPicLoading(false)
            window.location.replace("/blog")


        } catch (error) {
            console.log(error)
            toast.error('Something went wrong,try again!!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    };

    return (
        <div className="blogDetails">
            <form>
                <input type="file"
                    onChange={(e) => postDetails(e.target.files[0])}
                    style={{ margin: "5px" }}
                />
                <br />
                <TextField
                    required
                    className='textfield'
                    type="text"
                    label="Blog title"
                    variant="outlined"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <TextareaAutosize
                    required
                    className='desctextfield'
                    aria-label="minimum height"
                    minRows={10}
                    placeholder="Blog description"
                    onChange={(e) => setDesc(e.target.value)}

                />
                <br />
                <LoadingButton loading={picLoading} onClick={handleSubmit} style={{ margin: "5px", width: "150px" }} variant="contained" color="primary">
                    Upload
                </LoadingButton>
            </form>
            {pic && <img className="image" src={pic} alt="" />}

            <ToastContainer />
        </div>
    )
}

export default CreateBlog
