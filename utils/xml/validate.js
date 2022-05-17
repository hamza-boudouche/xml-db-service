var validator = require('xsd-schema-validator');
const path = require('path');

const validate = (xml, schema) => {
	return new Promise((resolve, reject) => {
		validator.validateXML(xml, path.join(__dirname, `./schemas/${schema}`), function (err, result) {
			if (err) {
				reject(err);
			}
			resolve(result.valid);
		});
	})
}

module.exports = { validate }
