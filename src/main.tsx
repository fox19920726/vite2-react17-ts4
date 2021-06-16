import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { createHashHistory } from 'history'
import './styles/index.scss';
import App from './App';
import './mock'

const history = createHashHistory()

const RootApp = () => {
	return (
		<Router history={history}>
			<App />
		</Router>
	)
}


ReactDOM.render(/* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(RootApp, null)), document.getElementById('root'));
