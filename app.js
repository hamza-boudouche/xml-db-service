const express = require('express');
const cors = require("cors")
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');

const app = express();

app.use(express.json());

app.use(cors())
app.options('*', cors());


app.use('/api/users', userRoutes);

app.use('/api/projects', projectRoutes);

app.use(express.static('out'));

module.exports = app; 
