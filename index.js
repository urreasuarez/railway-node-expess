const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handler');
const { required } = require('joi');
const cors = require('cors');
const app = express();
const port = 3000;

// In this line I tell the application to use this middleware for the post method
app.use(express.json());

// this code allow access to some origins that wants to execute app
/*
const whiteList = ['http://localhost:3000', 'http://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if(whiteList.includes(origin)){
      callback(null, true);
    }else{
      callback(new Error('No permitido'));
    }
  }
}
app.use(cors(options));
*/
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy nueva ruta');
})

routerApi(app);

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log('Mi port ' + port);
});
