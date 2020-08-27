import React from 'react'
import './navbarComponents.css';

function DropdownItem(props) {
    return (
        <div className="dropdown-item">
            {props.topLeft}
            <div>
                <p>{props.topRight}</p>
                <p>{props.bottomRight}</p>
        </div>
    </div>
    )
};

export default DropdownItem;