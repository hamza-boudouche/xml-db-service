const { XMLParser, XMLBuilder, XMLValidator } = require('fast-xml-parser');
const parser = new XMLParser();
const builder = new XMLBuilder();

const jsToXml = (obj) => {
	if (obj !== undefined) {
		return builder.build(
			{
				root: {
					...obj,
				},
			});
	}
	return "";
};

const xmlToJs = (xml) => {
	if (xml !== undefined && xml !== "") {
		return parser.parse(xml);
	}
	return {}
};

module.exports = { jsToXml, xmlToJs };
