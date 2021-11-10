import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Review from '../Review/Review';

const reviews = [
    {
        name: "durjoy",
        comment: "very good",
        rating: "4",
        img: "https://prestashop.mahardhi.com/MT04/artiem/modules/mt_testimonials/images/sample-2.jpg"
    },

    {
        name: "durjoy",
        comment: "very good",
        rating: "4",
        img: "https://prestashop.mahardhi.com/MT04/artiem/modules/mt_testimonials/images/sample-2.jpg"
    },

    {
        name: "durjoy",
        comment: "very good",
        rating: "4",
        img: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg"
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