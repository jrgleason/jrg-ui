import './App.css';
import JrgAppBar from "./JrgAppBar";
import Page from "./Page";

function App() {
    return (
        <div className="App" style={{
            overflow: 'hidden',
        }}>
            <JrgAppBar/>
            <Page sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: 'black',
                color: 'white',
            }}/>
        </div>
    );
}

export default App;