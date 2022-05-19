const basex = require("basex")
const { jsToXml, xmlToJs } = require("../utils/xml/convert")
const client = new basex.Session("localhost", 1984, "admin", "admin");
const { executeAsync } = require("../utils/wrappers")
const { validate } = require("../utils/xml/validate")

client.execute("open user_db", console.log);

// IMPORTANT - convert the param into xml using the imported jsToXml - before returning convert result into json using the imported xmlToJs

const getUsersXML = async () => {
	let res = await executeAsync(client, "xquery /")
	return res.result
}

const getUsers = async () => {
	const res = await getUsersXML();
	// console.log(res)
	const toXml = xmlToJs(res).root
	// console.log(toXml)
	const users = toXml.user ? toXml.user : []
	return users
}

const addUser = async (user) => {
	let users = await getUsers();
	if (users.map(u => u.uid).filter(u => u == user.uid).length === 0) {
		users = [...users, user]
		console.log(users)
		const xml = jsToXml({
			user: users
		})
		if (await validate(xml, "users.xsd")) {
			client.replace("/users/users.xml", xml, console.log)
		} else {
			throw new Error("unvalidated schema users.xsd")
		}
	}
}

const updateUser = async (user) => {
	let users = await getUsers();
	users = users.map(u => {
		if (user.uid === u.uid) {
			return user;
		} else {
			return u;
		}
	})
	console.log(users)
	const xml = jsToXml({
		user: users
	})
	if (await validate(xml, "users.xsd")) {
		client.replace("/users/users.xml", xml, console.log)
	} else {
		throw new Error("unvalidated schema users.xsd")
	}
}

const deleteUser = async (userId) => {
	let users = await getUsers();
	users = users.filter(u => u.uid !== userId);
	const xml = jsToXml({
		user: users
	})
	if (await validate(xml, "users.xsd")) {
		client.replace("/users/users.xml", xml, console.log)
	} else {
		throw new Error("unvalidated schema users.xsd")
	}
}

// const testing = async () => {
// 	await addUser({
// 		id: 3,
// 		name: "hamza3"
// 	})
// 	await addUser({
// 		id: 3,
// 		name: "hamza3"
// 	})
// 	await updateUser({
// 		id: 3,
// 		name: "hamza_mod"
// 	})
// 	// await deleteUser(3)
// 	console.log(await getUsers())
// }

// testing();

module.exports = { getUsersXML, addUser, updateUser, getUsers, deleteUser }
