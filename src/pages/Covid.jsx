import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Blog from '../components/Blog'
import HeadingComp from '../components/HeadingComp';
import Footer from '../components/Footer';
import Adcomponent from '../components/Adcomponent';
import covid from '../data/covid.json'

const Covid = () => {
    return (
        <>
            <NavigationBar />
            <HeadingComp text={'Latest Covid-19 News'} />
            <Blog data={covid} />
            <Adcomponent />
            <Footer />
        </>
    );
}

export default Covid;
