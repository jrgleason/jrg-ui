import React from 'react';
import {AppBar, Box, Toolbar} from "@mui/material";
import {Outlet} from "react-router-dom";
import Footer from "./Common/Footer";

const Page = () => {
    return (
        <Box sx={{
            height: `100%`,
            width: `100%`,
            overflow: `auto`,
            overflowX: `auto`,
        }}>
            <AppBar
                elevation={0}
                position={"relative"}
                sx={{ // Add this line
                    backgroundColor: 'black', // And this line
                }}
            >
                <Toolbar sx={{
                    alignItems: 'stretch',
                }}>
                </Toolbar>
            </AppBar>
            <Outlet></Outlet>
            <Footer/>
        </Box>
    );
}
export default Page;