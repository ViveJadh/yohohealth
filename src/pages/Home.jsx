import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Blog from '../components/Blog'
import HeadingComp from '../components/HeadingComp';
import Footer from '../components/Footer';
import health from '../data/health.json'

const Home = () => {
    return (
        <>
            <NavigationBar />
            <HeadingComp text={'Healthy Life Is A Happy Life'} />
            <Blog data={health} />
            <Footer />
        </>
    );
}

export default Home;
