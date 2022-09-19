import axios from 'axios';
import React, { useState } from 'react'
import "./Blog.css"
import AddIcon from '@mui/icons-material/Add';
import { Button, TextField } from '@mui/material';

function CreateBlog() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    // const [file, setFile] = useState(null);


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
        try {

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };
            const { data } = await axios.post(
                "http://localhost:7000/api/blogs",
                { title, desc },
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
            {/* {file && <img className="image" src={URL.createObjectURL(file)} alt="" />} */}
            <form>
                <input type="file"
                    style={{ margin: "5px" }}
                />
                <br />
                <TextField
                    className='textfield'
                    type="text"
                    label="blog title"
                    variant="outlined"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <TextField
                    className='textfield'
                    type="text"
                    label="blog description"
                    variant="outlined"
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
