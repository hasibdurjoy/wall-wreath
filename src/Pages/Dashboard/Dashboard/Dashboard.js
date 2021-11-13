import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Switch,
    Route,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import { AppBar, Button, IconButton, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import Pay from '../Pay/Pay';
import BookingList from '../BookingList/BookingList';
import Feedback from '../Feedback/Feedback';
import AdminBookingList from '../AdminBookingList/AdminBookingList';
import AdminMakeAdmin from '../AdminMakeAdmin/AdminMakeAdmin';
import AdminAddProduct from '../AdminAddProduct/AdminAddProduct';
import AdminManageProducts from '../AdminManageProducts/AdminManageProducts';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 240;

function Dashboard(props) {
    const { user, logOut, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [bannerText, setBannerText] = React.useState("Dashboard");
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const activeStyle = {
        color: "red"
    }

    const handleBannerText = e => {
        setBannerText(e.target.innerText);
    }

    const drawer = (
        <div>
            <Toolbar sx={{ backgroundColor: "#1976d2", color: "white" }} >
                <Typography variant="h6" noWrap component="div">
                    Dashboard
                </Typography>
            </Toolbar>
            <Divider />
            <Box sx={{ textAlign: "left", ml: 2, fontWeight: 600, fontSize: 17, py: 2 }}>
                <NavLink to="/home" style={{ marginRight: "20px", textDecoration: "none", color: "black" }}>Home</NavLink> <br />
                {
                    admin ? <>
                        <NavLink
                            onClick={handleBannerText}
                            activeStyle={activeStyle}
                            to={`${url}/manageBookings`}
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            Manage Bookings</NavLink><br />

                        <NavLink
                            onClick={handleBannerText}
                            activeStyle={activeStyle}
                            to={`${url}/makeAdmin`}
                            style={{ textDecoration: "none", color: "black" }}>
                            Make Admin</NavLink ><br />

                        <NavLink
                            onClick={handleBannerText}
                            activeStyle={activeStyle}
                            to={`${url}/addProduct`}
                            style={{ textDecoration: "none", color: "black" }}>
                            Add New Product</NavLink ><br />

                        <NavLink
                            onClick={handleBannerText}
                            activeStyle={activeStyle}
                            to={`${url}/manageProducts`}
                            style={{ textDecoration: "none", color: "black" }}>
                            Manage Products</NavLink ><br />

                    </>

                        :
                        <>
                            <NavLink
                                onClick={handleBannerText}
                                activeStyle={activeStyle}
                                to={`${url}/pay`}
                                style={{ textDecoration: "none", color: "black" }}>
                                Pay</NavLink ><br />

                            <NavLink
                                onClick={handleBannerText}
                                activeStyle={activeStyle}
                                to={`${url}/myOrders`}
                                style={{ textDecoration: "none", color: "black" }}>
                                My Orders</NavLink ><br />

                            <NavLink
                                onClick={handleBannerText}
                                activeStyle={activeStyle}
                                to={`${url}/review`}
                                style={{ textDecoration: "none", color: "black" }}>
                                Review</NavLink ><br />
                        </>
                }
            </Box>

            <Box sx={{ mt: 5, mx: "auto" }}>
                <Button variant="contained" onClick={logOut} style={{ width: "70%" }}>Logout</Button>
            </Box>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box width="100%" sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="h6" noWrap component="div">
                            {bannerText}
                        </Typography>
                        <Typography variant="h6" noWrap component="div">
                            {user.displayName}
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    {
                        admin ?
                            <AdminRoute exact path={path}><AdminBookingList /></AdminRoute>
                            :
                            <Route exact path={path}><Pay /></Route>
                    }
                    <Route path={`${path}/pay`}><Pay /></Route>
                    <Route path={`${path}/myOrders`}><BookingList /></Route>
                    <Route path={`${path}/review`}><Feedback /></Route>
                    <AdminRoute path={`${path}/manageBookings`}><AdminBookingList /></AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}><AdminMakeAdmin /></AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}><AdminAddProduct /></AdminRoute>
                    <AdminRoute exact path={`${path}/manageProducts`}><AdminManageProducts /></AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    window: PropTypes.func,
};

export default Dashboard;
