//Contenir la logique métier 
const fonctions = require('../projects/functions');

exports.addProject = async (req, res, next) => {
    await fonctions.addProject(req.body);
    res.json(req.body);
}

exports.updateProject = async (req, res, next) => {
    await fonctions.updateProject(req.body);
    res.json(req.body);
}

exports.getProjects = async (req, res) => {
    const projects = await fonctions.getProjects()();
    res.json(projects);
}

exports.deleteProject = async (req, res, next) => {
    await fonctions.deleteProject(req.body.id);
    res.json({ id: req.body.id })
}