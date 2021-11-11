import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import StarRatings from 'react-star-ratings';
import { useHistory } from 'react-router';

const AdminShowSingleProduct = ({ product, handleDeleteProduct }) => {
    const history = useHistory();
    const handleEditProduct = id => {
        history.push(`/dashboard/manageProducts/${id}`)
    }

    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={3} className="product">
                <img src={product.img} alt="" width="300px" height="300px" style={{ marginTop: "20px" }} />
                <Typography variant="h6" >{product.name}</Typography>
                <Typography variant="h6" sx={{ my: 2 }}>$ {product.price}</Typography>
                <Box sx={{ mx: 2, pb: 3 }} id="product-description">
                    <Typography variant="subtitle1"  >Height : {product.description.height} inches</Typography>
                    <Typography variant="subtitle1"  >Width : {product.description.width} inches</Typography>
                    <Typography variant="subtitle1"  >Frame : {product.description.frame} </Typography>
                    <Typography variant="subtitle1"  > {product.description.about} </Typography>
                </Box>

                <StarRatings
                    rating={parseFloat(product.rating)}
                    starDimension="20px"
                    starSpacing="5px"
                    starRatedColor="orange"
                /> <br />
                <Box style={{ display: 'flex', justifyContent: "space-around" }}>
                    <Button onClick={() => { handleEditProduct(product._id) }} type="contained" style={{ color: "white", backgroundColor: "green", padding: "10px" }} sx={{ my: 2 }}>Edit</Button>
                    <Button onClick={() => { handleDeleteProduct(product._id) }} type="contained" style={{ color: "white", backgroundColor: "red", padding: "10px" }} sx={{ my: 2 }}>Delete</Button>
                </Box>
            </Paper>
        </Grid>
    );
};

export default AdminShowSingleProduct;