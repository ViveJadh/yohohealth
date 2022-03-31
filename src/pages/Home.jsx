import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Blog from '../components/Blog'
import HeadingComp from '../components/HeadingComp';
import Footer from '../components/Footer';
import Adcomponent from '../components/Adcomponent';
import health from '../data/health.json'

const Home = () => {
    return (
        <>
            <NavigationBar />
            <HeadingComp text={'Latest Health News'} />
            <Blog data={health} />
            <Adcomponent />
            <Footer />
        </>
    );
}

export default Home;
