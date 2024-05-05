import {Box} from "@mui/material";
import {styled} from "@mui/system";

const FooterBox = styled(Box)(({theme, minHeight = '25vh'}) => ({
    display: 'flex',
    minHeight: '10vh',
    maxHeight: '50vh',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
        minHeight: '100vh',
        flexDirection: 'column',
    },
}));

function Footer() {
    return (
        <FooterBox>
            <Box>
                <h1>footer</h1>
            </Box>
        </FooterBox>
    )
}

export default Footer;