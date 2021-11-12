import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import ModalMessage from '../ModalMessage/ModalMessage';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.offWhite,
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const AdminBookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [modalText, setModalText] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleSuccessModalOpen = (text) => {
        setModalText(text);
        setOpen(true);
    };

    useEffect(() => {
        fetch('https://salty-ravine-02871.herokuapp.com/allBookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [updateSuccess])

    const approveBooking = (id) => {
        setUpdateSuccess(false);
        const proceed = window.confirm('Are you want to approve this booking??');
        if (proceed) {
            const url = `https://salty-ravine-02871.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        handleSuccessModalOpen("Approved Successfully");
                        setUpdateSuccess(true);
                    }
                })
        }
    }

    const deleteBooking = (id) => {
        const proceed = window.confirm('Are you sure, you want to cancel?');
        if (proceed) {
            const url = `https://salty-ravine-02871.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        handleSuccessModalOpen("Booking Deleted Successfully");
                        const remainingBookings = bookings.filter(booking => booking._id !== id);
                        setBookings(remainingBookings);
                    }
                });
        }
    }
    return (
        <Box>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead >
                        <TableRow >
                            <StyledTableCell align="center" sx={{ fontWeight: 900, fontSize: 18 }}>Name</StyledTableCell>
                            <StyledTableCell align="center" sx={{ fontWeight: 900, fontSize: 16 }}>Email</StyledTableCell>
                            <StyledTableCell align="center" sx={{ fontWeight: 900, fontSize: 18 }}>Product</StyledTableCell>
                            <StyledTableCell align="center" sx={{ fontWeight: 900, fontSize: 18 }}>Status</StyledTableCell>
                            <StyledTableCell align="center" sx={{ fontWeight: 900, fontSize: 18 }}>Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {bookings.map((booking) => (
                            <StyledTableRow key={booking._id}>
                                <StyledTableCell component="th" scope="row" align="center">
                                    {booking.displayName}
                                </StyledTableCell>
                                <StyledTableCell align="center">{booking.email}</StyledTableCell>
                                <StyledTableCell align="center">{booking.productName}</StyledTableCell>

                                <StyledTableCell align="center"
                                    style={booking.status === 'approved' ? { color: "green" } : { color: "red" }}>{booking.status}
                                </StyledTableCell>

                                <StyledTableCell align="center" sx={{ display: "flex", justifyContent: "space-around" }}>
                                    <Button variant="contained" onClick={() => { approveBooking(booking._id) }}>Approve</Button>
                                    <Button variant="contained" style={{ width: "30%", color: "white", backgroundColor: "#F63E7B" }} onClick={() => { deleteBooking(booking._id) }}>Delete</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <ModalMessage
                open={open}
                setOpen={setOpen}
                modalText={modalText}
            >
            </ModalMessage>
        </Box>
    );
};

export default AdminBookingList;