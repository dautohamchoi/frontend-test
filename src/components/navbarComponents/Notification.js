import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCog, faUserCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './navbarComponents.css';
import DropdownItem from './DropdownItem';

function Notification(props) {


    return (
        <div className="navbar-item-container">
            <button className="navbar-btn navbar-notify">
                <FontAwesomeIcon icon={faBell} />
            </button>
            {
                props.openNotification && 
                <aside className="dropdown notify-drop">
                    <div className="dropdown-title">
                        <p>Notifications</p>
                    </div>
                    <DropdownItem
                        topLeft={<FontAwesomeIcon icon={faExclamationTriangle} className="dropdown-icon" />}
                        topRight="Application Error"
                        bottomRight="Just now"
                    ></DropdownItem>
                    <DropdownItem
                        topLeft={<FontAwesomeIcon icon={faCog} className="dropdown-icon" />}
                        topRight="Settings"
                        bottomRight="Private message"
                    ></DropdownItem>
                    <DropdownItem
                        topLeft={<FontAwesomeIcon icon={faUserCircle} className="dropdown-icon" />}
                        topRight="New user registration"
                        bottomRight="2 days ago"
                    ></DropdownItem>
                </aside>
            }
        </div>
    )
}

export default Notification;