import React from 'react';
import Slider from '../../../components/Home/Slider/Slider';
import Category from '../../../components/Home/Category/Category';
import DiscountProducts from '../../../components/Home/DiscountProducts/DiscountProducts';
import LatestNews from '../../../components/Home/LatestNews/LatestNews';
import FAQ from '../../../components/Home/FAQ/FAQ';
import { Helmet } from 'react-helmet'
import Review from '../../../components/Home/Review/Review';
import About from '../../../components/Home/About/About';

const Home = () => {
    return (
        <>
            <Helmet><title>MedEasy | Home</title></Helmet>
            <div>
                <Slider></Slider>
                <Category></Category>
                <DiscountProducts></DiscountProducts>
                <About></About>
                <Review></Review>
                <LatestNews></LatestNews>
                <FAQ></FAQ>
            </div>
        </>

    );
};

export default Home;