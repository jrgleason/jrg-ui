import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
const Page = () => {
    return (
        <React.Fragment>
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
            <Box
                className={"splash"}
                height={"70vh"}
                sx={{
                    width: '100%',
                    backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/59909c3a1e5b6cfb68d6df0f/1502787631066-10F68923N868OTVWXKC4/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/DSC07574.jpg?format=1500w)',
                    backgroundSize: '100% auto',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#9E8F6E',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', // Add this line
                    alignItems: 'center', // Add this line
                    color: 'white',
                    height: '100%',
                    minHeight: '500px'
                }}
            >
                <Box
                    className={"marketing"}
                    sx={{
                        height: '70%',
                        flexGrow: 1,
                    }}
                >
                    <Typography
                        variant="h1"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            textAlign: 'center',
                            padding: '25px'
                        }}
                    >
                        Welcome!
                    </Typography>
                    <Typography variant="h3" component="div" sx={{flexGrow: 1, textAlign: 'center'}}>
                        Columbus's Premier Developer
                    </Typography>
                </Box>
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
                        href="https://www.billwoodimages.com/">Photo by Bill Wood</Button>
                </Box>
            </Box>
        </React.Fragment>
    );
}
export default Page;