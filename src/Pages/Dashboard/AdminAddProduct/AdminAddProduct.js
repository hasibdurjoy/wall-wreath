import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button, Container, FormControlLabel, FormLabel, TextField, Typography } from '@mui/material';
import { Box, fontWeight } from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Alert from '@mui/material/Alert';
import useAuth from '../../../hooks/useAuth';

const AdminAddProduct = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const [serviceData, setServiceData] = useState({});
    const [addSuccess, setAddSuccess] = useState(false);

    useEffect(() => {
        fetch(`https://ancient-springs-79733.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newServiceData = { ...serviceData };
        newServiceData[field] = value;
        setServiceData(newServiceData);
    }

    const handleBooking = e => {
        console.log(serviceData);
        fetch('https://ancient-springs-79733.herokuapp.com/services', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAddSuccess(true);
                }
            });

        e.preventDefault();
    }
    return (
        <div>
            <Container sx={{ width: "50%", pb: 3 }} style={{ marginLeft: 0 }}>
                <form onSubmit={handleBooking}>
                    <TextField
                        onBlur={handleOnChange}
                        required
                        name="name"
                        label="Service Name"
                        id="outlined-basic"
                        type="texts"
                        variant="outlined"
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                    <TextField
                        onBlur={handleOnChange}
                        required
                        label="Price"
                        id="outlined-basic"
                        type="number"
                        name="price"
                        variant="outlined"
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                    <TextField
                        onBlur={handleOnChange}
                        required
                        label="Description"
                        id="outlined-basic"
                        type="texts"
                        name="description"
                        variant="outlined"
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                    <TextField
                        onBlur={handleOnChange}
                        required
                        label="Image url"
                        id="outlined-basic"
                        type="texts"
                        label="card number"
                        name="img"
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
        </div>
    );
};

export default AdminAddProduct;