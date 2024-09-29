import {Box, Typography} from "@mui/material";
import {styled} from "@mui/system";
import {faAws, faGoogle, faJava, faMicrosoft, faPython} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMicrochip} from "@fortawesome/free-solid-svg-icons";

const StyledOuterBox = styled(Box)(({theme, minHeight = '25vh'}) => ({
    display: 'flex',
    minHeight: minHeight,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
        minHeight: '100vh',
        flexDirection: 'column',
    },
}));
const StyledBox = styled(Box)(
    ({
         theme,
         border,
         minHeight = '25vh'
     }) => ({
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.primary.contrastText,
        padding: '5px 0',
        minHeight: minHeight,
        position: 'relative',
        '&::after': {
            content: border ? '""' : 'none',
            position: 'absolute',
            right: 0,
            top: '20px',
            bottom: '20px',
            width: '3px',
            backgroundColor: theme.palette.primary.contrastText,
        },
        [theme.breakpoints.down('sm')]: {
            minHeight: '0',
            '&::after': {
                display: 'none',
            },
        },
    }));

function CenteredBox({children, border = true}) {
    return (
        <StyledBox border={border} minHeight={"40vh"}>
            {children}
        </StyledBox>
    );
}

function IconBox({icon1, icon2, text, border=true}) {
    return (
        <CenteredBox border={border}>
            <Box sx={{display: 'flex'}}>
                <Box sx={{padding: '8px'}}>
                    <FontAwesomeIcon size="3x" icon={icon1}/>
                </Box>
                <Box sx={{padding: '8px'}}>
                    <FontAwesomeIcon size="3x" sx={{fontWeight: 'bold', padding: '8px'}} icon={icon2}/>
                </Box>
            </Box>
            <Typography variant={"h6"}>{text}</Typography>
        </CenteredBox>
    );
}

function WhatIDo() {
    return (
        <StyledOuterBox minHeight={"40vh"}>
            <IconBox icon1={faJava} icon2={faMicrosoft} text="Expert Developer"/>
            <IconBox icon1={faMicrochip} icon2={faPython} text="AI Guru"/>
            <IconBox icon1={faAws} icon2={faGoogle} text="Cloud Master" border={false}/>
        </StyledOuterBox>
    );
}

export default WhatIDo;