import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import StarRatings from 'react-star-ratings';
import { useHistory } from 'react-router';
import ProductUpdateModal from '../ProductUpdateModal/ProductUpdateModal';

const AdminShowSingleProduct = ({ product, handleDeleteProduct, handleSuccessModalOpen, setUpdateSuccess }) => {
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    const history = useHistory();


    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={3} className="product">
                <img src={product.img} alt="" width="300px" height="300px" style={{ marginTop: "20px" }} />
                <Typography variant="h6" >{product.name}</Typography>
                <Typography variant="h6" sx={{ my: 2 }}>$ {product.price}</Typography>
                <Box sx={{ mx: 2, pb: 3 }} id="product-description">
                    <Typography variant="subtitle1"  >Height : {product.height} inches</Typography>
                    <Typography variant="subtitle1"  >Width : {product.width} inches</Typography>
                    <Typography variant="subtitle1"  >Frame : {product.frame} </Typography>
                    <Typography variant="subtitle1"  > {product.about} </Typography>
                </Box>

                <StarRatings
                    rating={parseFloat(product.rating)}
                    starDimension="20px"
                    starSpacing="5px"
                    starRatedColor="orange"
                /> <br />
                <Box style={{ display: 'flex', justifyContent: "space-around" }}>
                    <Button onClick={handleBookingOpen} type="contained" style={{ color: "white", backgroundColor: "green", padding: "10px" }} sx={{ my: 2 }}>Edit</Button>
                    <Button onClick={() => { handleDeleteProduct(product._id) }} type="contained" style={{ color: "white", backgroundColor: "red", padding: "10px" }} sx={{ my: 2 }}>Delete</Button>
                </Box>
            </Paper>
            <ProductUpdateModal
                product={product}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                handleSuccessModalOpen={handleSuccessModalOpen}
                setUpdateSuccess={setUpdateSuccess}
            ></ProductUpdateModal>
        </Grid>
    );
};

export default AdminShowSingleProduct;