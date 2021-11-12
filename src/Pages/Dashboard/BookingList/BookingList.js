import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Grid from '@mui/material/Grid';
import { CircularProgress, Container } from '@mui/material';
import Booking from '../Booking/Booking';
import ModalMessage from '../ModalMessage/ModalMessage';
import { Box } from '@mui/system';

const BookingList = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    const [modalText, setModalText] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleSuccessModalOpen = (text) => {
        setModalText(text);
        setOpen(true);
    };

    useEffect(() => {
        fetch(`https://salty-ravine-02871.herokuapp.com/bookings/?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
                setLoading(false);
            })
    }, []);

    const handleDeleteBooking = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://salty-ravine-02871.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        handleSuccessModalOpen('Deleted successfully');
                        const remainingBookings = bookings.filter(booking => booking._id !== id);
                        setBookings(remainingBookings);
                    }
                });
        }
    }

    return (
        <Container sx={{ mt: 0 }}>
            <Grid container spacing={5}>
                {
                    bookings.map(booking => <Booking booking={booking} key={booking._id} handleDeleteBooking={handleDeleteBooking} />)
                }
            </Grid>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 10 }}>
                {loading && <CircularProgress color="success" />}
            </Box>

            <ModalMessage
                open={open}
                setOpen={setOpen}
                modalText={modalText}
            >
            </ModalMessage>
        </ Container>
    );
};

export default BookingList;