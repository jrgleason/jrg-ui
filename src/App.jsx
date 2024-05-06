import './App.css';
import JrgAppBar from "./JrgAppBar";
import {Outlet} from "react-router-dom";
import {createTheme} from '@mui/material/styles';
import {Box, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            contrastText: '#B8D9D5',
            main: '#59484D',

        },
        secondary: {
            main: '#D9A282',
        },
        text: {
            primary: '#B8D9D5',
        },
        background: {
            default: '#59484D',
        }
    },
});

function App() {

    return (
        <ThemeProvider theme={theme}>
            <Box className="App" style={{
                overflow: 'hidden',
            }}>
                <JrgAppBar/>
                <Outlet sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    backgroundColor: 'black',
                    color: 'white',
                }}/>
            </Box>
        </ThemeProvider>
    );
}

export default App;