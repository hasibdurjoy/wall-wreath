import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Review = ({ review }) => {
    return (
        <Grid item xs={12} md={6} sx={{ mb: 3 }}>
            <Paper elevation={3} >
                <Grid container spacing={0} sx={{ py: 2, px: 3 }}>
                    <Grid item xs={4}>
                        <Box style={{ border: "2px solid black" }}>
                            <img src={review.img} alt="" style={{ marginLeft: "50px", marginTop: "-10px" }} width="150px" height="150px" />
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <h2>{review.name}</h2>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Review;