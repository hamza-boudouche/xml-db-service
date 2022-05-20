const express = require('express');
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const cors = require('cors');
const busboy = require('connect-busboy');
const fileUpload = require('express-fileupload');

const app = express();
app.use(express.json());
// app.use(busboy());

app.use(fileUpload());

app.use(cors({
  origin: "*",
}));

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//   next();
// });

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use('/api/users', userRoutes);

app.use('/api/projects', projectRoutes);

app.use(express.static('public'));

module.exports = app; 