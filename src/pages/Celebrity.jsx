import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Blog from '../components/Blog'
import HeadingComp from '../components/HeadingComp';
import Footer from '../components/Footer';
import celebrity from '../data/celebrity.json'

const Fitness = () => {
    return (
        <>
            <NavigationBar />
            <HeadingComp text={'Get Motivated By Your Favorite Celebs.'} />
            <Blog data={celebrity} />

            <Footer />
        </>
    );
}

export default Fitness;
