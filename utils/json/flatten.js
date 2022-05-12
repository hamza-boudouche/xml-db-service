function flatten(object) {
	for (const property in object) {
		console.log(`${property}: ${object[property]}`);
	}
	return object;
}

console.log(flatten({
	hello: "world",
	how: {
		question: "how",
		answer: "good",
	},
}))