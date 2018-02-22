import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/index';

const container = document.createElement('div');
document.body.appendChild(container);
// vinicio - this is the only line that uses react-dom
ReactDom.render(<App />,container);