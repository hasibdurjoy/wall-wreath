import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from './../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ProductUpdateModal({ product, openBooking, handleBookingClose, handleSuccessModalOpen, setUpdateSuccess }) {

    const { _id, name, price, height, width, frame, about, rating, img } = product;
    const initialInfo = { name, price, height, width, frame, about, rating, img }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {

        console.log(bookingInfo);
        const proceed = window.confirm('Are you want to approve this booking??');
        if (proceed) {
            const url = `https://salty-ravine-02871.herokuapp.com/products/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookingInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        setUpdateSuccess(true);
                        handleBookingClose();
                        handleSuccessModalOpen("Product Updated Successfully");
                    }
                })
        }

        e.preventDefault();
    }

    return (
        <Box>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openBooking}
                onClose={handleBookingClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openBooking}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                        <form onSubmit={handleBookingSubmit}>
                            <TextField
                                onBlur={handleOnBlur}
                                name="name"
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={product.name}
                                size="small"
                                label="name"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="price"
                                onBlur={handleOnBlur}
                                defaultValue={price}
                                label="price"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="height"
                                onBlur={handleOnBlur}
                                defaultValue={height}
                                label="height"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="width"
                                label="width"
                                onBlur={handleOnBlur}
                                size="small"
                                defaultValue={width}
                            />
                            <TextField
                                onBlur={handleOnBlur}
                                sx={{ width: '90%', m: 1 }}
                                label="Frame"
                                name="frame"
                                id="outlined-size-small"
                                defaultValue={frame}
                                size="small"
                            />

                            <TextField
                                onBlur={handleOnBlur}
                                sx={{ width: '90%', m: 1 }}
                                label="Rating"
                                name="rating"
                                id="outlined-size-small"
                                defaultValue={rating}
                                size="small"
                            />

                            <TextField
                                onBlur={handleOnBlur}
                                sx={{ width: '90%', m: 1 }}
                                label="Image Url"
                                name="img"
                                id="outlined-size-small"
                                defaultValue={img}
                                size="small"

                            />
                            <TextField
                                onBlur={handleOnBlur}
                                sx={{ width: '90%', m: 1 }}
                                label="Description"
                                name="about"
                                id="outlined-size-small"
                                defaultValue={about}
                                size="small"
                            />
                            <Box sx={{ textAlign: "center", mt: 2 }}>
                                <Button type="submit" variant="contained" style={{ width: "70%", color: "white", backgroundColor: "#F63E7B" }}>Update</Button>
                            </Box>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
}
