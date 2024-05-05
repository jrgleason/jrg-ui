import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Page from "./Page";
import {MarketingPage} from "./Marketing/Page";
import {DashboardPage} from "./Dashboard/Page";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Page/>,
                children: [
                    {
                        path: "/",
                        element: <MarketingPage/>,
                    },
                    {
                        path: "/dashboard",
                        element: <DashboardPage/>
                    }
                ],
            },
        ],
    },
]);
root.render(
    // <Album></Album>
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
);