import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Blog from '../components/Blog'
import HeadingComp from '../components/HeadingComp';
import Footer from '../components/Footer';
import Adcomponent from '../components/Adcomponent';
import food from '../data/food.json'

const Food = () => {
    return (
        <>
            <NavigationBar />
            <HeadingComp text={'Latest Healthy Food News'} />
            <Blog data={food} />
            <Adcomponent />
            <Footer />
        </>
    );
}

export default Food;
