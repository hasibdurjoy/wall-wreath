import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Alert from '@mui/material/Alert';
import useAuth from '../../../hooks/useAuth';

const Book = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { user } = useAuth();
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [bookingData, setBookingData] = useState({});
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newBookingData = { ...bookingData };
        newBookingData[field] = value;
        setBookingData(newBookingData);
    }

    useEffect(() => {
        fetch(`https://salty-ravine-02871.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const handleBooking = e => {
        console.log(bookingData);
        const booking = {
            displayName: user.displayName,
            email: user.email,
            ...bookingData,
            productName: product.name,
            productId: product._id,
            productPrice: product.price,
            productImage: product.img,
            status: "pending",
        }

        console.log(booking);
        fetch('https://salty-ravine-02871.herokuapp.com/bookings', {
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

    if (bookingSuccess) {
        history.push("/");
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
                    onBlur={handleOnChange}
                    required
                    label="Address"
                    id="outlined-basic"
                    type="texts"
                    name="address"
                    variant="outlined"
                    sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                <TextField
                    onBlur={handleOnChange}
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



                <Button
                    type="submit"
                    style={{ color: "white", backgroundColor: "#F63E7B", padding: "10px" }} sx={{ my: 2, mx: 'auto' }}
                >Confirm Order</Button>
            </form>
            {
                bookingSuccess && <Alert severity="success">Successfully Booked</Alert>

            }
        </Container>
    );
};

export default Book;