//import {BrowserRouter, Router, Switch} from 'react-router-dom';
import './App.css';
import ProfileImage from './components/ProfileImage';
import Form from './components/Form';
import Contact from './components/Contact';


function App() {
    return (
        <div className="container" style={{ 'justifyContent': 'space-around'}}>
            <div>
                <ProfileImage style={{backgroundColor: 'white', marginTop: '30px'}} />
            </div>
            <div style={{'justifyContent' : 'left'}}>
                <Form />
            </div>
            <div>
                <Contact/>
            </div>
        </div>
    );
}

export default App;
