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
						<xsl:text>Projets finis:</xsl:text>
					</fo:block>
					<xsl:for-each select="root/project[status = 'FINI'] ">
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
												titre
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:value-of select="titre" />
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
									<fo:table-row>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												note
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:value-of select="note" />
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
									<fo:table-row>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												type
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:value-of select="type" />
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
									<fo:table-row>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												mots clés
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:for-each select="motscles/motcle">
													<fo:list-block>
														<fo:list-item>
															<fo:list-item-label>
																<fo:block></fo:block>
															</fo:list-item-label>
															<fo:list-item-body>
																<fo:block>
																	<xsl:value-of select="." />
																	<!-- list -->
																</fo:block>
															</fo:list-item-body>
														</fo:list-item>
													</fo:list-block>
												</xsl:for-each>
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
									<fo:table-row>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												Versions
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:for-each select="versions/version">
													<fo:list-block>
														<fo:list-item>
															<fo:list-item-label>
																<fo:block></fo:block>
															</fo:list-item-label>
															<fo:list-item-body>
																<fo:block>
																	<fo:block font-weight="bold">
																		<xsl:value-of select="contenu" />
																	</fo:block>
																	<fo:block margin-left="20pt">
																		->
																		<xsl:value-of select="description" />
																	</fo:block>
																	<!-- list -->
																</fo:block>
															</fo:list-item-body>
														</fo:list-item>
													</fo:list-block>
												</xsl:for-each>
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
								</fo:table-body>
							</fo:table>
						</fo:block>
					</xsl:for-each>
					<!-- separator -->
					<!-- separator -->
					<!-- separator -->
					<fo:block font-weight="bold" font-size="20pt">
						<xsl:text>Projets en cours:</xsl:text>
					</fo:block>
					<xsl:for-each select="root/project[status = 'EN_COURS'] ">
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
												titre
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:value-of select="titre" />
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
									<fo:table-row>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												type
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:value-of select="type" />
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
									<fo:table-row>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												mots clés
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:for-each select="motscles/motcle">
													<fo:list-block>
														<fo:list-item>
															<fo:list-item-label>
																<fo:block></fo:block>
															</fo:list-item-label>
															<fo:list-item-body>
																<fo:block>
																	<xsl:value-of select="." />
																	<!-- list -->
																</fo:block>
															</fo:list-item-body>
														</fo:list-item>
													</fo:list-block>
												</xsl:for-each>
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
									<fo:table-row>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												Versions
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:for-each select="versions/version">
													<fo:list-block>
														<fo:list-item>
															<fo:list-item-label>
																<fo:block></fo:block>
															</fo:list-item-label>
															<fo:list-item-body>
																<fo:block>
																	<fo:block font-weight="bold">
																		<xsl:value-of select="contenu" />
																	</fo:block>
																	<fo:block margin-left="20pt">
																		->
																		<xsl:value-of select="description" />
																	</fo:block>
																	<!-- list -->
																</fo:block>
															</fo:list-item-body>
														</fo:list-item>
													</fo:list-block>
												</xsl:for-each>
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
								</fo:table-body>
							</fo:table>
						</fo:block>
					</xsl:for-each>
					
					<!-- separator -->
					<!-- separator -->
					<!-- separator -->
					<fo:block font-weight="bold" font-size="20pt">
						<xsl:text>Projets en attente:</xsl:text>
					</fo:block>
					<xsl:for-each select="root/project[status = 'EN_ATTENTE'] ">
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
												titre
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:value-of select="titre" />
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
									<fo:table-row>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												type
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:value-of select="type" />
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
									<fo:table-row>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												mots clés
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:for-each select="motscles/motcle">
													<fo:list-block>
														<fo:list-item>
															<fo:list-item-label>
																<fo:block></fo:block>
															</fo:list-item-label>
															<fo:list-item-body>
																<fo:block>
																	<xsl:value-of select="." />
																	<!-- list -->
																</fo:block>
															</fo:list-item-body>
														</fo:list-item>
													</fo:list-block>
												</xsl:for-each>
											</fo:block>
										</fo:table-cell>
									</fo:table-row>
									<fo:table-row>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												Versions
											</fo:block>
										</fo:table-cell>
										<fo:table-cell border="1pt solid black" padding="6pt">
											<fo:block>
												<xsl:for-each select="versions/version">
													<fo:list-block>
														<fo:list-item>
															<fo:list-item-label>
																<fo:block></fo:block>
															</fo:list-item-label>
															<fo:list-item-body>
																<fo:block>
																	<fo:block font-weight="bold">
																		<xsl:value-of select="contenu" />
																	</fo:block>
																	<fo:block margin-left="20pt">
																		->
																		<xsl:value-of select="description" />
																	</fo:block>
																	<!-- list -->
																</fo:block>
															</fo:list-item-body>
														</fo:list-item>
													</fo:list-block>
												</xsl:for-each>
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