import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import StarRatings from 'react-star-ratings';
import ProductUpdateModal from '../ProductUpdateModal/ProductUpdateModal';

const AdminShowSingleProduct = ({ product, handleDeleteProduct, handleSuccessModalOpen, setUpdateSuccess }) => {
    const [openBooking, setBookingOpen] = useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);


    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={3} className="product">
                <img src={product.img} alt="" width="90%" height="300px" style={{ marginTop: "10px" }} />
                <Typography variant="h6" >{product.name}</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2, mb: 1 }}>
                    <Typography variant="h6" >$ {product.price}</Typography>
                    <StarRatings
                        rating={parseFloat(product.rating)}
                        starDimension="20px"
                        starSpacing="5px"
                        starRatedColor="orange"
                    />
                </Box>

                <Box sx={{ mx: 2, pb: 1 }} id="product-description">
                    <Box sx={{ display: "flex", justifyContent: "space-around" }} >
                        <Typography variant="subtitle1"  >Height : {product.height} inches</Typography>
                        <Typography variant="subtitle1"  >Width : {product.width} inches</Typography>
                    </Box>
                    <Typography variant="subtitle1"  >Frame : {product.frame} </Typography>
                    <Typography variant="subtitle1"  > {product.about} </Typography>
                </Box>
                <Box style={{ display: 'flex', justifyContent: "space-around" }}>
                    <Button onClick={handleBookingOpen} variant="contained" style={{ width: "30%", color: "white", padding: "10px" }} sx={{ my: 2 }}>Edit</Button>
                    <Button onClick={() => { handleDeleteProduct(product._id) }} type="contained" style={{ width: "30%", color: "white", backgroundColor: "#F63E7B", padding: "10px" }} sx={{ my: 2 }}>Delete</Button>
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