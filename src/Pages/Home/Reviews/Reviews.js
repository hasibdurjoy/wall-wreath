import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Review from '../Review/Review';

const reviews = [
    {
        name: "Fazle Rabbi Talukder",
        comment: "This a very good and trusted shop",
        rating: "5",
        img: "https://i.ibb.co/DpybPCR/Screenshot-4.png"
    },

    {
        name: "Hridoy Star Lord",
        comment: "very good and trusted shop I have ever seen",
        rating: "4",
        img: "https://i.ibb.co/KzJvs2x/Screenshot-5.png"
    },

    {
        name: "Towfiq Demon",
        comment: "rheir shop is very good. and product are very high quality",
        rating: "4.9",
        img: "https://i.ibb.co/Sc1TyP0/Screenshot-6.png"
    },

]
const Reviews = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant="h4" sx={{ mb: 5 }}>Our Happy Customers says</Typography>
            <Grid container spacing={5}>
                {
                    reviews.map(review => <Review review={review}></Review>)
                }
            </Grid>
        </Container>
    );
};

export default Reviews;