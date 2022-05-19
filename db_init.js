const basex = require("basex")
let client = new basex.Session("localhost", 1984, "admin", "admin");
client.execute("create db user_db", console.log);
client.add("/users/users.xml", `
<root>
	<user>
		<uid>1</uid>
		<email>admin</email>
		<displayName>hamza</displayName>
		<imageUrl>hamza</imageUrl>
		<type>admin</type>
	</user>
	<user>
		<uid>2</uid>
		<email>admin</email>
		<displayName>hamza</displayName>
		<imageUrl>hamza</imageUrl>
		<type>admin</type>
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
	<uid>1</uid>
	<titre>projet 1</titre>
	<note>20</note>
	<motscles>
		<motcle>
			Java
		</motcle>
		<motcle>
			web
		</motcle>
	</motscles>
	<comments>
		<comment>
			<prof>prof1</prof>
			<contenu>contenu comment</contenu>
		</comment>
	</comments>
	<versions>
		<version>
			<numero>1</numero>
			<commentaire>something comment</commentaire>
			<contenu>projet1version1.pdf</contenu>
		</version>
	</versions>
	<groupes>
		<groupe>
			<uid>1</uid>
			<membres>
				<membre>
					<uid>1</uid>
					<name>hamza boudouche</name>
				</membre>
			</membres>
			<projects>
				<project>
					<uid>1</uid>
				</project>
			</projects>
		</groupe>
	</groupes>
	<profId>2</profId>
	<status>FINI</status>
	<type>PROJET_INTEGRE</type>
	</project>

	<project>
	<uid>2</uid>
	<titre>projet 2</titre>
	<note>20</note>
	<motscles>
		<motcle>
			Java
		</motcle>
		<motcle>
			web
		</motcle>
	</motscles>
	<comments>
		<comment>
			<prof>prof1</prof>
			<contenu>contenu comment</contenu>
		</comment>
	</comments>
	<versions>
		<version>
			<numero>1</numero>
			<commentaire>something comment</commentaire>
			<contenu>projet2version1.pdf</contenu>
		</version>
	</versions>
	<groupes>
		<groupe>
			<uid>1</uid>
			<membres>
				<membre>
					<uid>1</uid>
					<name>hamza boudouche</name>
				</membre>
			</membres>
		</groupe>
	</groupes>
	<profId>2</profId>
	<status>FINI</status>
	<type>PROJET_INTEGRE</type>
	</project>
</root>
`, console.log)
client2.close()
