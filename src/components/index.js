import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './root';
import configureStore from '../store/configureStore';

const store = configureStore();
const flowId = window.GLOBAL.flowId;

ReactDOM.render(
    <Provider store={store}>
        <App flowId={flowId} />
    </Provider>,
    document.getElementById('content')
);
