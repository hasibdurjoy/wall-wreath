import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import StarRatings from 'react-star-ratings';
import { useHistory } from 'react-router';
import './Product.css';
const Product = ({ product }) => {
    const history = useHistory();
    const [seeMore, setSeeMore] = useState(false)

    const seeMoreButton = () => {
        setSeeMore(true);
    }
    const handleClick = (id) => {
        history.push(`dashboard/${id}`)
    }
    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={3} className="product">
                <img src={product.img} alt="" width="250px" height="300px" style={{ marginTop: "20px" }} />
                <Typography variant="h6" >{product.name}</Typography>
                <Typography variant="h6" sx={{ my: 2 }}>$ {product.price}</Typography>
                <Box sx={{ mx: 2, pb: 3 }} style={{ display: "none" }} className="product-description">
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
                />
                <Button type="contained" style={{ color: "white", backgroundColor: "#F63E7B", padding: "10px", width: "90%" }} sx={{ my: 2 }}>Buy Now</Button>
            </Paper>
        </Grid>
    );
};

export default Product;