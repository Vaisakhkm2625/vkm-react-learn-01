import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

const element = <h1>Hello World</h1>;

console.log(element);

import App from './App';

import Counter from './components/counter';
/*ReactDOM.render(element, document.getElementById('root'));*/

ReactDOM.render(<Counter />, document.getElementById('root'));
