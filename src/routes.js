import React from "react";
import {Router, Route} from "react-router";
import Main from "./components/Main";
import About from "./components/About";
/**
 * The React Router 1.0 routes for both the server and the client.
 */
export default (
	<Router>
		<Route path="/" component={Main}/>
		<Route path="/about" component={About}/>
	</Router>
);
