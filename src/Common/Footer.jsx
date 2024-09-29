import {Box, IconButton, Typography} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import {styled} from "@mui/system";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faYoutube} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import {faCopyright} from "@fortawesome/free-solid-svg-icons";

const FooterBox = styled(Box)(({theme, minHeight = '25vh'}) => ({
    display: 'flex',
    minHeight: '10vh',
    maxHeight: '50vh',
    padding: '24px',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    justifyContent: 'flex-end', // Add this line
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
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
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        [theme.breakpoints.down('sm')]: {
                            alignItems: "center",
                            justifyContent: "center"
                        },
                    }}
                >
                    <IconButton
                        size="small"
                        color={theme.palette.primary.contrastText}
                        href={"https://www.linkedin.com/in/jackie-gleason-5a52114/"}
                    >
                        <FontAwesomeIcon
                            color={theme.palette.primary.contrastText}
                            icon={faLinkedinIn}/>
                    </IconButton>
                    <IconButton
                        size="small"
                        href={"https://github.com/jrgleason"}
                    >
                        <FontAwesomeIcon
                            size="lg"
                            color={theme.palette.primary.contrastText}
                            icon={faGithub}/>
                    </IconButton>
                    <IconButton
                        size="small"
                        href={"https://www.youtube.com/channel/UCKb_hAmgdktghrRmJ9QPfGA"}
                    >
                        <FontAwesomeIcon
                            size="lg"
                            color={theme.palette.primary.contrastText}

                            icon={faYoutube}/>
                    </IconButton>
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <FontAwesomeIcon
                        icon={faCopyright}
                        style={{ paddingRight: '13px' }}
                    />
                    <Typography>Jackie Gleason 2002-2024</Typography>
                </Box>
            </Box>

        </FooterBox>
    )
}

export default Footer;