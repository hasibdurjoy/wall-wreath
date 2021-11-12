import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://salty-ravine-02871.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant="h4" sx={{ mb: 5, fontWeight: 800 }}>Our Happy <span style={{ color: "#F63E7B" }}>Customers </span>says</Typography>
            <Grid container spacing={5}>
                {
                    reviews.map(review => <Review review={review}></Review>)
                }
            </Grid>
        </Container>
    );
};

export default Reviews;