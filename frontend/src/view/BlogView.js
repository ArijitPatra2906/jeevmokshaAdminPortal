import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Blog from '../pages/Blog/Blog'
import "./style.css"

function BlogView() {
    return (
        <div className='blog'>
            <Sidebar />
            <div className="blogContainer">
                <Navbar />
                <Blog />
            </div>
        </div >
    )
}

export default BlogView