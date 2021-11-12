import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button, Container, FormControlLabel, FormLabel, TextField, Typography } from '@mui/material';
import { Box, fontWeight } from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Alert from '@mui/material/Alert';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";

const AdminAddProduct = () => {
    const [addSuccess, setAddSuccess] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('https://salty-ravine-02871.herokuapp.com/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAddSuccess(true);
                    reset();
                }
            });
    };

    return (
        <div>
            <Container sx={{ width: "60%", pb: 3 }} >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register("name")}
                        required
                        name="name"
                        label="Product Name"
                        type="texts"
                        variant="outlined"
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                    <TextField
                        {...register("price")}
                        required
                        label="Price"
                        id="outlined-basic"
                        type="number"
                        variant="outlined"
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                    <Box style={{ display: "flex", justifyContent: "space-between" }}>
                        <TextField
                            {...register("height")}
                            required
                            label="height(inches)"
                            id="outlined-basic"
                            type="number"
                            variant="outlined"
                            sx={{ width: "49%", backgroundColor: "white", mb: 1 }} />

                        <TextField
                            {...register("width")}
                            required
                            label="width(inches)"
                            id="outlined-basic"
                            type="number"
                            variant="outlined"
                            sx={{ width: "49%", backgroundColor: "white", mb: 1 }} />
                    </Box>

                    <Box style={{ display: "flex", justifyContent: "space-between" }}>
                        <TextField
                            {...register("rating")}
                            required
                            label="rating"
                            id="outlined-basic"
                            type="number"
                            variant="outlined"
                            sx={{ width: "49%", backgroundColor: "white", mb: 1 }} />

                        <TextField
                            {...register("frame")}
                            required
                            label="frame"
                            id="outlined-basic"
                            type="text"
                            variant="outlined"
                            sx={{ width: "49%", backgroundColor: "white", mb: 1 }} />
                    </Box>

                    <TextField
                        {...register("img")}
                        required
                        label="Image url"
                        id="outlined-basic"
                        type="texts"
                        variant="outlined"
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                    <TextField
                        {...register("about")}
                        required
                        label="description"
                        id="outlined-basic"
                        type="texts"
                        variant="outlined"
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />


                    <Button
                        type="submit"
                        style={{ color: "white", backgroundColor: "#F63E7B", padding: "10px", width: "100%" }} sx={{ my: 2 }}
                    >Add</Button>

                </form>
                {
                    addSuccess && <Alert severity="success">Successfully added service</Alert>

                }
            </Container>
        </div >
    );
};

export default AdminAddProduct;