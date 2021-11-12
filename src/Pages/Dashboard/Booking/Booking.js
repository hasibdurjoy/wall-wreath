import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import StarRatings from 'react-star-ratings';
import { useHistory } from 'react-router';

const Booking = ({ booking, handleDeleteBooking }) => {
    const { _id, productName, productPrice, productImage, status } = booking;
    const history = useHistory();

    const handleClick = (id) => {
        history.push(`products/${id}`)
    }

    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={3} className="product">
                <Typography variant="h6" sx={{ textAlign: "right" }}>{status}</Typography>
                <img src={productImage} alt="" width="300px" height="300px" style={{ marginTop: "20px" }} />
                <Typography variant="h6" >{productName}</Typography>
                <Typography variant="h6" sx={{ my: 2 }}>$ {productPrice}</Typography>

                <Button onClick={() => { handleDeleteBooking(_id) }} variant="contained" style={{ color: "white", backgroundColor: "#F63E7B", padding: "10px", width: "90%" }} sx={{ my: 2 }}>Delete</Button>
            </Paper>
        </Grid>
    );
};

export default Booking;