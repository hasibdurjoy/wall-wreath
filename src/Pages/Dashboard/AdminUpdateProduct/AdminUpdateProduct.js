import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button, Container, FormControlLabel, FormLabel, TextField, Typography } from '@mui/material';
import { Box, fontWeight } from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Alert from '@mui/material/Alert';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";

const AdminUpdateProduct = () => {
    const { productId } = useParams();
    const [addSuccess, setAddSuccess] = useState(false);
    const [product, setProduct] = useState({});
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    useEffect(() => {
        fetch(`https://salty-ravine-02871.herokuapp.com/manageProducts/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const onSubmit = data => {
        const product = {
            name: data.name,
            price: data.price,
            description: {
                height: data.height,
                width: data.width,
                frame: data.frame,
                about: data.description,
            },
            rating: data.rating,
            img: data.image,
        }
        fetch('https://salty-ravine-02871.herokuapp.com/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
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

                    <Box sx={{ mb: 3 }}>
                        <input
                            defaultValue={product.name}
                            required
                            type="text"
                            {...register("name", { required: true })}
                            style={{ width: "100%", backgroundColor: "white", padding: "10px 5px", border: 0, borderBottom: '2px solid', borderLeft: "2px solid" }}
                            placeholder="name" />
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <input
                            required
                            type="number"
                            {...register("price", { required: true })}
                            style={{ width: "100%", backgroundColor: "white", padding: "10px 5px", border: 0, borderBottom: '2px solid', borderLeft: "2px solid" }}
                            placeholder="price" />
                    </Box>

                    <Box sx={{ mb: 3 }} style={{ display: "flex", justifyContent: "space-between" }}>
                        <input
                            required
                            type="number"
                            {...register("height", { required: true })}
                            style={{ width: "49%", backgroundColor: "white", padding: "10px 5px", border: 0, borderBottom: '2px solid', borderLeft: "2px solid" }}
                            placeholder="height(inches)" />
                        <input
                            required
                            type="number"
                            {...register("width", { required: true })}
                            style={{ width: "49%", backgroundColor: "white", padding: "10px 5px", border: 0, borderBottom: '2px solid', borderLeft: "2px solid" }}
                            placeholder="width(inches)" />
                    </Box>

                    <Box sx={{ mb: 3 }} style={{ display: "flex", justifyContent: "space-between" }}>
                        <input
                            required
                            type="number"
                            {...register("rating", { required: true })}
                            style={{ width: "49%", backgroundColor: "white", padding: "10px 5px", border: 0, borderBottom: '2px solid', borderLeft: "2px solid" }}
                            placeholder="rating" />

                        <select
                            required
                            {...register("height", { required: true })}
                            defaultChecked="withFrame"
                            style={{ width: "49%", backgroundColor: "white", padding: "10px 5px", border: 0, borderBottom: '2px solid', borderLeft: "2px solid" }}
                            placeholder="name" >
                            <option value="withFrame" selected>with frame</option>
                            <option value="withOutFrame">without frame</option>
                        </select>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <input
                            required
                            type="text"
                            {...register("image", { required: true })}
                            style={{ width: "100%", backgroundColor: "white", padding: "10px 5px", border: 0, borderBottom: '2px solid', borderLeft: "2px solid" }}
                            placeholder="image url" />
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <input
                            required
                            type="text"
                            {...register("description", { required: true })}
                            style={{ width: "100%", backgroundColor: "white", padding: "10px 5px", border: 0, borderBottom: '2px solid', borderLeft: "2px solid" }}
                            placeholder="description" />
                    </Box>


                    <input type="submit" style={{ color: "white", backgroundColor: "#F63E7B", padding: "10px", width: "100%", border: 0, borderBottom: '2px solid' }} />
                </form>
                {
                    addSuccess && <Alert severity="success">Successfully added product</Alert>

                }
            </Container>
        </div >
    );
};

export default AdminUpdateProduct;