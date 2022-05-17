const basex = require("basex")
const { jsToXml, xmlToJs } = require("../utils/xml/convert")
const client = new basex.Session("localhost", 1984, "admin", "admin");
const { executeAsync } = require("../utils/wrappers")
const { validate } = require("../utils/xml/validate")

client.execute("open projects_db", console.log);

const getProjectsXML = async () => {
	let res = await executeAsync(client, "xquery /")
	return res.result
}

const getProjects = async () => {
	const res = await getProjectsXML();
	const toXml = xmlToJs(res).root
	// console.log(JSON.stringify(toXml, null, 4))
	const projects = toXml.project ? toXml.project : []
	return projects
}

const addProject = async (project) => {
	let projects = await getProjects();
	console.log(projects)
	if (projects.map(p => p.id).filter(p => p == project.id).length === 0) {
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
		if (project.id === p.id) {
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
	projects = projects.filter(p => p.id !== projectId);
	const xml = jsToXml({ project: projects })
	if (await validate(xml, "projects.xsd")) {
		client.replace("/projects/projects.xml", xml, console.log)
	} else {
		throw new Error("unvalidated schema projects.xsd")
	}
}

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

module.exports = { getProjectsXML, addProject, updateProject, getProjects, deleteProject }
