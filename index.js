const basex = require("basex")
const { jsToXml, xmlToJs } = require("./utils/xml/convert")
const functions = require("./users/functions")

// const client = new basex.Session("localhost", 1984, "admin", "admin");
// client.execute("create db test_db2", console.log);

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