const basex = require("basex")
const { jsToXml, xmlToJs } = require("../utils/xml/convert")
const client = new basex.Session("localhost", 1984, "admin", "admin");
const { executeAsync } = require("../utils/wrappers")
client.execute("open user_db", console.log);

// IMPORTANT - convert the param into xml using the imported jsToXml - before returning convert result into json using the imported xmlToJs

const getUsers = async () => {
	let res = await executeAsync(client, "xquery /")
	res = res.result
	// console.log(res)
	const toXml = xmlToJs(res).root
	// console.log(toXml)
	const users = toXml.user ? toXml.user : []
	return users
}

const addUser = async (user) => {
	let users = await getUsers();
	if (users.map(u => u.id).filter(u => u == user.id).length === 0) {
		users = [...users, user]
		client.replace("/users/users.xml", jsToXml({
			user: users
		}), console.log)
	}
}

const updateUser = async (user) => {
	let users = await getUsers();
	users = users.map(u => {
		if (user.id === u.id) {
			return user;
		} else {
			return u;
		}
	})
	console.log(users)
	client.replace("/users/users.xml", jsToXml({ user: users }), console.log)
}

const deleteUser = async (userId) => {
	let users = await getUsers();
	users = users.filter(u => u.id !== userId);
	client.replace("/users/users.xml", jsToXml({ user: users }), console.log)
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

module.exports = { addUser, updateUser, getUsers, deleteUser }
