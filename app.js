const express = require('express');
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

app.use('/api/project', projectRoutes);


module.exports = app; 