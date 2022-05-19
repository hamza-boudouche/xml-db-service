//Contenir la logique métier 
const fonctions = require('../users/functions');


exports.addUser = async (req, res, next) => {
    await fonctions.addUser(req.body);
    res.json(req.body);
}

exports.updateUser = async (req, res, next) => {
    await fonctions.updateUser(req.body);
    res.json(req.body);
}

exports.getUsers = async (req, res) => {
    const users = await fonctions.getUsers();
    res.json(users)
}

exports.deleteUser = async (req, res, next) => {
    await fonctions.deleteUser(req.params.uid);
    res.json({ id: req.params.uid })
}