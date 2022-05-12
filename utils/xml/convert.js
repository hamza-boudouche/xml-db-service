const convert = require("xml-js");

const jsToXml = (obj) => {
	if (obj !== undefined) {
		return convert.js2xml(
			{
				root: {
					...obj,
				},
			},
			{ compact: true }
		);
	}
	return "";
};

const xmlToJs = (xml) => {
	if (xml !== undefined && xml !== "") {
		return convert.xml2js(xml, { ignoreComment: true, alwaysChildren: true, compact: true });
	}
	return {}
};

module.exports = { jsToXml, xmlToJs };
