import React from 'react';
import Home from '../pages/Home/Home';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
    return (
        <div className=''>
            <Navbar/>
            <div className='md:ps-[250px] p-0'>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;