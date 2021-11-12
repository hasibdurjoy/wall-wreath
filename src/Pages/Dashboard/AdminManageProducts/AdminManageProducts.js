import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AdminShowSingleProduct from '../AdminShowSingleProduct/AdminShowSingleProduct';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
const AdminManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [updateSuccess, setUpdateSuccess] = useState(false);

    const [open, setOpen] = React.useState(false);
    const handleSuccessModalOpen = () => setOpen(true);
    const handleSuccessModalClose = () => setOpen(false);

    useEffect(() => {
        fetch('https://salty-ravine-02871.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [updateSuccess]);

    const handleDeleteProduct = (id) => {
        const proceed = window.confirm('Are you sure, you want to cancel?');
        if (proceed) {
            const url = `https://salty-ravine-02871.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                });
        }
    }
    return (
        <Container sx={{ mt: 0 }}>
            <Grid container spacing={5}>
                {
                    products.map(product => <AdminShowSingleProduct product={product} handleDeleteProduct={handleDeleteProduct} handleSuccessModalOpen={handleSuccessModalOpen} setUpdateSuccess={setUpdateSuccess} />)
                }
            </Grid>

            <Modal
                open={open}
                onClose={handleSuccessModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ textAlign: "center" }}>
                        <img src="https://ak.picdn.net/shutterstock/videos/1068883754/thumb/11.jpg?ip=x480" width="60%" style={{ marginLeft: "auto", marginRight: "auto" }} />
                    </Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: "center", my: 2 }}>
                        Successfully Updated Product
                    </Typography>
                    <Box sx={{ textAlign: "center" }}>
                        <Button onClick={handleSuccessModalClose} variant="contained">Close</Button>
                    </Box>
                </Box>
            </Modal>
        </ Container>
    );
};

export default AdminManageProducts;