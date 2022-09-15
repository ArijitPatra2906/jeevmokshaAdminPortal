import React, { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext';
import "./Sidebar.css"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import PostAddIcon from '@mui/icons-material/PostAdd';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import BookIcon from '@mui/icons-material/Book';
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"

function Sidebar() {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
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
                    {/* <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <CreditCardIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChartIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon" />
                        <span>Settings</span>
                    </li> */}
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            {/* <div className="bottom">
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div> */}
        </div>
    )
}

export default Sidebar
