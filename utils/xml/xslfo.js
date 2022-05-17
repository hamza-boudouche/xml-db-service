const { spawn } = require("child_process");
const { exec } = require("child_process");
const fs = require('fs').promises;
const path = require('path');

const generatePdf = (xmlFile, xslFile, outputFile) => {
	const ls = spawn("fop", ["-xml", path.join(__dirname, `../../out/xml/${xmlFile}`), "-xsl", path.join(__dirname, `./xsl/${xslFile}`), "-pdf", path.join(__dirname, `../../out/pdf/${outputFile}`)]);

	return new Promise((resolve, reject) => {
		ls.on('error', (error) => {
			reject(error);
		});
		ls.on("close", code => {
			resolve(code);
		});
	})
}

const saveXmlFile = async (xml, outputFile) => {
	await fs.writeFile(path.join(path.dirname, "../../out/xml", outputFile), outputFile);
}

const clearOutFolders = () => {
	return new Promise((resolve, reject) => {
		exec(`rm ${path.join(__dirname, "../../out/pdf")}/* ; rm ${path.join(__dirname, "../../out/xml")}/*`, (error, stdout, stderr) => {
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