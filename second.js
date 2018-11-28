const pairSwitch = (str) => {
		switch(str) {
			case "G":
			return(["G","C"]);
			break;
			case "C":
			return(["C","G"]);
			break;
			case "A":
			return(["A","T"]);
			break;
			case "T":
			return(["T","A"]);
			break;
		}
};

function pairElement(str) {
	return str.split("").map(pairSwitch);
}
console.log(pairElement("GCG"));