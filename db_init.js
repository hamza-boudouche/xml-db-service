const basex = require("basex")
const client = new basex.Session("localhost", 1984, "admin", "admin");
client.execute("create db user_db", console.log);
client.add("/users/users.xml", `
<root>
	<user>
		<id>admin</id>
		<name>hamza</name>
	</user>
	<user>
		<id>admin</id>
		<name>hamza2</name>
	</user>
</root>
`, console.log)
client.close()
