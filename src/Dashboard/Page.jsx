import {Box} from "@mui/material";

function Page() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        }}>
            <Box sx={{
                flex: 1
            }}>
                <h1>Dashboard</h1>
            </Box>
        </Box>
    );
}

export {Page as DashboardPage}