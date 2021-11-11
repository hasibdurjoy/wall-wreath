import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FaStar } from 'react-icons/fa';
import Alert from '@mui/material/Alert';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import useAuth from '../../../hooks/useAuth';
import './Feedback.css';

const Feedback = () => {
    const { user } = useAuth();
    const [reviewSuccess, setReviewSuccess] = useState(false);
    const history = useHistory();

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [clientReview, setClientReview] = useState('');

    const takeReview = e => {
        setClientReview(e.target.value);
    }

    const sendFeedBack = (e) => {
        if (user.email && clientReview !== "" && rating != null) {
            const data = {
                name: user.displayName,
                comment: clientReview,
                rating: rating,
                img: user.photoURL || 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'
            };
            fetch('https://salty-ravine-02871.herokuapp.com/reviews', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.insertedId) {
                        setReviewSuccess(true);
                        alert('successfully added');
                    }
                })
        };

        if (!user.email) {
            alert("Please log in to give a feedback");
        }
        e.preventDefault();
    }

    if (reviewSuccess) {
        history.push("/");
    }

    return (
        <Container sx={{ width: "50%", pb: 3, mx: 'auto' }} >

            <form onSubmit={sendFeedBack}>

                <TextareaAutosize
                    required
                    onBlur={takeReview}
                    aria-label="minimum height"
                    minRows={5}
                    placeholder="Your Feedback About us"
                    style={{ width: "100%", padding: "10px" }} />

                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <label>
                            <input
                                required
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                            />
                            <FaStar
                                className="star"
                                size={30}
                                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)} />
                        </label>
                    )
                })}

                <br />

                <Button
                    type="submit"
                    style={{ color: "white", backgroundColor: "#F63E7B", padding: "10px" }} sx={{ my: 2, mx: 'auto' }}
                >Send Feedback</Button>


            </form>
            {
                reviewSuccess && <Alert severity="success">Successfully Booked</Alert>

            }
        </Container>
    );
};

export default Feedback;