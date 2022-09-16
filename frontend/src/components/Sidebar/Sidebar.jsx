import React from 'react'
import "./Sidebar.css"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import QuizIcon from '@mui/icons-material/Quiz';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/logo.png"


function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("userInfo")
        navigate("/")
    };
    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <img src={logo} alt="logo" className="logo" />
                </Link>
            </div>
            <br />
            <div className="center">
                <ul>
                    <Link to="/dashboard" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: "none" }}>
                        <li>
                            <ContactPageIcon className="icon" />
                            <span>Contact</span>
                        </li>
                    </Link>
                    <Link to="/courseinfo" style={{ textDecoration: "none" }}>
                        <li>
                            <CreditCardIcon className="icon" />
                            <span>Course Info</span>
                        </li>
                    </Link>
                    <Link to="/blog" style={{ textDecoration: "none" }}>
                        <li>
                            <PostAddIcon className="icon" />
                            <span>Blog</span>
                        </li>
                    </Link>
                    <Link to="/faq" style={{ textDecoration: "none" }}>
                        <li>
                            <QuizIcon className="icon" />
                            <span>Faq</span>
                        </li>
                    </Link>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li onClick={handleLogout}>
                        <ExitToAppIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
