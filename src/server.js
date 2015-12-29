import koa from 'koa';

import React from "react";
import {RoutingContext, match} from "react-router";
import routes from './routes';
import {createLocation} from 'history';
import Html from './components/Html';
import ReactDOM from 'react-dom/server';

var app = koa();
const hostname = process.env.HOSTNAME || "localhost";
const port     = process.env.PORT || 8001;

app.use(function *(next){
  const location = createLocation(this.path);
	const webserver = process.env.NODE_ENV === "production" ? "" : "//" + hostname + ":8080";
  yield ((callback) => {
		match({routes, location}, (error, redirectLocation, renderProps) => {
      if (renderProps) {
        let __html= ReactDOM.renderToStaticMarkup(<RoutingContext {...renderProps} />);

        const data = { title: 'Servidor', description: '', css:'',style:'http://localhost:8080/public/bootstrap.css', body: __html, entry: 'http://localhost:8080/public/main.js' };
        this.body = ReactDOM.renderToString(<Html {...data} />);
      }
      callback(null);
    })
  })
});
app.listen(port, () => {
	console.info("==> ✅  Server is listening");
	console.info("==> 🌎  Go to http://%s:%s", hostname, port);
});
