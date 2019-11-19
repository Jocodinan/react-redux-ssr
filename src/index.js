import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import "regenerator-runtime/runtime";
import store from './store'; 
import App from './wrappers/app/app';

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
  document.getElementById('app')
);