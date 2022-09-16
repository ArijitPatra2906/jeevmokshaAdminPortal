import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Course from '../pages/Course/Course'
import "./style.css"
function CourseView() {
    return (
        <div className='course'>
            <Sidebar />
            <div className="courseContainer">
                <Navbar />
                <Course />
            </div>
        </div >
    )
}

export default CourseView