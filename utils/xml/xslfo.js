const { spawn } = require("child_process");
const { exec } = require("child_process");
const fs = require('fs').promises;
const path = require('path');

const generatePdf = (xmlFile, xslFile, outputFile) => {
	exec(`fop -xml "/mnt/c/Users/Boudouche\ Hamza/Desktop/basex\ npm/out/xml/${xmlFile}" -xsl "/mnt/c/Users/Boudouche\ Hamza/Desktop/basex\ npm/utils/xml/xsl/${xslFile}" -pdf "/mnt/c/Users/Boudouche\ Hamza/Desktop/basex\ npm/public/${outputFile}"`, (error, stdout, stderr) => {
		if (error) {
			console.log(error.message);
		}
		if (stderr) {
			console.log(stderr)
		}
	})
	console.log(true);
}

const saveXmlFile = async (xml, outputFile) => {
	console.log(outputFile)
	await fs.writeFile(path.join(__dirname, "../../out/xml", outputFile), outputFile);
}

const clearOutFolders = () => {
	return new Promise((resolve, reject) => {
		exec(`rm ${path.join(__dirname, "../../out/pdf/*")} ; rm ${path.join(__dirname, "../../out/xml/*")}`, (error, stdout, stderr) => {
			if (error) {
				reject(error.message);
			}
			if (stderr) {
				reject(stderr)
			}
		})
		resolve(true);
	});
}

const sendPdf = (res, fileName) => {
	const file = fs.createReadStream(path.join(__dirname, `../../out/pdf/${fileName}`));
	const stat = fs.statSync(path.join(__dirname, `../../out/pdf/${fileName}`));
	res.setHeader('Content-Length', stat.size);
	res.setHeader('Content-Type', 'application/pdf');
	res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
	file.pipe(res);
	res.end();
}

module.exports = { generatePdf, saveXmlFile, clearOutFolders, sendPdf }
