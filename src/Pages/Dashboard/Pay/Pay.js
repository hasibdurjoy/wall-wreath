import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button, Container, FormControlLabel, FormLabel, TextField, Typography } from '@mui/material';
import { Box, fontWeight } from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Alert from '@mui/material/Alert';
import { useForm } from "react-hook-form";

const Pay = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Container sx={{ width: "60%", pb: 3 }} >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register("name")}
                        label="Product Name"
                        type="texts"
                        variant="outlined"
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }}
                    />

                    <TextField

                        required
                        label="Price"
                        id="outlined-basic"
                        type="number"
                        name="price"
                        variant="outlined"
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                    <Box style={{ display: "flex", justifyContent: "space-between" }}>
                        <TextField

                            required
                            label="height(inches)"
                            id="outlined-basic"
                            type="number"
                            name="height"
                            variant="outlined"
                            sx={{ width: "49%", backgroundColor: "white", mb: 1 }} />

                        <TextField

                            required
                            label="width(inches)"
                            id="outlined-basic"
                            type="number"
                            name="width"
                            variant="outlined"
                            sx={{ width: "49%", backgroundColor: "white", mb: 1 }} />
                    </Box>

                    <Box style={{ display: "flex", justifyContent: "space-between" }}>
                        <TextField

                            required
                            label="rating"
                            id="outlined-basic"
                            type="number"
                            name="rating"
                            variant="outlined"
                            sx={{ width: "49%", backgroundColor: "white", mb: 1 }} />

                        <TextField

                            required
                            label="frame"
                            id="outlined-basic"
                            type="text"
                            name="frame"
                            variant="outlined"
                            sx={{ width: "49%", backgroundColor: "white", mb: 1 }} />
                    </Box>

                    <TextField

                        required
                        label="Image url"
                        id="outlined-basic"
                        type="texts"
                        name="img"
                        variant="outlined"
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                    <TextField

                        required
                        label="description"
                        id="outlined-basic"
                        type="texts"
                        name="about"
                        variant="outlined"
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />


                    <Button
                        type="submit"
                        style={{ color: "white", backgroundColor: "#F63E7B", padding: "10px", width: "100%" }} sx={{ my: 2 }}
                    >Add</Button>

                </form>
                {/*  {
                    addSuccess && <Alert severity="success">Successfully added service</Alert>

                } */}
            </Container>
        </div>
    );
};

export default Pay;