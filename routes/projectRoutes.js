//Contenir la logique routing
const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const projectCrud = require('../controllers/projectCrud.js');

//Indiquer à l'application la fonction à executer quand elle reçoit une requete http.

//get all users
router.get('/all', projectCrud.getProjects);

//updating
router.put('/update', projectCrud.updateProject)

//Adding a user
router.post('/project', projectCrud.addProject);

//Deleting a user
router.delete('/', projectCrud.deleteProject);

//Generating a pdf


router.get('/keyword', projectCrud.getProjectsByKeyword);
router.get('/type', projectCrud.getProjectsByType);
router.get('/name', projectCrud.getProjectsByName);

router.post('/comment', projectCrud.commentProject);

router.get('/rapport', projectCrud.generateReportProjects);




module.exports = router;