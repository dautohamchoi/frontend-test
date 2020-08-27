import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './navbarComponents.css';
import DropdownItem from './DropdownItem';

function Profile(props) {
    return (
        <div >
            <button className="navbar-btn navbar-profile">
                <img src="/face28.jpg" alt="profile"></img>
            </button>
            {
                props.openProfile && 
                <aside className="dropdown profile-drop">
                    <DropdownItem
                        topLeft={<FontAwesomeIcon icon={faCog} className="dropdown-icon" />}
                        topRight="Settings"
                    ></DropdownItem>
                    <DropdownItem
                        topLeft={<FontAwesomeIcon icon={faSignOutAlt} className="dropdown-icon" />}
                        topRight="Sign Out"
                    ></DropdownItem>
                </aside>
            }
        </div>
    )
}

export default Profile;