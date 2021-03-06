const basex = require("basex")
const { jsToXml, xmlToJs } = require("../utils/xml/convert")
const client = new basex.Session("localhost", 1984, "admin", "admin");
const { executeAsync } = require("../utils/wrappers")
const { validate } = require("../utils/xml/validate")

client.execute("open projects_db", console.log);

const getProjectsXML = async (query = "") => {
	let res = await executeAsync(client, `xquery /${query}`)
	return res.result
}

const getProjects = async (query = "") => {
	const res = await getProjectsXML(query);
	// console.log("res:", res)
	// console.log(query)
	const toXml = xmlToJs(res).root
	// console.log(JSON.stringify(toXml, null, 4))
	const projects = toXml.project ? toXml.project : []
	return projects
}

const getProjectById = async (uid) => {
	const projects = await getProjects();
	console.log(projects.find(project => { return project.uid == uid }))
	return projects.find(project => { return project.uid == uid })
}

const addProject = async (project) => {
	let projects = await getProjects();
	console.log(projects)
	if (projects.map(p => p.uid).filter(p => p == project.uid).length === 0) {
		projects = [...projects, project]
		const xml = jsToXml({
			project: projects
		})
		if (await validate(xml, "projects.xsd")) {
			client.replace("/projects/projects.xml", xml, console.log)
		} else {
			throw new Error("unvalidated schema projects.xsd")
		}
	}
}

const updateProject = async (project) => {
	let projects = await getProjects();
	projects = projects.map(p => {
		if (project.uid === p.uid) {
			return project;
		} else {
			return p;
		}
	})
	console.log(projects)
	const xml = jsToXml({ project: projects })
	if (await validate(xml, "projects.xsd")) {
		client.replace("/projects/projects.xml", xml, console.log)
	} else {
		throw new Error("unvalidated schema projects.xsd")
	}
}

const deleteProject = async (projectId) => {
	let projects = await getProjects();
	projects = projects.filter(p => p.uid !== projectId);
	const xml = jsToXml({ project: projects })
	if (await validate(xml, "projects.xsd")) {
		client.replace("/projects/projects.xml", xml, console.log)
	} else {
		throw new Error("unvalidated schema projects.xsd")
	}
}

const getProjectsByKeyword = async (keyword) => {
	keyword = keyword.toUpperCase()
	console.log("keyword", keyword)
	let projectsFiltered = await getProjects(`/root[project/motscles[motcle = '${keyword}']]`);
	let projects = await getProjects() || projectsFiltered;
	projects = projects.filter(project =>
		project.motscles.motcle.indexOf(keyword) !== -1)
	return projects;
}

const getProjectsByType = async (type) => {
	type = type.toUpperCase()
	const projectsFiltered = await getProjects(`root[project/type = '${type}']`);
	let projects = await getProjects() || projectsFiltered;
	projects = projects.filter(project =>
		project.type === type)
	return projects;
}

const getProjectsByName = async (titre) => {
	titre = titre.toLowerCase()
	let projects = await getProjects();
	projects = projects.filter(project =>
		project.titre === titre)
	return projects;
}

const commentVersion = async (profId, projectId, versionId, contenu) => {
	const projects = await getProjects()
	projects.forEach(project => {
		if (projectId === project.uid) {
			project.versions.version.forEach(version => {
				console.log(version.comments)
				console.log("version uid", version.uid)
				console.log("versionId", versionId)
				if (version.uid == versionId) {
					console.log("found")
					version.comments.comment.push({
						prof: profId,
						contenu
					})
				}
			})
			// console.log(JSON.stringify(project.versions.version, null, 2));
			updateProject(project)
		}
		return project
	})
}

// (async () => { 
// 	console.log('working');
// 	const projects = await getProjectsByKeyword("XML");
// 	console.log(projects)
// 	projects.forEach(project => console.log(project.motscles))
// })();

// const testing = async () => {
// 	await addProject({
// 		id: 1,
// 		name: "hamza3"
// 	})
// 	await addProject({
// 		id: 2,
// 		name: "hamza3"
// 	})
// 	await updateProject({
// 		id: 2,
// 		name: "hamza_mod"
// 	})
// 	await deleteProject(2)
// 	console.log(await getProjects())
// }
// testing();

module.exports = { getProjectById, getProjectsXML, addProject, updateProject, getProjects, deleteProject, getProjectsByKeyword, getProjectsByType, getProjectsByName, commentVersion }
