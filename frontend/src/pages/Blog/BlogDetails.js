import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

function BlogDetails() {
    const [blog, setBlog] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const location = useLocation();

    const path = location.pathname.split("/")[2];
    useEffect(() => {
        const getBlog = async () => {
            const res = await axios.get("http://localhost:7000/api/blogs/" + path);

            setBlog(res.data);
            //   setDesc(res.data.desc);
            //   setTitle(res.data.title);
            console.log(blog)
        };
        getBlog();
    }, []);

    return (
        <div>
            {/* {blog && blog?.map((content) => (
                <h3>{content.title}</h3>
            ))} */}
        </div>
    )
}

export default BlogDetails
