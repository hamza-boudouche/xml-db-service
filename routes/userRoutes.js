//Contenir la logique routing
const express = require('express');
const router = express.Router();
const userCrud = require('../controllers/userCrud.js');

//Indiquer à l'application la fonction à executer quand elle reçoit une requete http.

//get all users
router.get('/' ,userCrud.getUsers);

//updating
router.put('/', userCrud.updateUser)

//Adding a user
router.post('/', userCrud.addUser);

//Deleting a user
router.delete('/', userCrud.deleteUser);


module.exports = router;