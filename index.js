const basex = require("basex")
const convert = require("xml-js")
const { jsToXml, xmlToJs } = require("./utils/xml/convert")
const flatten = require("./utils/json/flatten")

// const client = new basex.Session("localhost", 1984, "admin", "admin");
// client.execute("create db test_db2", console.log);

// const etudiant1XML = convert.js2xml({
// 	etudiant: {
// 		name: "hamza",
// 		genie: "informatique",
// 	}
// }, { compact: true })

// const etudiant2XML = convert.js2xml({
// 	etudiant: {
// 		name: "hamza2",
// 		genie: "informatique",
// 	}
// }, { compact: true })

// client.add("/etudiant/etudiant.xml", etudiant1XML, console.log);
// client.add("/etudiant/etudiant.xml", etudiant2XML, console.log);

// const doStuff = (err, xml) => {
// 	if (err !== null) console.log(err);
// 	console.log(`<root>${xml.result}</root>`)
// 	const obj = xmlToJs(`<root>${xml.result}</root>`);
// 	console.log("///")
// 	console.log(JSON.stringify(obj, null, 4))
// }

// client.execute("xquery /etudiant/name", doStuff);

// client.execute("drop db test_db2");

// client.close();