import {AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import {faBars} from '@fortawesome/free-solid-svg-icons';

function JrgAppBar() {
    const [open, setOpen] = useState(false);
    return (
        <React.Fragment>
            <AppBar
                elevation={0}
                sx={{
                    backdropFilter: "blur(10px)", // Add this line
                    backgroundColor: 'rgba(255, 36, 0, 0.5)', // And this line
                }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        style={{ visibility: 'hidden' }}
                        sx={{mr: 2}}
                        onClick={() => setOpen(true)}
                    >
                        <FontAwesomeIcon icon={faBars}/>
                    </IconButton>
                    <Box sx={{
                        flexGrow: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Box sx={{
                            width: '14vw',
                            '@media (max-width:650px)': {
                                display: 'none',
                            }
                        }}></Box>
                        <Typography
                            variant="h5"
                            component="div">
                            The Jackie Gleason
                        </Typography>
                    </Box>

                    <Button
                        size="large"
                        sx={{mr: 2}}
                        href={"https://docs.google.com/document/d/1xrqve90hloOYGR3RSCvwXJBXq_NQR5kmNfrxKYSveKk/edit?usp=sharing"}
                        color="inherit">Résumé</Button>
                    <Box>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <FontAwesomeIcon
                                icon={faLinkedinIn}/>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <FontAwesomeIcon
                                size="lg"
                                icon={faGithub}/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
                <Typography
                    variant="h5"
                    component="div">
                    Hey Old Timer!
                </Typography>
            </Drawer>
        </React.Fragment>
    )
}

export default JrgAppBar;