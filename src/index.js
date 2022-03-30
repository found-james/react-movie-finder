import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './style.css'


const root = document.querySelector('#root');

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>, root
)