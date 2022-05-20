//Contenir la logique métier 
const res = require('express/lib/response');
const fonctions = require('../users/functions');


exports.addUser = async (req, res, next) => {
    await fonctions.addUser(req.body);
    res.json(req.body);
}

exports.updateUser = async (req, res, next) => {
    await fonctions.updateUser(req.body);
    res.json(req.body);
}

exports.getUsers = async (req, res, next) => {
    const users = await fonctions.getUsers();
    res.json(users)
}

exports.getStudents = async (req, res, next) => {
    const students = await fonctions.getStudents();
    res.json(students)
}

exports.getProfs = async (req, res, next) => {
    const profs = await fonctions.getProfs();
    res.json(profs);
}

exports.deleteUser = async (req, res, next) => {
    await fonctions.deleteUser(req.params.uid);
    res.json({ id: req.params.uid })
}