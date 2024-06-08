import React from 'react';
import { Navigate, useRoutes } from 'react-router';
import { Outlet } from 'react-router';
import App from '../../App';
import AboutUs from '../../page/AboutUs';

const RootRoute = () => {

    return useRoutes([
        {
            path: '',
            element: <Navigate to={"aboutus"} />,
        },
        {
            path: 'aboutus',
            element: <AboutUs />
        },
        {
            path: '*',
            element: <Navigate to={"aboutus"} />
        }
    ])
}

export default RootRoute