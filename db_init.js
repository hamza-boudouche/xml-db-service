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

client.execute("create db project_db", console.log);
client.execute("open project_db", console.log);
client.add("/projects/projects.xml", `
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
client.close()
