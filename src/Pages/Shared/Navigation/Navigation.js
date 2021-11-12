import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" style={{ backgroundColor: "white", color: "black", boxShadow: "none" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <NavLink to="/"><img src="https://i.ibb.co/QMqQRbF/Screenshot-19-removebg-preview.png" alt="" width="200px" /></NavLink>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>
                    <NavLink to="/home" style={{ textDecoration: "none" }}><Button style={{ color: "black" }} type="contained">Home</Button></NavLink>

                    <NavLink to="/products" style={{ textDecoration: "none" }}><Button style={{ color: "black" }} type="contained">Products</Button></NavLink>


                    {
                        user?.email ? <>
                            <NavLink to="/dashboard" style={{ textDecoration: "none" }}><Button style={{ color: "black" }} type="contained">Dashboard</Button></NavLink>
                            <Button variant="contained" style={{ backgroundColor: "white", color: "black", marginRight: "5px", boxShadow: "none" }}>{user.displayName}</Button>
                            <Button onClick={logOut} style={{ color: "white", backgroundColor: "#F63E7B" }}>Logout</Button>
                        </>

                            :
                            <>
                                <NavLink to="/login" style={{ textDecoration: "none", backgroundColor: "blue", borderRadius: "20px" }}><Button type="contained" style={{ color: "white", backgroundColor: "#F63E7B" }}>Login</Button></NavLink>
                            </>
                    }

                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </Box >

    );
};

export default Navigation;