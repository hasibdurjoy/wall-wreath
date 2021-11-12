import React, { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import ModalMessage from '../ModalMessage/ModalMessage';

const Pay = () => {
    const [modalText, setModalText] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleSuccessModalOpen = (text) => {
        setModalText(text);
        setOpen(true);
    };
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        handleSuccessModalOpen("Payment Method Coming soon Thank You")
        reset();
    };
    return (
        <div>
            <Container sx={{ width: "60%", pb: 3 }} >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register("name")}
                        label="Payment Method"
                        type="text"
                        variant="outlined"
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }}
                    />

                    <TextField
                        {...register("account")}
                        label="Amount"
                        id="outlined-basic"
                        type="number"
                        variant="outlined"
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                    <TextField
                        {...register("txn_id")}
                        label="Transaction "
                        id="outlined-basic"
                        type="text"
                        variant="outlined"
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                    <Button
                        type="submit"
                        style={{ color: "white", backgroundColor: "#F63E7B", padding: "10px", width: "100%" }} sx={{ my: 2 }}
                    >Confirm Payment</Button>

                </form>
                <ModalMessage
                    open={open}
                    setOpen={setOpen}
                    modalText={modalText}
                >
                </ModalMessage>
            </Container>
        </div>
    );
};

export default Pay;