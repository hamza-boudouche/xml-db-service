const basex = require("basex")
let client = new basex.Session("localhost", 1984, "admin", "admin");
client.execute("create db user_db", console.log);
client.add("/users/users.xml", `
<root>
<user>
<uid>hamza@hamza</uid>
<displayName>hamzaAdmin</displayName>
<imageUrl>hamza</imageUrl>
<type>admin</type>
</user>

<user>
<uid>hamza@hamz</uid>
<displayName>hamza</displayName>
<imageUrl>hamza</imageUrl>
<type>student</type>
<mle>51947</mle>
<niveauetudes>BAC3</niveauetudes>
</user>

<user>
<uid>soufiane@test.com</uid>
<displayName>soufiane</displayName>
<imageUrl>soufiane</imageUrl>
<type>student</type>
<mle>619747</mle>
<niveauetudes>BAC3</niveauetudes>
</user>

<user>
<uid>amal@test.com</uid>
<displayName>amal</displayName>
<imageUrl>amal</imageUrl>
<type>student</type>
<mle>619947</mle>
<niveauetudes>BAC3</niveauetudes>
</user>

<user>
<uid>hamza@ham</uid>
<displayName>hamza</displayName>
<imageUrl>hamza</imageUrl>
<type>prof</type>
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
	<titre>projet-1</titre>
	<note>20</note>
	<description>this is a description</description>
	<motscles>
		<motcle>
			JAVA
		</motcle>
		<motcle>
			WEB
		</motcle>
	</motscles>
	<comments>
		<comment>
			<prof>test@test.com</prof>
			<contenu>contenu comment</contenu>
		</comment>
		<comment>
			<prof>test@test.com</prof>
			<contenu>contenu comment</contenu>
		</comment>
	</comments>
	<versions>
		<version>
			<uid>1</uid>
			<publisher>test@test.com</publisher>
			<numero>1</numero>
			<description>this is a description</description>
			<comments>
				<comment>
					<prof>test@test.com</prof>
					<contenu>contenu comment</contenu>
				</comment>
				<comment>
					<prof>test@test.com</prof>
					<contenu>contenu comment</contenu>
				</comment>
			</comments>
			<contenu>projet1version1.pdf</contenu>
		</version>
		<version>
			<uid>2</uid>
			<description>this is a description</description>
			<publisher>2</publisher>
			<numero>test@test.com</numero>
			<comments>
				<comment>
					<prof>test@test.com</prof>
					<contenu>contenu comment</contenu>
				</comment>
				<comment>
					<prof>test@test.com</prof>
					<contenu>contenu comment</contenu>
				</comment>
			</comments>
			<contenu>projet1version2.pdf</contenu>
		</version>
	</versions>
	<membres>
		<uid>test@test.com</uid>
		<uid>test2@test.com</uid>
	</membres>
	<profId>2</profId>
	<status>FINI</status>
	<type>PROJET_INTEGRE</type>
	</project>

	<project>
	<uid>2</uid>
	<titre>projet-2</titre>
	<note>20</note>
	<description>this is a description</description>
	<motscles>
		<motcle>
			JAVA
		</motcle>
		<motcle>
			XML
		</motcle>
	</motscles>
	<comments>
		<comment>
			<prof>test@test.com</prof>
			<contenu>contenu comment</contenu>
		</comment>
		<comment>
			<prof>prof1</prof>
			<contenu>contenu comment</contenu>
		</comment>
	</comments>
	<versions>
		<version>
			<uid>1</uid>
			<description>this is a description</description>
			<publisher>test@test.com</publisher>
			<numero>1</numero>
			<comments>
				<comment>
					<prof>prof1</prof>
					<contenu>contenu comment</contenu>
				</comment>
				<comment>
					<prof>prof1</prof>
					<contenu>contenu comment</contenu>
				</comment>
			</comments>
			<contenu>projet2version1.pdf</contenu>
		</version>
		<version>
			<uid>2</uid>
			<description>this is a description</description>
			<numero>2</numero>
			<publisher>test@test.com</publisher>
			<comments>
				<comment>
					<prof>test@test.com</prof>
					<contenu>contenu comment</contenu>
				</comment>
				<comment>
					<prof>test@test.com</prof>
					<contenu>contenu comment</contenu>
				</comment>
			</comments>
			<contenu>projet2version2.pdf</contenu>
		</version>
	</versions>
	<membres>
		<uid>test@test.com</uid>
		<uid>test2@test.com</uid>
	</membres>
	<profId>test@test.com</profId>
	<status>FINI</status>
	<type>PROJET_INTEGRE</type>
	</project>

	<project>
	<uid>3</uid>
	<titre>projet-3</titre>
	<description>this is a description</description>
	<note>20</note>
	<motscles>
		<motcle>
			REACT
		</motcle>
		<motcle>
			NODEJS
		</motcle>
	</motscles>
	<versions>
		<version>
			<uid>1</uid>
			<publisher>test@test.com</publisher>
			<description>this is a description</description>
			<numero>1</numero>
			<comments>
				<comment>
					<prof>test@test.com</prof>
					<contenu>contenu comment</contenu>
				</comment>
				<comment>
					<prof>test@test.com</prof>
					<contenu>contenu comment</contenu>
				</comment>
			</comments>
			<contenu>projet1version1.pdf</contenu>
		</version>
		<version>
			<uid>2</uid>
			<publisher>test@test.com</publisher>
			<description>this is a description</description>
			<numero>2</numero>
			<comments>
				<comment>
					<prof>test@test.com</prof>
					<contenu>contenu comment</contenu>
				</comment>
				<comment>
					<prof>test@test.com</prof>
					<contenu>contenu comment</contenu>
				</comment>
			</comments>
			<contenu>projet1version2.pdf</contenu>
		</version>
	</versions>
	<membres>
		<uid>test@test.com</uid>
		<uid>test2@test.com</uid>
	</membres>
	<profId>test@test.com</profId>
	<status>FINI</status>
	<type>PFE</type>
	</project>
</root>

`, console.log)
client2.close()
