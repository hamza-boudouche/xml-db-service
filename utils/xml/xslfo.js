const { spawn } = require("child_process");
const { exec } = require("child_process");
const fs = require('fs');
const { promisify } = require('util');
const writeFileAsync = promisify(fs.writeFile)
const path = require('path');

const generatePdf = (xmlFile, xslFile, outputFile) => {
	const ls = spawn("fop", ["-xml", path.join(__dirname, `../../out/xml/${xmlFile}`), "-xsl", path.join(__dirname, `/${xslFile}`), "-pdf", path.join(__dirname, `/${outputFile}`)]);

	return new Promise((resolve, reject) => {
		ls.on('error', (error) => {
			reject(error);
		});
		ls.on("close", code => {
			resolve(code);
		});
	})
}

const clearOutFolders = () => {
	return new Promise((resolve, reject) => {
		exec("rm *", (error, stdout, stderr) => { // fix this before you remove all the files in you project 
			if (error) {
				reject(error.message);
			}
			if (stderr) {
				reject(stderr)
			}
			resolve(stdout);
		})
	});
}

const saveXmlFile = () => {

}

module.exports = { generatePdf, clearOutFolders }