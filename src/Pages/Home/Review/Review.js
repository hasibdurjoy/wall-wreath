import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import StarRatings from 'react-star-ratings';

const Review = ({ review }) => {
    return (
        <Grid item xs={12} md={6} sx={{ mb: 0 }}>
            <Paper elevation={1} >
                <Grid container spacing={0} >
                    <Grid item xs={4}>
                        <Box style={{ border: "5px solid black" }} width="150px" height="150px">
                            <img src={review.img} alt="" style={{ marginLeft: "10px", marginTop: "-15px" }} width="150px" height="150px" />
                        </Box>
                    </Grid>
                    <Grid item xs={8} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <Box sx={{ pl: 4 }}>
                            <Typography variant="h5">{review.name}</Typography>
                            <Typography variant="subtitle1">{review.comment}</Typography>
                            <StarRatings
                                rating={parseFloat(review.rating)}
                                starDimension="20px"
                                starSpacing="5px"
                                starRatedColor="orange"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Review;