import React, {Component} from "react";
import ReactDOM from 'react-dom';
import routes from './routes';
import {Router} from "react-router";
import {createHistory} from "history";

const reactRoot = window.document.getElementById("app");
console.log(reactRoot);
//ReactDOM.render(Router, {routes, history: createHistory()}, reactRoot);
ReactDOM.render(<Router history={createHistory()} routes={routes} />, reactRoot);
