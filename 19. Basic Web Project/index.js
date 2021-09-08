const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const routing = require('./routing');
const port = 3000;
const app = express();

app.engine(".hbs", handlebars({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

routing(app);

app.listen(port, () => console.log("Listening on port " + port + "..."));