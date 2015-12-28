import React, {Component} from "react";
import ReactDOM from 'react-dom';
import routes from './routes';
import {Router} from "react-router";
import {createHistory} from "history";

const reactRoot = window.document.getElementById("app");
ReactDOM.render(<Router history={createHistory()} routes={routes} />, reactRoot);
