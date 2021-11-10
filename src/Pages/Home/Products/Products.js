import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { useHistory } from 'react-router';
import Product from '../Product/Product';

const products = [
    {
        name: "Iron Man On your Wall",
        price: "20",
        description: {
            height: "25",
            width: "20",
            frame: "With Frame",
            about: "This is the most beautiful iron man poster for your drawing room "
        },
        rating: "4.5",
        img: "https://m.media-amazon.com/images/I/715SuWLVTNL._SY450_.jpg"
    },
    {
        name: "The happy old Tortoise",
        price: "25.5",
        description: {
            height: "30",
            width: "50",
            frame: "With Frame",
            about: "This is the most beautiful animal poster for your drawing room "
        },
        rating: "4.8",
        img: "https://n1.sdlcdn.com/imgs/e/1/q/Myimage-Animal-Paper-Wall-Poster-SDL899262941-1-4f9ec.jpg"
    },
    {
        name: "Respect All Fare None ",
        price: "30",
        description: {
            height: "30",
            width: "20",
            frame: "With Frame",
            about: "This is one the most beautiful che guevara poster for your drawing room "
        },
        rating: "4.5",
        img: "https://n3.sdlcdn.com/imgs/d/f/s/Advance-Hotline-Wall-Posters-Paper-SDL008732741-1-0e1dd.jpg"
    },
    {
        name: "Beautiful Lady",
        price: "33.5",
        description: {
            height: "40",
            width: "25",
            frame: "With thin Frame",
            about: "This is one the most beautiful lady poster for your drawing room "
        },
        rating: "4.8",
        img: "https://i.pinimg.com/originals/f3/e4/e0/f3e4e02b57769df20147a6989c833f7c.jpg"
    },
    {
        name: "peaky blinders",
        price: "40",
        description: {
            height: "40",
            width: "20",
            frame: "With Frame",
            about: "The peaky blinders sad poster for your drawing room "
        },
        rating: "4.9",
        img: "https://m.media-amazon.com/images/I/61xj1e6LJQL._AC_UL320_.jpg"
    },
    {
        name: "The Bat on Your Bed",
        price: "100",
        description: {
            height: "60",
            width: "150",
            frame: "With Frame",
            about: "This is a 5 part master poster for your master bed room "
        },
        rating: "4.4",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTlJBT72kFVVjaUZuIGO46ptKdKl_KAPYdH8BVNZbn4H0vMIJpJlOWEGmPa3HELEIrMug&usqp=CAU"
    },
    {
        name: "The Beautiful City with River ",
        price: "18",
        description: {
            height: "40",
            width: "25",
            frame: "With Frame",
            about: "This is one the city covered poster for your drawing room "
        },
        rating: "4.9",
        img: "https://m.media-amazon.com/images/I/81l3f+mx9aL.jpg"
    },
    {
        name: "Strive to Do what is Beneficial",
        price: "38",
        description: {
            height: "35",
            width: "25",
            frame: "With Frame",
            about: "This is one the most beautiful poster with motivation for your drawing room "
        },
        rating: "5.0",
        img: "https://media.karousell.com/media/photos/products/2019/03/27/islamic_wall_art_typography_poster_frame_decor_1553697152_ce7adeb6_progressive.jpg"
    },
    {
        name: "The Angry Parrot",
        price: "31",
        description: {
            height: "40",
            width: "20",
            frame: "With Frame",
            about: "This is one the most beautiful birds poster for your drawing room "
        },
        rating: "4.4",
        img: "https://ae01.alicdn.com/kf/H0425f0b0f4bd472fa47cb3a69a9e28a80/No-Frame-Animals-Abstract-Painting-Wall-Art-Canvas-Modern-Animal-Picture-Painting-Poster-For-Living-Room.jpg"
    },
    {
        name: "The Darknight Hero",
        price: "19",
        description: {
            height: "42",
            width: "22",
            frame: "With Frame",
            about: "This is one the most beautiful batman poster for your drawing room "
        },
        rating: "4.1",
        img: "https://m.media-amazon.com/images/I/61CJt1MyGTL._AC_UL320_.jpg"
    },
    {
        name: "The Batman Talking",
        price: "28",
        description: {
            height: "40",
            width: "22",
            frame: "With big Frame",
            about: "This is one the most beautiful batman poster for your drawing room "
        },
        rating: "4.7",
        img: "https://i.pinimg.com/originals/66/97/16/669716b442986f1d7a029da5515befb0.jpg"
    },
    {
        name: "Motivation on your room",
        price: "33",
        description: {
            height: "32",
            width: "23",
            frame: "With Frame",
            about: "This is one the best motivational poster for your drawing room "
        },
        rating: "4.6",
        img: "https://n4.sdlcdn.com/imgs/d/f/s/Advance-Hotline-Wall-Posters-Paper-SDL372060154-1-9cfda.jpg"
    },
    {
        name: "The Giraffe Head",
        price: "21",
        description: {
            height: "30",
            width: "20",
            frame: "No Frame",
            about: "This is one the most beautiful animal poster for your drawing room "
        },
        rating: "4.2",
        img: "https://i.etsystatic.com/14186770/r/il/872de4/2082246918/il_570xN.2082246918_laju.jpg"
    },
    {
        name: "The Iron Man Talking",
        price: "23",
        description: {
            height: "35",
            width: "20",
            frame: "With Frame",
            about: "Iron will give you motivation n your drawing room "
        },
        rating: "4.6",
        img: "https://m.media-amazon.com/images/I/71Fk7LcUZ9S._AC_UL320_.jpg"
    },
]

const Products = () => {
    return (
        <Container sx={{ mt: 0 }}>
            <h1 style={{ marginTop: 0 }}>Our Awesome <span style={{ color: "#F63E7B" }}>Products</span></h1>
            <Grid container spacing={5}>
                {
                    products.map(product => <Product product={product} />)
                }
            </Grid>
        </ Container>
    );
};

export default Products;