//Contenir la logique routing
const express = require('express');
const router = express.Router();
const userCrud = require('../controllers/userCrud.js');

//Indiquer à l'application la fonction à executer quand elle reçoit une requete http.

//get all users
router.get('/getAll', userCrud.getUsers);
router.get('/allStudents', userCrud.getStudents);
router.get('/allProfs', userCrud.getProfs);

//updating
router.put('/updateuser', userCrud.updateUser)

//Adding a user
router.post('/adduser', userCrud.addUser);

//Deleting a user
router.delete('/deleteuser', userCrud.deleteUser);
// router.get('/rapport', projectCrud.generateReportUsers);

module.exports = router;