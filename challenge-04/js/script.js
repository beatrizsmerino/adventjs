function createXmasTree(height) {
	// ¡Y no olvides también poner los turrones!
	const treeHeight = height;
	console.log(`🌲 Height of tree: `, treeHeight);


	let numEven = [];
	for (let i = 0; i < 100; i++) {
		if (i % 2 == 0) {
			numEven.push(i);
			i++;
		}
	}
	console.log(`🌲 Even numbers:`, numEven);


	let numEvenMax = numEven.slice(0, height);
	console.log(`🌲 ${height} first even numbers:`, numEvenMax);


	let numOdd = [];
	for (let i = 0; i < 100; i++) {
		if (i % 2 != 0) {
			numOdd.push(i);
			i++;
		}
	}
	console.log(`🌲 Odd numbers:`, numOdd);


	let numOddMax = numOdd.slice(0, height);
	console.log(`🌲 ${height} first odd numbers:`, numOddMax);


	let treeWidth = numOddMax[numOddMax.length - 1];
	console.log(`🌲 Width of tree:`, treeWidth);


	let treeTopUnderscores = [];
	numEvenMax.reverse().map(item => {
		let underscore = '';
		for (let num = 0; num < item; num++) {
			underscore += '_';
		}
		treeTopUnderscores.push(underscore);
	});
	console.log(`🌲 Build underscore of the top tree:`, treeTopUnderscores);


	let treeTopAsterics = [];
	numOddMax.map(item => {
		let asterics = '';
		for (let num = 0; num < item; num++) {
			asterics += '*';
		}
		treeTopAsterics.push(asterics);
	});
	console.log(`🌲 Build asterics of the top tree:`, treeTopAsterics);


	let treeTop = [];
	treeTopUnderscores.map((item, index) => {
		let treeRow = treeTopAsterics[index];

		if (item.length != 0) {
			let middle = item.length / 2;
			let middle1 = item.substr(0, middle);
			let middle2 = item.substr(middle, item.length);
			treeRow = `${middle1}${treeTopAsterics[index]}${middle2}`;
		}

		treeTop.push(treeRow);
	});
	console.log(`🌲 Build top of the tree:`, treeTop);


	let treeBottomUnderscore = [];
	for (let i = 0; i < 2; i++) {
		let underscore = '';
		for (let num = 0; num < treeWidth - 1; num++) {
			underscore += '_';
		}
		treeBottomUnderscore.push(underscore);
	}
	console.log(`🌲 Build underscores of bottom tree:`, treeBottomUnderscore);


	let treeBottom = [];
	treeBottomUnderscore.map(item => {
		let middle = item.length / 2;
		let middle1 = item.substr(0, middle);
		let middle2 = item.substr(middle, item.length);
		let treeRow = `${middle1}#${middle2}`;
		treeBottom.push(treeRow);
	});
	console.log(`🌲 Build bottom of the tree:`, treeBottom);

	const treeArray = treeTop.concat(treeBottom);
	const treeArrayWithBreakLines = treeArray.map((item, index) => {
		let theLast = treeArray.length - 1;

		if (index !== theLast) {
			return `${item}\n`;
		} else {
			return item;
		}
	});
	const tree = treeArrayWithBreakLines.join('');
	console.log(tree);

	return tree;
}

function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

createXmasTree(randomIntFromInterval(1, 100));
