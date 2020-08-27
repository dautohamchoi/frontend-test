import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faUser, faFile, faChartBar, faIcons, faStickyNote, faTable, faDiceD6, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

function SideBar(props) {
    const [openUIElements, setOpenUIElements] = useState(false);
    const [openUserPages, setOpenUserPages] = useState(false);

    useEffect(() => {
        const sidebarItems = document.querySelectorAll('.sidebar-item');
        const sideBarReducedItems = document.querySelectorAll('.sidebar-item-reduced');
        const hoverSidebar = (item, id) => {
            if (sideBarReducedItems[id]) {
                sideBarReducedItems[id].classList.add('active-sidebar');
                if (item.lastChild.classList.contains('sidebar-item-list-dropdown')) {
                    item.lastChild.classList.add('active');
                }
            } 
        }
        const hoverOutSidebar = (item, id) => {
            if (sideBarReducedItems[id]) {
                sideBarReducedItems[id].classList.remove('active-sidebar');
                if (item.lastChild.classList.contains('sidebar-item-list-dropdown')) {
                    item.lastChild.classList.remove('active');
                }
            } 
        }
        if (!props.open) {
            sidebarItems.forEach(item => {
                const id = item.dataset.id;
                item.addEventListener('mouseover', () => hoverSidebar(item, id));
                item.addEventListener('mouseout', () => hoverOutSidebar(item, id));
            });            
        } else {
            sidebarItems.forEach(item => {
                const id = item.dataset.id;
                item.removeEventListener('mouseover', hoverSidebar(item, id));
                item.removeEventListener('mouseout', () => hoverOutSidebar(item, id));
            });   
        }
    }, [props.open]);


    return (
        <div className={
            props.openSidebarRight ? "sidebar sidebar-right active" : props.open ? 
            "sidebar sidebar-right" : "sidebar-reduced"}
            >
            <div className="sidebar-item" data-id="0">
                <FontAwesomeIcon icon={faTachometerAlt} />
                {
                    props.open 
                    ?  <span>Dashboard</span>
                    :  <span className="sidebar-item-reduced">
                            Dashboard
                       </span>
                }
            </div>
            <div className="sidebar-item" data-id="1"
            onClick={() => {
                setOpenUIElements(!openUIElements);
                setOpenUserPages(false);
            }}>
                <FontAwesomeIcon icon={faDiceD6} />
                {
                    props.open ?
                    (<span className="sidebar-item-list">
                        <div className="sidebar-item-list-content">
                            <span>UI Elements</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                    </span>)
                    : 
                    (<span className="sidebar-item-list sidebar-item-reduced">
                        <div className="sidebar-item-list-content">
                            <span>UI Elements</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                    </span>)
                    
                }
                {
                    openUIElements && 
                    props.open ?
                    (<ul >
                        <li>Button</li>
                        <li>Typography</li>
                    </ul>)
                    :
                    (<ul className="sidebar-item-list-dropdown">
                        <li>Button</li>
                        <li>Typography</li>
                    </ul>)                    
                    
                }
            </div>
            <div className="sidebar-item" data-id="2">
                <FontAwesomeIcon icon={faStickyNote} />
                {
                    props.open ? <span>Form Elements</span>
                    : <span className="sidebar-item-reduced">Form Elements</span>
                }
            </div>
            <div className="sidebar-item" data-id="3">
                <FontAwesomeIcon icon={faChartBar} />
                {
                    props.open ? <span>Charts</span>
                    : <span className="sidebar-item-reduced">Charts</span>
                }
            </div>
            <div className="sidebar-item" data-id="4">
                <FontAwesomeIcon icon={faTable} />
                {
                    props.open ? <span>Tables</span>
                    : <span className="sidebar-item-reduced">Tables</span>
                }
            </div>
            <div className="sidebar-item" data-id="5">
                <FontAwesomeIcon icon={faIcons} />
                {
                    props.open ? <span>Icons</span>
                    : <span className="sidebar-item-reduced">Icons</span>
                }
            </div>
            <div className="sidebar-item" data-id="6"
            onClick={() => {
                setOpenUserPages(!openUserPages);
                setOpenUIElements(false);
                }
            }>
                <FontAwesomeIcon icon={faUser} />
                {
                    props.open ? 
                    (<span className="sidebar-item-list">
                        <div className="sidebar-item-list-content">
                            <span>User Pages</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                    </span>)
                    :
                    (<span className="sidebar-item-list sidebar-item-reduced">
                        <div className="sidebar-item-list-content">
                            <span>User Pages</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                    </span>)
                }
                {
                    openUserPages &&
                    props.open ?
                    (<ul>
                        <li>Login</li>
                        <li>Login 2</li>
                        <li>Register</li>
                        <li>Register 2</li>
                        <li>Lockscreen</li>
                    </ul>)
                    :
                    (<ul className="sidebar-item-list-dropdown">
                        <li>Login</li>
                        <li>Login 2</li>
                        <li>Register</li>
                        <li>Register 2</li>
                        <li>Lockscreen</li>
                    </ul>)
                }
            </div>
            <div className="sidebar-item" data-id="7">
                <FontAwesomeIcon icon={faFile} />
                {
                    props.open ? <span>Documentation</span>
                    : <span className="sidebar-item-reduced">Documentation</span>
                }
            </div>
        </div>
    )
}

export default SideBar;
