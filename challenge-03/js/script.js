// List of example strings to test parenthesis validation.
const letterList = [
	"bike car (ball) bike car toy",
	"(doll) console bike",
	"bike car (ball bike car",
	"toy (bike [car) bike car ball",
	"(toy {) bike",
	"() bike",
	")bici( casa play"
];

// Randomly selecting a string from the list for testing.
const letter = letterList[Math.floor(Math.random() * letterList.length)];

// The isValid function checks if the 'letter' string has valid usage.
function isValid(letter) {
	// Don't let the Grinch win!

	// Prints the string being analyzed.
	console.log("📜 Analyzing Letter: ", letter);

	// Variables to maintain the balance of parentheses and whether there's content between them.
	let balance = 0;
	let hasContent = false;

	// Array for storing log data to be displayed in table format.
	let logData = [];

	// Looping through each character in the string.
	for (let i = 0; i < letter.length; i++) {
		const char = letter[i];
		// Storing current data for logging.
		logData.push({ Character: char, Balance: balance, HasContent: hasContent });

		// Logic for handling open and closed parentheses, and validating characters.
		if (char === '(') {
			// Checks for an error with open parentheses.
			if (isOpenParenthesis(balance)) {
				console.table(logData);
				console.log("❌ Error at ", logData);
				return false;
			}
			balance++;
		} else if (char === ')') {
			// Checks for an error with closed parentheses.
			if (isCloseParenthesisValid(balance, hasContent)) {
				console.table(logData);
				console.log("❌ Error at ", logData);
				return false;
			}
			balance--;
			hasContent = false;
		} else if (balance === 1) {
			// Checks if the character inside parentheses is valid.
			if (!isValidCharInParenthesis(char)) {
				console.table(logData);
				console.log("❌ Invalid Character in Parenthesis at ", logData);
				return false;
			}
			hasContent = true;
		}
	}

	// Displays the log data in table format.
	console.table(logData);

	// Checks if the final balance of parentheses is correct.
	return isBalanced(balance);
}

// Auxiliary functions to handle different aspects of parenthesis validation.

// Checks for more than one unclosed open parenthesis.
const isOpenParenthesis = balance => {
	return balance > 0;
};

// Checks for a closed parenthesis without an opening or without content.
const isCloseParenthesisValid = (balance, hasContent) => {
	return balance <= 0 || !hasContent;
};

// Checks if the character inside the parentheses is valid.
const isValidCharInParenthesis = char => {
	return !(char === '[' || char === ']' || char === '{' || char === '}');
};

// Checks if all open parentheses are closed.
const isBalanced = balance => {
	return balance === 0;
};

// Prints the selected string and the result of the validation.
console.log(`Is valid: ${isValid(letter) ? '✅ Yes' : '❌ No'}`);
