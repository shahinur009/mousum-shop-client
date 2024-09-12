import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import DashboardNavBar from './DashboardNavBar';
// import DashboardNavBar from './DashboardNavBar';

const DashboardLayout = () => {
    return (
        <div>
            <DashboardNavBar/>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;