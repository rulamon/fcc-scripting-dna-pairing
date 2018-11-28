function pairElement(str) {
	const pairs = {
		"G": "C",
		"C": "G",
		"A": "T",
		"T": "A"
	}
	return str.split("").map(x => [x, pairs[x]])
}
console.log(pairElement("GCG"));