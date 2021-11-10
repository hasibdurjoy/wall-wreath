import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import WholeSaleProcess from '../WholeSaleProcess/WholeSaleProcess';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Products />
            <WhyUs />
            <WholeSaleProcess />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;