import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSms } from '@fortawesome/free-solid-svg-icons';
import './navbarComponents.css';
import DropdownItem from './DropdownItem';

function Message(props) {
    return (
        <div >
            <button className="navbar-btn navbar-message">
                <FontAwesomeIcon icon={faSms} />
            </button>
            {
                props.openMessage && 
                <aside className="dropdown mess-drop">
                    <div className="dropdown-title">
                        <p>Messages</p>
                    </div>
                    <DropdownItem
                        topLeft={<img src="/face28.jpg" alt="profile" className="dropdown-icon" />}
                        topRight="David Grey"
                        bottomRight="The meeting is canceled"
                    ></DropdownItem>
                    <DropdownItem
                        topLeft={<img src="/face28.jpg" alt="profile" className="dropdown-icon" />}
                        topRight="Tim Cook"
                        bottomRight="New Product launch"
                    ></DropdownItem>
                    <DropdownItem
                        topLeft={<img src="/face28.jpg" alt="profile" className="dropdown-icon" />}
                        topRight="Johnson"
                        bottomRight="Upcoming board meeting"
                    ></DropdownItem>
                </aside>
            }
        </div>
    )
}

export default Message;