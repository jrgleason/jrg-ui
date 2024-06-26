import {Box, Button, Typography} from "@mui/material";
import React from "react";
import {styled} from "@mui/system";

const StyledSplashBox = styled(Box)({
    width: '100%',
    backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/59909c3a1e5b6cfb68d6df0f/1502787631066-10F68923N868OTVWXKC4/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/DSC07574.jpg?format=1500w)',
    backgroundSize: '100% 100%',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
});

const StyledMarketingBox = styled(Box)(({theme}) => ({
    height: '70%',
    flexGrow: 1,
    marginTop: '55px',
    padding: '10px',
    borderRadius: '20px',
    maxHeight: '300px',
    backgroundColor: `${theme.palette.primary.main}CC`,
}));

const StyledTypography = styled(Typography)(({theme}) => ({
    color: theme.palette.primary.contrastText,
    flexGrow: 1,
    textAlign: 'center',
    padding: '25px',
}));

function MarketingSplash() {
    return (
        <StyledSplashBox className={"splash"}>
            <StyledMarketingBox className={"marketing"}>
                <StyledTypography variant="h1" component="div">
                    Welcome!
                </StyledTypography>
                <StyledTypography variant="h3" component="div">
                    Columbus's Premier Developer
                </StyledTypography>
            </StyledMarketingBox>
            <Box sx={{minHeight: '8px', flex: 1}}></Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end',
                    width: '100%',
                    minHeight: '20vh',
                    marginRight: '5vw',
                }}
            >
                <Button
                    variant="contained"
                    sx={{padding: '8px'}}
                    href="https://www.billwoodimages.com/">Photo by Bill Wood</Button>
            </Box>
        </StyledSplashBox>
    );
}

export default MarketingSplash;