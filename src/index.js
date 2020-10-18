import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import getRouter from './router/router'

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(getRouter(), document.getElementById('root'));