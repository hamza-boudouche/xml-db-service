const executeAsync = async (client, command) => {
	return new Promise((resolve, reject) => {
		client.execute(command, (err, res) => {
			if (err) { reject(err) }
			else { resolve(res) }
		});
	})
}

module.exports = { executeAsync }