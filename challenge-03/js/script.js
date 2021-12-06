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


	function isParanthesis(char) {
		if (char.includes('(') && char.includes(')')) {
			return true;
		} else {
			return false;
		}
	}

	function isParanthesisEmpty(char) {
		if (char.includes('()')) {
			return true;
		} else {
			return false;
		}
	}

	function foundCharacterNoValid(char) {
		if (char.includes('[') || char.includes(']') || char.includes('{') || char.includes('}')) {
			return true;
		} else {
			return false;
		}
	}

	function test() {
		let paranthesis = isParanthesis(letter);
		let paranthesisEmpty = isParanthesisEmpty(letter);

		let result = null;
		if (paranthesis) {
			if (paranthesisEmpty) {
				console.log("Test parentesis empty ❌");
				result = false;
			} else {
				if (foundCharacterNoValid(letter)) {
					console.log("Test parentesis empty ❌");
					result = false;
				} else {
					console.log("Test parentesis ✅");
					result = true;
				}
			}
		} else {
			console.log("Test parentesis ❌");
			result = false;
		}

		return result;
	}

	const result = test();

	return result;
}

isValid(letter);