import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Page from "./Page";
import {MarketingPage} from "./Marketing/Page";
import {DashboardPage} from "./Dashboard/Page";
import {ResumePage} from "./Resume/Page";

const root = createRoot(document.getElementById('root'));
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
                    },
                    {
                        path: "/resume",
                        element: <ResumePage/>
                    }
                ],
            },
        ],
    },
]);
root.render(
    // <Album></Album>
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
);