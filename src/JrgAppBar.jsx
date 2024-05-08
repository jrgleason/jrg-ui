import {AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import React, {useState} from "react";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

function JrgAppBar() {
    const [open, setOpen] = useState(false);
    return (
        <React.Fragment>
            <AppBar
                elevation={0}
                sx={{
                    backdropFilter: "blur(10px)", // Add this line
                    backgroundColor: 'rgba(255, 36, 0, 0.5)', // And this line
                    color: "#C0C0C0"
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
                            width: '14vw',
                            '@media (max-width:650px)': {
                                display: 'none',
                            }
                        }}></Box>
                        <Typography
                            variant="h6"
                            component="div">
                            The Jackie Gleason
                        </Typography>
                    </Box>

                    <Button
                        size="large"
                        sx={{mr: 2}}
                        href={"https://docs.google.com/document/d/1xrqve90hloOYGR3RSCvwXJBXq_NQR5kmNfrxKYSveKk/edit?usp=sharing"}
                        color="inherit">Résumé</Button>
                    <IconButton
                        size="large"
                        color="primary"
                        target="_top"
                        rel="noopener noreferrer"
                        href={`mailto:jackiegleason+jrgsite@gmail.com`}
                    >
                        <FontAwesomeIcon
                            color="#C0C0C0"
                            icon={faEnvelope}>

                        </FontAwesomeIcon>
                    </IconButton>
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