import koa from "koa"

var app = koa();
const hostname = process.env.HOSTNAME || "localhost";
const port     = process.env.PORT || 8001;

app.use(function *(next){
  this.body= "cuando cuando"
});
app.listen(port, () => {
	console.info("==> ✅  Server is listening");
	console.info("==> 🌎  Go to http://%s:%s", hostname, port);
});
