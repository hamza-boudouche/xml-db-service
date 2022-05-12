const express = require('express');
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

app.use('/project', projectRoutes);


module.exports = app;