function sumPairs(numbers, result) {
	// And don't forget to share your solution on social media!

	console.log("#️⃣ Numbers: ", numbers);
	console.log("🧮 Result: ", result);

	function getResult(num1, num2) {
		const test = `${num1} + ${num2} = ${num1 + num2}`;

		if (num1 + num2 == result) {
			console.log(`Pair found\n ${test} ✅`);
			return { num1: num1, num2: num2, test: true };
		} else {
			console.log(`No pair found\n ${test} ❌`);
			return { num1: num1, num2: num2, test: false };;
		}
	}

	function foundPairs() {
		const numbersTotal = numbers.length;
		let pairs = [];

		for (let i = 0; i < numbersTotal; i++) {
			for (let j = i + 1; j < numbersTotal; j++) {
				let num1 = numbers[i];
				let num2 = numbers[j];
				pairs.push(getResult(num1, num2));
			}
		}

		const foundPairs = pairs.find(pair => pair.test);
		let result = null;
		if (foundPairs) {
			result = [foundPairs.num1, foundPairs.num2];
		}

		console.log("🚀 Result: ", result);

		return result;
	}

	return foundPairs();
}


sumPairs([3, 5, 7, 2], 10); // [3, 7]
sumPairs([-3, -2, 7, -5], 10); // null
sumPairs([2, 2, 3, 1], 4); // [2, 2]
sumPairs([6, 7, 1, 2], 8); // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6); // [1, 5]