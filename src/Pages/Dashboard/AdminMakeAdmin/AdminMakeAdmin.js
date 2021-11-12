import React, { useEffect, useState } from 'react';
import { TextField, Button, Alert, AlertTitle, Typography, CircularProgress } from '@mui/material';
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
import { useForm } from "react-hook-form";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
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


const AdminMakeAdmin = () => {
    const [admins, setAdmins] = useState([]);
    const [success, setSuccess] = useState(false);
    const { authToken } = useAuth();
    const [loading, setLoading] = useState(true);

    const [modalText, setModalText] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleSuccessModalOpen = (text) => {
        setModalText(text);
        setOpen(true);
    };
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        const user = { ...data };
        console.log(user, authToken)
        const proceed = window.confirm('Are you want to make new admin?')
        if (proceed) {
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
                        reset();
                    }
                })
        }
    }

    useEffect(() => {
        fetch('https://salty-ravine-02871.herokuapp.com/users/?role=admin')
            .then(res => res.json())
            .then(data => {
                setAdmins(data)
                setLoading(false);
            })
    }, [success])

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    {...register("email")}
                    required
                    sx={{ width: '50%' }}
                    type="email"
                    id="standard-basic"
                    label="Email"
                    variant="standard" />
                <Button variant="contained" type="submit" style={{ backgroundColor: "#F63E7B" }} sx={{ mx: 3, py: 1 }}>Make Admin</Button>
            </form>

            <TableContainer component={Paper} sx={{ mt: 5 }}>
                <Typography variant="h5" sx={{ fontWeight: 900 }}>Our All Admins</Typography>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center" sx={{ fontWeight: 900, fontSize: 20 }}>Name</StyledTableCell>
                            <StyledTableCell align="center" sx={{ fontWeight: 900, fontSize: 20 }}>Email</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {admins.map((row) => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell component="th" scope="row" align="center" sx={{ fontWeight: 900, fontSize: 18 }}>
                                    {row.displayName}
                                </StyledTableCell>
                                <StyledTableCell align="center" sx={{ fontWeight: 900, fontSize: 18 }}>{row.email}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
                {loading && <CircularProgress color="success" />}
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