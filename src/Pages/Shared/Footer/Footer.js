import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "black", mt: 5, py: 5, color: "white", pb: 10 }}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <img src="https://i.ibb.co/mzMrcNn/map-pin-2-fill.png" />
                        <Typography variant="body1">H100 (3rd floor) , Road 100</Typography>
                        <Typography variant="body1">New DOHS, Mohakhali, Dhaka BAngladesh</Typography>
                    </Grid>
                    <Grid item xs={12} md={2} sx={{ textAlign: "left" }}>
                        <Typography variant="h6">Company</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}>About</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}>Project</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}>Our Team</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}>Terms and condition</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}>Submit Listing</Typography>
                    </Grid>
                    <Grid item xs={12} md={2} sx={{ textAlign: "left" }}>
                        <Typography variant="h6">Quick Links</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}>Quick Links</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}>Rentals</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}>Sales</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}>Contacts</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}>Our Blogs</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ textAlign: "left" }}>
                        <Typography variant="h6">About Us</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, iste inventore. Tenetur consequatur exercitationem autem, perspiciatis consectetur repellat consequuntur provident quod modi ut nulla animi earum suscipit, </Typography>
                        <Box sx={{ py: 1 }} >
                            <img src="https://i.ibb.co/dGV62qX/Vector.png" style={{ paddingRight: "10px" }} width="40px" />
                            <img src="https://i.ibb.co/dcyNGTk/Vector-1.png" style={{ paddingRight: "10px" }} width="40px" />
                            <img src="https://i.ibb.co/drnp7F0/Vector-2.png" style={{ paddingRight: "10px" }} width="40px" />
                            <img src="https://i.ibb.co/NZy4QFm/Vector-3.png" style={{ paddingRight: "10px" }} width="40px" />
                        </Box>
                    </Grid>
                </Grid>
                <Typography variant="subtitle1">copyright @1990-2021 All right reserved by well-wreath.com</Typography>
            </Container>
        </Box>
    );
};

export default Footer;