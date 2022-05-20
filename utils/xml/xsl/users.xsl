<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">
	<xsl:output method="xml" indent="yes" />
	<xsl:template match="/">
		<fo:root>
			<fo:layout-master-set>
				<fo:simple-page-master master-name="A4-portrait" page-height="29.7cm" page-width="21.0cm" margin="2cm">
					<fo:region-body />
				</fo:simple-page-master>
			</fo:layout-master-set>
			<fo:page-sequence master-reference="A4-portrait">
				<fo:flow flow-name="xsl-region-body">
					<fo:block font-weight="bold" font-size="20pt">
						<xsl:text>Admins:</xsl:text>
					</fo:block>
					<xsl:for-each select="root/user[type = 'admin'] ">
						<fo:block>
							<fo:table margin-bottom="25pt">
								<fo:table-body>
									<fo:table-row>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												id
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:value-of select="uid" />
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
									<fo:table-row>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												name
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:value-of select="email" />
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
									<fo:table-row>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												email
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:value-of select="displayName" />
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
								</fo:table-body>
							</fo:table>
						</fo:block>
					</xsl:for-each>
					<!-- block -->
					<!-- block -->
					<!-- block -->
					<fo:block font-weight="bold" font-size="20pt">
						<xsl:text>Etudiants:</xsl:text>
					</fo:block>
					<xsl:for-each select="root/user[type = 'student'] ">
						<fo:block>
							<fo:table margin-bottom="25pt">
								<fo:table-body>
									<fo:table-row>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												id
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:value-of select="uid" />
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
									<fo:table-row>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												name
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:value-of select="email" />
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
									<fo:table-row>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												email
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:value-of select="displayName" />
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
									<fo:table-row>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												matricule
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:value-of select="mle" />
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
									<fo:table-row>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												niveau d'etudes
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:value-of select="niveauetudes" />
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
								</fo:table-body>
							</fo:table>
						</fo:block>
					</xsl:for-each>
					<!-- block -->
					<!-- block -->
					<!-- block -->
					<fo:block font-weight="bold" font-size="20pt">
						<xsl:text>Professeurs:</xsl:text>
					</fo:block>
					<xsl:for-each select="root/user[type = 'prof'] ">
						<fo:block>
							<fo:table margin-bottom="25pt">
								<fo:table-body>
									<fo:table-row>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												id
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:value-of select="uid" />
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
									<fo:table-row>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												name
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:value-of select="email" />
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
									<fo:table-row>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												email
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:value-of select="displayName" />
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
								</fo:table-body>
							</fo:table>
						</fo:block>
					</xsl:for-each>
				</fo:flow>
			</fo:page-sequence>
		</fo:root>
	</xsl:template>
</xsl:stylesheet>