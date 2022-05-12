const basex = require("basex")
const { jsToXml, xmlToJs } = require("../utils/xml/convert")
const client = new basex.Session("localhost", 1984, "admin", "admin");
const { executeAsync } = require("../utils/wrappers")
client.execute("open projects_db", console.log);

// IMPORTANT - convert the param into xml using the imported jsToXml - before returning convert result into json using the imported xmlToJs

const getProjects = async () => {
	let res = await executeAsync(client, "xquery /")
	res = res.result
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
		client.replace("/projects/projects.xml", jsToXml({
			project: projects
		}), console.log)
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
	client.replace("/projects/projects.xml", jsToXml({ project: projects }), console.log)
}

const deleteProject = async (projectId) => {
	let projects = await getProjects();
	projects = projects.filter(p => p.id !== projectId);
	client.replace("/projects/projects.xml", jsToXml({ project: projects }), console.log)
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

module.exports = { addProject, updateProject, getProjects, deleteProject }
