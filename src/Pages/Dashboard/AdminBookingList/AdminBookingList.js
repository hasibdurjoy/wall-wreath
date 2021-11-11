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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
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

    useEffect(() => {
        fetch('https://salty-ravine-02871.herokuapp.com/allBookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [updateSuccess])

    const approveBooking = (id) => {
        setUpdateSuccess(false);
        const proceed = window.confirm('Are you want to approve this booking??');
        if (proceed) {
            const url = `http://localhost:5000/bookings/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Approved Successful');
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
                        alert('deleted successfully');
                        const remainingBookings = bookings.filter(booking => booking._id !== id);
                        setBookings(remainingBookings);
                    }
                });
        }
    }
    return (
        <Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                            <StyledTableCell align="left">Product</StyledTableCell>
                            <StyledTableCell align="left">Status</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {bookings.map((booking) => (
                            <StyledTableRow key={booking._id}>
                                <StyledTableCell component="th" scope="row">
                                    {booking.displayName}
                                </StyledTableCell>
                                <StyledTableCell align="left">{booking.email}</StyledTableCell>
                                <StyledTableCell align="left">{booking.productName}</StyledTableCell>

                                <StyledTableCell align="left"
                                    style={booking.status === 'approved' ? { color: "green" } : { color: "red" }}>{booking.status}
                                </StyledTableCell>

                                <StyledTableCell align="left">
                                    <Button onClick={() => { approveBooking(booking._id) }}>Approve</Button>
                                    <Button onClick={() => { deleteBooking(booking._id) }}>Delete</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default AdminBookingList;