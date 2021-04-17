import React from 'react';
import Courses from './Courses';
import Header from './Header';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Header />
            <Service/>
            <Courses/>
        </div>
    );
};

export default Home;