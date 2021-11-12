import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const WhyUs = () => {
    return (
        <Container sx={{ flexGrow: 1, my: 5 }}>
            <Typography variant="h5" sx={{ fontWeight: 900, mb: 4 }}>Why Us</Typography>
            <Grid container spacing={5}>
                <Grid item xs={12} md={3}>
                    <Paper elevation={3} >
                        <img src="https://i.ibb.co/tzYkQ8V/Screenshot-9.png" alt="" height="200px" style={{ padding: "5px 5px" }} />
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>24/7 Access</Typography>
                        <Typography variant="body1" sx={{ pb: 2, px: 1 }}>Check inventory updates and order status in real time</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper elevation={3} >
                        <img src="https://i.ibb.co/48K0NCF/Screenshot-10-2.png" alt="" height="200px" style={{ padding: "5px 5px" }} />
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>Worldwide Shipping</Typography>
                        <Typography variant="body1" sx={{ pb: 2, px: 1 }}>500+ distribution channels in 60 countries</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper elevation={3} >
                        <img src="https://images.theconversation.com/files/429189/original/file-20211028-21-1nlia2r.jpg?ixlib=rb-1.1.0&rect=323%2C98%2C5667%2C4149&q=45&auto=format&w=926&fit=clip" alt="" height="200px" style={{ padding: "5px 5px" }} />
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>Marketing Support</Typography>
                        <Typography variant="body1" sx={{ pb: 2, px: 1 }}>Strategic partnership with brand companies/500+ posters</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper elevation={3} >
                        <img src="https://i.ibb.co/jRrDM1G/Screenshot-12.png" alt="" height="200px" style={{ padding: "5px 5px" }} />
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>5 Languages</Typography>
                        <Typography variant="body1" sx={{ pb: 2, px: 1 }}>Bangla, Hindi, Arabic, Korean, English</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default WhyUs;