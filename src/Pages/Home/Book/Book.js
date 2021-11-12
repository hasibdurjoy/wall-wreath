import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button, Container, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import ModalMessage from '../../Dashboard/ModalMessage/ModalMessage';

const Book = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { user } = useAuth();


    const [modalText, setModalText] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleSuccessModalOpen = (text) => {
        setModalText(text);
        setOpen(true);
    };

    const { register, handleSubmit, formState: { errors }, reset } = useForm();



    useEffect(() => {
        fetch(`https://salty-ravine-02871.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const onSubmit = data => {
        const booking = {
            displayName: data.name,
            email: data.email,
            address: data.address,
            phone: data.phone,
            productName: product.name,
            productId: product._id,
            productPrice: product.price,
            productImage: product.img,
            status: "pending",
        }

        const proceed = window.confirm("Confirm Booking ?");
        if (proceed) {
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
                        handleSuccessModalOpen("Booked Successfully");
                        reset();
                    }
                });
        }

    }

    return (
        <Container sx={{ width: "50%", pb: 3, mx: 'auto' }} >
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    {...register("name")}
                    label="name"
                    id="outlined-basic"
                    type="texts"
                    variant="outlined"
                    value={user.displayName}
                    sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                <TextField
                    {...register("email")}
                    label="E-mail"
                    id="outlined-basic"
                    type="texts"
                    variant="outlined"
                    value={user.email}
                    sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                <TextField
                    {...register("address")}
                    required
                    label="Address"
                    id="outlined-basic"
                    type="texts"
                    variant="outlined"
                    sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                <TextField
                    {...register("phone")}
                    required
                    label="Phone"
                    id="outlined-basic"
                    type="number"
                    variant="outlined"
                    sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                <TextField
                    {...register("productName")}
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
                    {...register("price")}
                    variant="outlined"
                    sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />



                <Button
                    type="submit"
                    style={{ color: "white", backgroundColor: "#F63E7B", padding: "10px" }} sx={{ my: 2, mx: 'auto' }}
                >Confirm Order</Button>
            </form>
            <ModalMessage
                open={open}
                setOpen={setOpen}
                modalText={modalText}
            >
            </ModalMessage>
        </Container>
    );
};

export default Book;