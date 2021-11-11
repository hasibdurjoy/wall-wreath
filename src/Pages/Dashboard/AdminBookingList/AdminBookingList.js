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
    useEffect(() => {
        fetch('https://salty-ravine-02871.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                            <StyledTableCell align="left">Product</StyledTableCell>
                            <StyledTableCell align="left">Pay With</StyledTableCell>
                            <StyledTableCell align="left">Status</StyledTableCell>
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
                                <StyledTableCell align="left">{booking.payment}</StyledTableCell>
                                <StyledTableCell align="left">{booking.status}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default AdminBookingList;