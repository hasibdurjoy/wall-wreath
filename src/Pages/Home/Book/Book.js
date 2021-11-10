import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button, Container, FormControlLabel, FormLabel, TextField, Typography } from '@mui/material';
import { Box, fontWeight } from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Alert from '@mui/material/Alert';
import useAuth from '../../../hooks/useAuth';

const Book = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { user } = useAuth();
    const [bookingSuccess, setBookingSuccess] = useState(false);

    useEffect(() => {
        fetch(`https://salty-ravine-02871.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const handleBooking = e => {
        const booking = {
            displayName: user.displayName,
            email: user.email,
            status: "pending",
        }
        fetch('https://ancient-springs-79733.herokuapp.com/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                }
            });

        e.preventDefault();
    }

    return (
        <Container sx={{ width: "50%", pb: 3, mx: 'auto' }} >
            <form onSubmit={handleBooking}>
                <TextField
                    label="name"
                    id="outlined-basic"
                    type="texts"
                    variant="outlined"
                    value={user.displayName}
                    sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                <TextField
                    label="E-mail"
                    id="outlined-basic"
                    type="texts"
                    name="email"
                    variant="outlined"
                    value={user.email}
                    sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                <TextField
                    required
                    label="Address"
                    id="outlined-basic"
                    type="texts"
                    name="name"
                    variant="outlined"
                    sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                <TextField
                    required
                    label="Phone"
                    id="outlined-basic"
                    type="number"
                    name="phone"
                    variant="outlined"
                    sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                <TextField
                    value={product.name}
                    id="outlined-basic"
                    type="texts"
                    name="name"
                    variant="outlined"
                    sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                <TextField
                    value={`$ ${product.price}`}
                    id="outlined-basic"
                    type="texts"
                    name="name"
                    variant="outlined"
                    sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />


                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {/* <Typography>Your Service Charge will be {service.price}</Typography> */}
                    <Button
                        type="submit"
                        style={{ color: "white", backgroundColor: "#F63E7B", padding: "10px" }} sx={{ my: 2, mx: 'auto' }}
                    >Confirm Order</Button>
                </Box>

            </form>
            {
                bookingSuccess && <Alert severity="success">Successfully Booked</Alert>

            }
        </Container>
    );
};

export default Book;