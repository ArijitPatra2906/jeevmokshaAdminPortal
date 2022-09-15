import React from 'react'
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import "./Navbar.css"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

function Navbar() {
    // const { dispatch } = useContext(DarkModeContext);
    return (
        <div className='navbar'>
            <div className="navbar_wrapper">
                <div className="header">
                    Admin dashboard for Jeevmoksha Yoga
                </div>
                {/* <div className="items">
                    <div className="item">
                        <img
                            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="avatar"
                        />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Navbar
