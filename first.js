function pairElement(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
	  let tempArr = [str.charAt(i)];
	  switch(str[i]) {
	  	case "G":
	  	tempArr.push("C");
	  	break;
	  	case "C":
	  	tempArr.push("G");
	  	break;
	  	case "A":
	  	tempArr.push("T");
	  	break;
	  	case "T":
	  	tempArr.push("A");
	  	break;
	  }
	  arr.push(tempArr);
  }
  return arr
}

console.log(pairElement("GCG"));