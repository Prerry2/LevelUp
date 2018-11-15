// const express = require('express')
// const path = require('path')
// const favicon = require('serve-favicon')
// // const logger = require('morgan')
// const cookieParser = require('cookie-parser')
// const bodyParser = require('body-parser')

// const debug = require('debug')
// const http = require('http')

// const app = express()

// // require('dotenv').config();

// const port = process.env.PORT || 3000
// app.set('port', port)

// // var server = http.createServer(app)
// // server.listen(port);
// // server.on('error', onError)
// // server.on('listening',onListening)

// // not sure what this does

// // function normalizePort(val) {
// //     var port = parseInt(val, 10);
  
// //     if (isNaN(port)) {
// //       // named pipe
// //       return val;
// //     }
  
// //     if (port >= 0) {
// //       // port number
// //       return port;
// //     }
  
// //     return false;
// //   }

// // event listener for error on http server

// //   function onError(error) {
// //     if (error.syscall !== 'listen') {
// //       throw error;
// //     }
  
// //     var bind = typeof port === 'string'
// //       ? 'Pipe ' + port
// //       : 'Port ' + port;
  
// //     switch (error.code) {
// //       case 'EACCES':
// //         console.error(bind + ' is not for you');
// //         process.exit(1);
// //         break;
// //       case 'EADDRINUSE':
// //         console.error(bind + ' is really not for you');
// //         process.exit(1);
// //         break;
// //       default:
// //         throw error;
// //     }
// //   }

// // listener for listening on http server

// //   function onListening() {
// //     var addr = server.address();
// //     var bind = typeof addr === 'string'
// //       ? 'pipe ' + addr
// //       : 'port ' + addr.port;
// //     debug('Listening on ' + bind);
// //   }

// //



// // app.set('views', path.join(__dirname, 'views'));
// // app.set('view engine', 'hbs');

// // app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
// // app.use(logger('dev'))
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({extended: false}))
// // app.use(cookieParser())
// // app.use(express.static(path.join(__dirname, 'public')))

// // not sure what these do just yet
// // app.use('/', index);
// // app.use('/users', users)

// // 404 catch
// // app.use(function(req,res,next) {
// //     var err = new Error('Not Found')
// //     err.status = 404
// //     next(err)
// // })

// // error handler
// // app.use(function(err, req, res, next) {
// //     // not sure what these do either - something about setting locals while in development env config
// //     res.locals.message = err.message;
// //     res.locals.error = req.app.get('env') === 'development' ? err : {};

// //     res.status(err.status || 500);
// //     res.render('error')
// // })

// // const hbs = require('hbs')
// // const fs = require('fs')

// // const partialsDir = __dirname + '/views/partials'
// // const filenames = fs.readdirSync(partialsDir)

// // not sure what this does yet but it seems to be building out the handlebars template
// // filenames.forEach(function (filename) {
// //     const matches = /^([^.]+).hbs$/.exec(filename);
// //     if (!matches) {
// //       return;
// //     }
// //     const name = matches[1];
// //     const template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
// //     hbs.registerPartial(name, template);
// //   });
  
// //   hbs.registerHelper('json', function(context) {
// //       return JSON.stringify(context, null, 2);
// //   });



// app.listen(port, function() {
//     console.log("App listening on PORT " + port)
// })