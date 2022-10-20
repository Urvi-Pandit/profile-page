import { useState } from 'react';
import {BrowserRouter, Router, Switch} from 'react-router-dom';
import './App.css';
import ProfileImage from './components/ProfileImage';


function App() {
    return (
        <div className="container" style={{'flex-direction': 'row', 'flexShrink':'0', 'justifyContent': 'center', 'flexWrap': 'nowrap'}}>
            <div>
                <ProfileImage style={{backgroundColor: 'white', marginTop: '30px'}} />
            </div>
        </div>
    );
}

export default App;
