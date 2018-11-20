const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 8080;

const passport = require('passport');
const flash = require('connect-flash');

require('./config/passport')(passport);

app.use(express.static("public"))

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

const exphbs = require('express-handlebars')
app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars");

app.use(session({
 secret: 'levelupmakesecuritybetter',
 resave:true,
 saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./routes/index')(app, passport);

app.listen(port);
console.log("Port: " + port);