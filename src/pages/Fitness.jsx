import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Blog from '../components/Blog'
import HeadingComp from '../components/HeadingComp';
import Footer from '../components/Footer';
import fitness from '../data/fitness.json'

const Fitness = () => {
    return (
        <>
            <NavigationBar />
            <HeadingComp text={'Fitter The Body, Longer The Life.'} />
            <Blog data={fitness} />
            <Footer />
        </>
    );
}

export default Fitness;
