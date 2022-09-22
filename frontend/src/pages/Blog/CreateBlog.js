import axios from 'axios';
import React, { useState } from 'react'
import "./Blog.css"
import AddIcon from '@mui/icons-material/Add';
import { Button, TextareaAutosize, TextField } from '@mui/material';

function CreateBlog() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [pic, setPic] = useState();



    const postDetails = (pics) => {
        // setPicLoading(true);
        // if (pics === undefined) {
        //     toast({
        //         title: "Please Select an Image",
        //         status: "warning",
        //         duration: 5000,
        //         isClosable: true,
        //         position: "bottom",
        //     });
        //     return;
        // }
        // console.log(pics);
        if (
            pics.type === "image/jpeg" ||
            pics.type === "image/png" ||
            pics.type === "image/gif"
            // pics.type === "image/jpg"
            // cloudinary://153322855229737:SH7JbgUfHNoSbDqKMeNJiIAPsfM@ar1stin
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
                    // setPicLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    // setPicLoading(false);
                });
        } else {
            // toast({
            //     title: "Please Select an Image",
            //     status: "warning",
            //     duration: 5000,
            //     isClosable: true,
            //     position: "bottom",
            // });
            // setPicLoading(false);
            return;
        }
    };



    const handleSubmit = async (e) => {
        if (!title || !desc) {
            // toast.warning('Please Fill all the required fields', {
            //     position: "top-right",
            //     autoClose: 3000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            // })
            alert("Please Fill all the required fields")
            return;
        }
        // const newBlog = {
        //     // username: user.username,
        //     title,
        //     desc,
        // };
        // if (file) {
        //     const data = new FormData();
        //     const filename = Date.now() + file.name;
        //     data.append("name", filename);
        //     data.append("file", file);
        //     newBlog.photo = filename;

        //     try {
        //         await axios.post("/upload", data);
        //     } catch (err) { }
        // }
        try {

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };
            const { data } = await axios.post(
                "http://localhost:7000/api/blogs",
                { title, desc, pic },
                config
            );
            console.log(data);
            alert("Blog created successfully")
            // toast.success('Thanks For contact us!!', {
            //     position: "top-middle",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            // })
            // navigate("/faq");
            window.location.replace("/blog")


        } catch (error) {
            console.log(error)
            // toast.error('Something went wrong,try again!!', {
            //     position: "top-right",
            //     autoClose: 3000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            // })
        }
    };



    return (
        <div className="write">
            {/* {pic && <img className="image" src={URL.createObjectURL(pic)} alt="" />} */}
            <form>
                <input type="file"
                    onChange={(e) => postDetails(e.target.files[0])}
                    style={{ margin: "5px" }}
                />
                <br />
                <TextField
                    className='textfield'
                    type="text"
                    label="Blog title"
                    variant="outlined"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <TextareaAutosize
                    className='desctextfield'
                    aria-label="minimum height"
                    minRows={6}
                    placeholder="Blog description"
                    onChange={(e) => setDesc(e.target.value)}

                />
                <br />
                <Button onClick={handleSubmit} style={{ margin: "5px", width: "150px" }} variant="contained" color="primary">
                    Upload
                </Button>
            </form>
        </div>
    )
}

export default CreateBlog
