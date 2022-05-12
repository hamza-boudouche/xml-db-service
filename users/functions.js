const { jsToXml, xmlToJs } = require("../utils/xml/convert")

// IMPORTANT - convert the param into xml using the imported jsToXml - before returning convert result into json using the imported xmlToJs

const addUser = (user) => {
	const userXml = jsToXml(user)

}

const updateUser = (user) => {
	const userXml = jsToXml(user)
}

const getUsers = (userId) => {
	if (userId !== undefined) {
		// get user with specified id, return inside array

	} else {
		// get all users

	}
}

const deleteUser = (userId) => {

}

module.exports = { addUser, updateUser, getUsers, deleteUser }
