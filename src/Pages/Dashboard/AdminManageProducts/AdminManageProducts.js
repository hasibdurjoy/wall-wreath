import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AdminShowSingleProduct from '../AdminShowSingleProduct/AdminShowSingleProduct';

const AdminManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://salty-ravine-02871.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDeleteProduct = (id) => {
        const proceed = window.confirm('Are you sure, you want to cancel?');
        if (proceed) {
            const url = `https://salty-ravine-02871.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                });
        }
    }
    return (
        <Container sx={{ mt: 0 }}>
            <Grid container spacing={5}>
                {
                    products.map(product => <AdminShowSingleProduct product={product} handleDeleteProduct={handleDeleteProduct} />)
                }
            </Grid>
        </ Container>
    );
};

export default AdminManageProducts;