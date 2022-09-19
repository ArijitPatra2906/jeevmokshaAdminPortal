import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import CreateBlog from '../pages/Blog/CreateBlog'
import "./style.css"

function CreateBlogView() {
    return (
        <div className='blog'>
            <Sidebar />
            <div className="blogContainer">
                <Navbar />
                <CreateBlog />
            </div>
        </div >
    )
}

export default CreateBlogView
