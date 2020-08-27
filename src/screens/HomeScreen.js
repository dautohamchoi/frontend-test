import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import axios from 'axios';
import Cookie from 'js-cookie';

function HomeScreen(props) {
    const [open, setOpen] = useState(true)
    const [openSidebarRight, setOpenSidebarRight] = useState(false);
    const [users, setUsers] = useState(null);
    

    useEffect(() => {
        const token = Cookie.getJSON('token');
        if (token) {
            async function fetchData() {
                const { data } = await axios.get('https://cyb06ylby6.execute-api.ap-southeast-1.amazonaws.com/v1/users', {
                    headers: {
                        Authorization: 'Bearer ' + token.token
                    }
                })
                setUsers(data);
            }
            fetchData();
        } else {
            // redirect to login page if users still do not log in
            props.history.push('/login');
        }
    }, []);

    const sidebarHandler = (e) => {
        const clickedBtn = e.target.closest('button');
        if (clickedBtn) {
            if (clickedBtn.classList.contains('nav-sidebar')) {
                setOpen(!open);
            } else if (clickedBtn.classList.contains('nav-sidebar-reduced')) {
                setOpenSidebarRight(!openSidebarRight);
            }
            
        }
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.pageXOffset < 1000) {
                setOpenSidebarRight(false);
                setOpen(true);
            } else {
                setOpenSidebarRight(false);
                setOpen(true);
            }
        })
    }, [window.pageXOffset])

    return (
        <div className="home-screen">
            <div onClick={sidebarHandler}>
                <NavBar open={open}></NavBar>
            </div>
            <div className="content-container">
                <div className="content-details">
                    <SideBar open={open}
                            openSidebarRight={openSidebarRight}
                    ></SideBar>
                    <div className="content-table">
                        <div className="table-container">
                            <h4>Striped Table</h4>
                            <div>
                                <table className="table-striped">
                                    <thead>
                                        <tr>
                                            <th className="table-striped-user">User</th>
                                            <th className="table-striped-name">Name</th>
                                            <th className="table-striped-phone">Phone</th>
                                            <th className="table-striped-email">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users &&  users.map(user => (
                                                <tr key={user.id}>
                                                    <td>
                                                        <img src={user.avatar} alt="avatar" className="table-striped-avatar" ></img>
                                                    </td>
                                                    <td className="table-striped-name">
                                                        {user.name}
                                                    </td>
                                                    <td className="table-striped-phone">
                                                        {user.phone}
                                                    </td>
                                                    <td className="table-striped-email">
                                                        {user.email}
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;