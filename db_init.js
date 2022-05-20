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
<mle>61947</mle>
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
			<prof>prof1</prof>
			<contenu>contenu comment</contenu>
		</comment>
		<comment>
			<prof>prof2</prof>
			<contenu>contenu comment</contenu>
		</comment>
	</comments>
	<versions>
		<version>
			<uid>1</uid>
			<publisher>2</publisher>
			<numero>1</numero>
			<description>this is a description</description>
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
			<contenu>projet1version1.pdf</contenu>
		</version>
		<version>
			<uid>2</uid>
			<description>this is a description</description>
			<publisher>2</publisher>
			<numero>2</numero>
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
			<contenu>projet1version2.pdf</contenu>
		</version>
	</versions>
	<membres>
		<uid>1</uid>
		<uid>2</uid>
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
			<prof>prof1</prof>
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
			<publisher>2</publisher>
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
			<publisher>2</publisher>
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
			<contenu>projet2version2.pdf</contenu>
		</version>
	</versions>
	<membres>
		<uid>1</uid>
		<uid>2</uid>
	</membres>
	<profId>2</profId>
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
			<publisher>2</publisher>
			<description>this is a description</description>
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
			<contenu>projet1version1.pdf</contenu>
		</version>
		<version>
			<uid>2</uid>
			<publisher>2</publisher>
			<description>this is a description</description>
			<numero>2</numero>
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
			<contenu>projet1version2.pdf</contenu>
		</version>
	</versions>
	<membres>
		<uid>1</uid>
		<uid>2</uid>
	</membres>
	<profId>2</profId>
	<status>FINI</status>
	<type>PFE</type>
	</project>
</root>
`, console.log)
client2.close()
