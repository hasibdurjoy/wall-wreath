import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [displayReviews, setDisplayReviews] = useState([]);
    const [seeAll, setSeeAll] = useState(false);
    useEffect(() => {
        fetch("https://salty-ravine-02871.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setDisplayReviews(data.slice(0, 4))
            })
    }, []);

    const handleSeeAll = () => {
        if (seeAll === false) {
            setDisplayReviews(reviews);
            setSeeAll(true);
        }
        else {
            setDisplayReviews(reviews.slice(0, 4));
            setSeeAll(false);
        }
    }

    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant="h4" sx={{ mb: 5, fontWeight: 800 }}>Our Happy <span style={{ color: "#F63E7B" }}>Customers </span>says</Typography>
            <Grid container spacing={5}>
                {
                    displayReviews.map(review => <Review review={review}></Review>)
                }
            </Grid>

            <Box sx={{ mt: 4, mb: 3 }}><Button onClick={handleSeeAll} variant="contained" style={{ width: "30%", color: "white", backgroundColor: "#F63E7B", padding: "10px" }}>{seeAll ? "See  Less" : "See All"} </Button></Box>
        </Container>
    );
};

export default Reviews;