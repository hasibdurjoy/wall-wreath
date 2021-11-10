import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
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
        </div>
    );
};

export default Home;