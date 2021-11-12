import React, { useEffect, useState } from 'react';
import { TextField, Button, Alert, AlertTitle, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModalMessage from '../ModalMessage/ModalMessage';


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


const AdminMakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [admins, setAdmins] = useState([]);
    const [success, setSuccess] = useState(false);
    const { authToken } = useAuth();


    const [modalText, setModalText] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleSuccessModalOpen = (text) => {
        setModalText(text);
        setOpen(true);
    };

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        console.log(user, authToken)
        fetch('https://salty-ravine-02871.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                // 'authorization': `Bearer ${authToken}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    handleSuccessModalOpen(`Successfully Added Admin : ${user.email}`)
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }

    useEffect(() => {
        fetch('https://salty-ravine-02871.herokuapp.com/users/?role=admin')
            .then(res => res.json())
            .then(data => setAdmins(data))
    }, [success])
    return (
        <div>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    required
                    sx={{ width: '50%' }}
                    type="email"
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    onBlur={handleOnBlur} />
                <Button variant="contained" type="submit">Make Admin</Button>
            </form>

            <TableContainer component={Paper} sx={{ mt: 5 }}>
                <Typography variant="h5" sx={{ fontWeight: 900 }}>Our All Admins</Typography>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {admins.map((row) => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.displayName}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.email}</StyledTableCell>
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
        </div>
    );
};

export default AdminMakeAdmin;