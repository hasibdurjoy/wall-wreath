import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import StarRatings from 'react-star-ratings';
import { useHistory } from 'react-router';

const Product = ({ product }) => {
    const history = useHistory();
    const [seeMore, setSeeMore] = useState(false)

    const seeMoreButton = () => {
        setSeeMore(true);
    }
    const handleClick = (id) => {
        history.push(`/products/${id}`)
    }
    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={3} className="product">
                <img src={product.img} alt="" width="90%" height="300px" style={{ marginTop: "10px" }} />
                <Typography variant="h6" >{product.name}</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", mt: 2, mb: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: 30, color: "#F63E7B", fontWeight: 900 }}>$ {product.price}</Typography>
                    <StarRatings
                        rating={parseFloat(product.rating)}
                        starDimension="20px"
                        starSpacing="5px"
                        starRatedColor="orange"
                    />
                </Box>

                <Box sx={{ mx: 2, pb: 1 }} id="product-description">
                    <Box sx={{ display: "flex", justifyContent: "space-around" }} >
                        <Typography variant="subtitle1" > <b>Height</b> : {product.height} inches</Typography>
                        <Typography variant="subtitle1"  ><b>Width</b> : {product.width} inches</Typography>
                    </Box>
                    <Typography variant="subtitle1"  ><b>Frame</b> : {product.frame} </Typography>
                    <Typography variant="subtitle1"  > {product.about} </Typography>
                </Box>


                <Button onClick={() => { handleClick(product._id) }} type="contained" style={{ color: "white", backgroundColor: "#F63E7B", padding: "10px", width: "90%" }} sx={{ my: 2 }}>Buy Now</Button>
            </Paper>
        </Grid>
    );
};

export default Product;