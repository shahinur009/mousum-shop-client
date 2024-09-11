import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavBar from './DashboardNavBar';

const DashboardLayout = () => {
    return (
        <div>
            <DashboardNavBar />
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;