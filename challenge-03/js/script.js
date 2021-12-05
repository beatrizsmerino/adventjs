const letterList = [
	"bici coche (balón) bici coche peluche",
	"(muñeca) consola bici",
	"bici coche (balón bici coche",
	"peluche (bici [coche) bici coche balón",
	"(peluche {) bici",
	"() bici"
];

const letter = letterList[Math.floor(Math.random() * letterList.length)];

function isValid(letter) {
	// ¡No dejes que el Grinch gane!

	console.log("📜 Letter: ", letter);

	return true
}

const test = isValid(letter)

console.log(test)