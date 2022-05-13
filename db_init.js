const basex = require("basex")
let client = new basex.Session("localhost", 1984, "admin", "admin");
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

const client2 = new basex.Session("localhost", 1984, "admin", "admin");
client2.execute("create db projects_db", console.log);
// client.execute("open project_db", console.log);
client2.add("/projects/projects.xml", `
<root>
	<project>
		<id>permanent</id>
		<name>permanent</name>
	</project>
	<project>
		<id>permanent</id>
		<name>permanent</name>
	</project>
</root>
`, console.log)
client2.close()
