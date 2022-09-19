import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import BlogDetails from '../pages/Blog/BlogDetails'
import "./style.css"

function BlogDetailsView() {
    return (
        <div className='blog'>
            <Sidebar />
            <div className="blogContainer">
                <Navbar />
                <BlogDetails />
            </div>
        </div >
    )
}

export default BlogDetailsView
