//Contenir la logique routing
const express = require('express');
const router = express.Router();
const projectCrud = require('../controllers/projectCrud.js');

//Indiquer à l'application la fonction à executer quand elle reçoit une requete http.

//get all users
router.get('/', projectCrud.getProjects);

//updating
router.put('/', projectCrud.updateProject)

//Adding a user
router.post('/', projectCrud.addProject);

//Deleting a user
router.delete('/', projectCrud.deleteProject);


module.exports = router;