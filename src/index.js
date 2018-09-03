import React from 'react';
import ReactDOM from 'react-dom';
import './Component/Global/CSS/index.css';
import App from './Component/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
