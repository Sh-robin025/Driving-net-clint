import React from 'react';
import Contact from './Contact';
import Courses from './Courses';
import Header from './Header';
import Reviews from './Reviews';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Header />
            <Service/>
            <Courses/>
            {/* <Reviews/> */}
            <Contact/>
        </div>
    );
};

export default Home;