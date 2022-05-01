import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Blog from '../components/Blog'
import HeadingComp from '../components/HeadingComp';
import Footer from '../components/Footer';
import food from '../data/food.json'

const Fitness = () => {
    return (
        <>
            <NavigationBar />
            <HeadingComp text={'You Are What You Eat.'} />
            <Blog data={food} />
            <Footer />
        </>
    );
}

export default Fitness;
