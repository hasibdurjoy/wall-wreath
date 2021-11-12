import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

const Booking = ({ booking, handleDeleteBooking }) => {
    const { _id, productName, productPrice, productImage, status } = booking;

    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={3} className="product">
                <img src={productImage} alt="" width="300px" height="300px" style={{ paddingTop: "5px" }} />
                <Typography variant="h6" >{productName}</Typography>
                <Typography variant="h6" sx={{ my: 1 }}>$ {productPrice}</Typography>

                <Typography variant="h6" sx={{ textAlign: "center" }} >
                    Status : <span style={status === "pending" ? { color: "red" } : { color: "green" }}>{status}</span>
                </Typography>

                <Button onClick={() => { handleDeleteBooking(_id) }} variant="contained" style={{ color: "white", backgroundColor: "#F63E7B", padding: "10px", width: "90%" }} sx={{ my: 2 }}>Delete</Button>
            </Paper>
        </Grid>
    );
};

export default Booking;