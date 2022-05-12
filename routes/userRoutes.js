//Contenir la logique routing
const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/userCrud.js');

//Indiquer à l'application la fonction à executer quand elle reçoit une requete http.

//get all users
router.get('/' ,stuffCtrl.getUsers);

//updating
router.put('/', stuffCtrl.updateUser)

//Adding a user
router.post('/', stuffCtrl.addUser);

//Deleting a user
router.delete('/', stuffCtrl.deletUser);


module.exports = router;