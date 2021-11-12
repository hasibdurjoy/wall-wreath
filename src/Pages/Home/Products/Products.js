import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Button, CircularProgress, Container, Typography } from '@mui/material';
import Product from '../Product/Product';
import { useHistory } from 'react-router';
import { Box } from '@mui/system';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        fetch('https://salty-ravine-02871.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
    }, []);

    const handleSeeAll = () => {
        history.push("/products");
    }
    return (
        <Container sx={{ mt: 0 }}>
            <Typography variant="h4" style={{ marginTop: 0 }} sx={{ fontWeight: 900, pb: 3 }}>Our Awesome <span style={{ color: "#F63E7B" }}>Products</span></Typography>
            <Grid container spacing={5}>
                {
                    products.slice(0, 6).map(product => <Product product={product} />)
                }
            </Grid>
            <Box sx={{ mt: 4, mb: 3 }}><Button onClick={handleSeeAll} variant="contained" style={{ width: "30%", color: "white", backgroundColor: "#F63E7B", padding: "10px" }}>See All Products</Button></Box>
            {loading && <CircularProgress color="success" />}
        </ Container>
    );
};

export default Products;