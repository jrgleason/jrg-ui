import {Box, IconButton, Typography} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import {styled} from "@mui/system";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const FooterBox = styled(Box)(({theme, minHeight = '25vh'}) => ({
    display: 'flex',
    minHeight: '10vh',
    maxHeight: '50vh',
    padding: '24px',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    justifyContent: 'flex-end', // Add this line
    [theme.breakpoints.down('sm')]: {
        minHeight: '100vh',
        flexDirection: 'column',
    },
}));

function Footer() {
    const theme = useTheme();
    return (
        <FooterBox>
            <Box sx={{
                display:"flex",
                flexDirection: "column"
            }}>
                <Box>

                    <Typography></Typography>
                </Box>
                <Box>
                    <IconButton
                        size="small"
                        color={theme.palette.primary.contrastText}
                    >
                        <FontAwesomeIcon
                            color={theme.palette.primary.contrastText}
                            icon={faLinkedinIn}/>
                    </IconButton>
                    <IconButton
                        size="small"
                    >
                        <FontAwesomeIcon
                            size="lg"
                            color={theme.palette.primary.contrastText}
                            icon={faGithub}/>
                    </IconButton>
                </Box>
            </Box>

        </FooterBox>
    )
}

export default Footer;