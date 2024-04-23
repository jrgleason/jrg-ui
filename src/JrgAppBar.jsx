import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import React from 'react';

function JrgAppBar() {
    return (
        <AppBar
            elevation={0}
            sx={{
                backdropFilter: "blur(10px)", // Add this line
                backgroundColor: 'rgba(255, 36, 0, 0.5)', // And this line
            }}
        >
            <Toolbar>
                <Box sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Box sx={{
                        width: '14vw'
                    }}></Box>
                    <Typography
                        variant="h4"
                        component="div">
                        The Jackie Gleason
                    </Typography>
                </Box>

                <Button
                    size="large"
                    sx={{mr: 2}}
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
                            size="large"
                            icon={faGithub}/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default JrgAppBar;