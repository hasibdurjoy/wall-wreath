import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { CircularProgress, Container, Typography } from '@mui/material';
import Product from '../Product/Product';

const AllProducts = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://salty-ravine-02871.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
    }, [])
    return (
        <Container sx={{ mt: 0 }}>
            <Typography variant="h4" style={{ marginTop: 0 }} sx={{ fontWeight: 900, pb: 3 }}>Our Awesome <span style={{ color: "#F63E7B" }}>Products</span></Typography>
            <Grid container spacing={5}>
                {
                    products.map(product => <Product product={product} />)
                }
            </Grid>
            {loading && <CircularProgress color="success" />}
        </ Container>
    );
};

export default AllProducts;