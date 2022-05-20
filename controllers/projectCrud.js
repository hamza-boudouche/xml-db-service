const fs = require('fs-extra');
const path = require('path');


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
    await saveXmlFile(await functions.getProjectsXML(), "projects.xml")
    generatePdf("projects.xml", "projects.xsl", "projects.pdf")
    res.json({ success: true })
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

exports.uploadVersion = async (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files[''];
    console.log(req.files[''])
    const outputFile = req.query.filename
    const projectId = req.query.projectid
    const versionId = req.query.versionid
    const numero = req.query.numero

    const project = await functions.getProjectById(projectId);
    project.versions.version.push({
        uid: versionId,
        publisher: "pub",
        numero,
        description: "this is a description",
        comments: {
            comment: []
        },
    })
    this.updateProject()

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(`/mnt/c/Users/Boudouche\ Hamza/Desktop/basex\ npm/public/${outputFile}.pdf`, function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
}
