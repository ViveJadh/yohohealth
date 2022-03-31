import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Blog from '../components/Blog'
import HeadingComp from '../components/HeadingComp';
import Footer from '../components/Footer';
import Adcomponent from '../components/Adcomponent';
import fitness from '../data/fitness.json'

const Fitness = () => {
    return (
        <>
            <NavigationBar />
            <HeadingComp text={'Latest Fitness News'} />
            <Blog data={fitness} />
            <Adcomponent />
            <Footer />
        </>
    );
}

export default Fitness;
