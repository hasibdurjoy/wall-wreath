import React from 'react';
import { Container, Typography } from '@mui/material';

const WholeSaleProcess = () => {
    return (
        <Container sx={{ flexGrow: 1, my: 5, mx: "auto" }}>
            <Typography variant="h5" sx={{ fontWeight: 900, mb: 4 }}>WHOLESALE PROCESS</Typography>
            <img src="https://wholesale.stylekorean.com/content/img/new/process_banner.jpg?v202007230001" alt="" width="100%" />
        </Container>
    );
};

export default WholeSaleProcess;