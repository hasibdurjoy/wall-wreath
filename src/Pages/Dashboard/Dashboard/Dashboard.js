import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
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
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const activeStyle = {
        color: "red"
    }

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Box sx={{ textAlign: "left", ml: 2 }}>
                <NavLink to="/home" style={{ marginRight: "20px", textDecoration: "none", }}>Home</NavLink> <br />
                {
                    admin ? <>
                        <NavLink
                            activeStyle={activeStyle}
                            to={`${url}/manageBookings`}
                            style={{ textDecoration: "none", }}>
                            Bookings</NavLink><br />

                        <NavLink
                            activeStyle={activeStyle}
                            to={`${url}/makeAdmin`}
                            style={{ textDecoration: "none", }}>
                            Make Admin</NavLink ><br />

                        <NavLink
                            activeStyle={activeStyle}
                            to={`${url}/addProduct`}
                            style={{ textDecoration: "none", }}>
                            Add New Product</NavLink ><br />

                        <NavLink
                            activeStyle={activeStyle}
                            to={`${url}/manageProducts`}
                            style={{ textDecoration: "none", }}>
                            Manage Products</NavLink ><br />

                    </>

                        :
                        <>
                            <NavLink
                                activeStyle={activeStyle}
                                to={`${url}/pay`}
                                style={{ textDecoration: "none", }}>
                                Pay</NavLink ><br />

                            <NavLink
                                activeStyle={activeStyle}
                                to={`${url}/myOrders`}
                                style={{ textDecoration: "none", }}>
                                My Orders</NavLink ><br />

                            <NavLink
                                activeStyle={activeStyle}
                                to={`${url}/review`}
                                style={{ textDecoration: "none", }}>
                                Review</NavLink ><br />
                        </>
                }
            </Box>

            <Button onClick={logOut} style={{ color: "black" }}>Logout</Button>
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
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Responsive drawer
                    </Typography>
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
                    <AdminRoute path={`${path}/manageProducts`}><AdminManageProducts /></AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
