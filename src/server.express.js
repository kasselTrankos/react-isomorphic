import path from "path";
import express from "express";
import http from 'http';
import React from "react";
import {RoutingContext, match} from "react-router";
import routes from './routes';
import {createLocation} from 'history';
import Html from './components/Html';
import ReactDOM from 'react-dom/server';



const server = global.server = express();
server.use(express.static('build/public'));
//require('./demo.js');
console.log(__dirname+'build/public/demo.js');



const hostname = process.env.HOSTNAME || "localhost";
const port     = process.env.PORT || 8001;
server.get('*', (req, res, next) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const webserver = process.env.NODE_ENV === "production" ? "" : "//" + hostname + ":8080";
      let __body= ReactDOM.renderToStaticMarkup(<RoutingContext {...renderProps} />);
      const data = { title: 'Servidor',
                    description: '',
                    css:'',
                    style:`${webserver}/public/bootstrap.css`,
                    body: __html,
                    entry: `${webserver}/public/main.js`
                  };
      let __html = ReactDOM.renderToString(<Html {...data} />);
      res.status(200).send(__html)
    } else {
      res.status(404).send('Not found')
    }
  })
});
server.listen(port, () => {
  console.log(`The server is now running at http://localhost:${port}/`);
});
