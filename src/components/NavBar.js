import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import Notification from './navbarComponents/Notification';
import Message from './navbarComponents/Message';
import Profile from './navbarComponents/Profile';

function NavBar(props) {
    const [openMessage, setOpenMessage] = useState(false);
    const [openNotification, setOpenNotification]= useState(false);
    const [openProfile, setOpenProfile] = useState(false)

    const handleClick = (e) => {
        const clickedBtn = e.target.closest('button');
        if (clickedBtn) {
            if (clickedBtn.classList.contains('navbar-message')) {
                setOpenMessage(!openMessage);
                setOpenNotification(false);
                setOpenProfile(false);
            } else if (clickedBtn.classList.contains('navbar-notify')) {
                setOpenMessage(false);
                setOpenNotification(!openNotification);
                setOpenProfile(false);
            } else if (clickedBtn.classList.contains('navbar-profile')) {
                setOpenMessage(false);
                setOpenNotification(false);
                setOpenProfile(!openProfile);
            }
        }
    }
    const closeHandler = () => {
        setOpenMessage(false);
        setOpenNotification(false);
        setOpenProfile(false);
    }

    return (
        <div className="navbar">
            <div className={props.open ? "navbar-left" : "navbar-left-reduced"}>
                {
                    props.open 
                    ? <img src="/logo.svg" alt="logo"></img>
                    : <img src="/logo-mini.svg" alt="logo"></img>
                }
            </div>
            <div className="navbar-right">
                <div className="navbar-search">
                    <button className="navbar-btn nav-sidebar">
                            <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div className="navbar-search-bar">
                        <button className="navbar-btn">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        <input 
                            type="text" 
                            name="search"
                            id="search" 
                            placeholder="Search now"
                            className="search-bar-form-control"
                        ></input>
                    </div>
                </div>
                <div className="navbar-info">
                    <div onClick={handleClick} className="navbar-message">
                        <Message 
                            openMessage={openMessage}  
                        ></Message>
                    </div>
                    <div onClick={handleClick} className="navbar-notify">
                        <Notification 
                            openNotification={openNotification}
                        ></Notification>
                    </div>
                    <div onClick={handleClick} className="navbar-profile">
                        <Profile
                            openProfile={openProfile}
                        ></Profile>
                    </div>
                    <button className="navbar-btn nav-sidebar-reduced">
                            <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
            {
                (openMessage || openNotification || openProfile) &&
                <div 
                    className="overlay"
                    onClick={closeHandler}
                ></div>
            }
        </div>
    )
}

export default NavBar;