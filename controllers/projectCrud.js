//Contenir la logique métier 
const functions = require('../projects/functions');
const { generatePdf, saveXmlFile, clearOutFolders, sendPdf } = require("../utils/xml/xslfo")

exports.addProject = async (req, res, next) => {
    await functions.addProject(req.body);
    res.json(req.body);
}

exports.updateProject = async (req, res, next) => {
    await functions.updateProject(req.body);
    res.json(req.body);
}

exports.getProjects = async (req, res) => {
    const projects = await functions.getProjects();
    res.json(projects);
}

exports.deleteProject = async (req, res, next) => {
    await functions.deleteProject(req.body.uid);
    res.json({ uid: req.body.uid })
}

exports.generateReportProjects = async (req, res, next) => {
    await saveXmlFile(await functions.getProjectsXML(), "out.xml")
    await generatePdf("out.xml", "projects.xsl", "projects.pdf")
    sendPdf(res, "projects.pdf");
    await clearOutFolders();
}

exports.getProjectsByKeyword = async (req, res, next) => {
    const projects = await functions.getProjectsByKeyword(req.query.keyword);
    res.json(projects);
}

exports.getProjectsByType = async (req, res, next) => {
    const projects = await functions.getProjectsByType(req.query.type);
    res.json(projects);
}

exports.getProjectsByName = async (req, res, next) => {
    const projects = await functions.getProjectsByName(req.query.name);
    res.json(projects);
}

exports.commentVersion = async (req, res, next) => {
    await functions.commentVersion(req.body.profId, req.body.projectId, req.body.versionId, req.body.contenu);
    res.json({
        profId: req.body.name,
        projectId: req.body.projectId,
        contenu: req.body.contenu
    });
}

exports.getProjectById = async (req, res, next) => {
    const project = await functions.getProjectById(req.query.id);
    res.json(project)
}
