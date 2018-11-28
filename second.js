function pairElement(str) {
	return str.split("").map(x => {
		let arr = [x];
		switch(x) {
			case "G":
			arr.push("C");
			break;
			case "C":
			arr.push("G");
			break;
			case "A":
			arr.push("T");
			break;
			case "T":
			arr.push("A");
			break;
		}
		return arr;
	})
}
console.log(pairElement("GCG"));