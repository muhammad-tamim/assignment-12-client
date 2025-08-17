import React from 'react';
import Slider from '../../../components/Home/Slider/Slider';
import Category from '../../../components/Home/Category/Category';
import DiscountProducts from '../../../components/Home/DiscountProducts/DiscountProducts';
import LatestNews from '../../../components/Home/LatestNews/LatestNews';
import FAQ from '../../../components/Home/FAQ/FAQ';
import { Helmet } from 'react-helmet'
import Review from '../../../components/Home/Review/Review';
import About from '../../../components/Home/About/About';
import ContactInfo from '../../../components/Home/ContactInfo/ContactInfo';
import Container from '../../../components/container/Container';
import VerticalSpace from '../../../components/container/VerticalSpace';

const Home = () => {
    return (
        <>
            <Helmet><title>MedEasy | Home</title></Helmet>
            <div>
                <Slider></Slider>

                <Container>
                    <VerticalSpace>
                        <Category></Category>
                    </VerticalSpace>
                </Container>

                <Container>
                    <VerticalSpace>
                        <DiscountProducts></DiscountProducts>
                    </VerticalSpace>
                </Container>

                <Container>
                    <VerticalSpace>
                        <About></About>
                    </VerticalSpace>
                </Container>

                <Container>
                    <VerticalSpace>
                        <Review></Review>
                    </VerticalSpace>
                </Container>

                <Container>
                    <VerticalSpace>
                        <LatestNews></LatestNews>
                    </VerticalSpace>
                </Container>

                <Container>
                    <VerticalSpace>
                        <FAQ></FAQ>
                    </VerticalSpace>
                </Container>

                <Container>
                    <VerticalSpace>
                        <ContactInfo></ContactInfo>
                    </VerticalSpace>
                </Container>








            </div>
        </>

    );
};

export default Home;