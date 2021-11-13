import React from 'react';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <nav className="navbar container navbar-expand-lg navbar-light bg-transperent" >
                <div className="container-fluid">
                    <NavLink to="/" ><img src="https://i.ibb.co/QMqQRbF/Screenshot-19-removebg-preview.png" alt="" width="200px" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <NavLink to="/home" style={{ textDecoration: "none" }} ><Button style={{ color: "black" }} type="contained">Home</Button></NavLink>

                            <NavLink to="/products" style={{ textDecoration: "none" }}><Button style={{ color: "black" }} type="contained">Products</Button></NavLink>

                            {
                                user?.email ? <>
                                    <NavLink to="/dashboard" style={{ textDecoration: "none" }}><Button style={{ color: "black" }} type="contained">Dashboard</Button></NavLink>
                                    <Button variant="contained" style={{ backgroundColor: "white", color: "black", marginRight: "5px", boxShadow: "none" }}>{user.displayName}</Button>
                                    <Button onClick={logOut} style={{ color: "white", backgroundColor: "#F63E7B" }}>Logout</Button>
                                </>

                                    :
                                    <>
                                        <NavLink to="/login" style={{ textDecoration: "none", borderRadius: "20px" }}><Button type="contained" style={{ color: "white", backgroundColor: "#F63E7B" }}>Login</Button></NavLink>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    );
};

export default Navigation;