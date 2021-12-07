const store1 = {
	shelf1: {
		box1: {
			product1: 'coca-cola',
			product2: 'fanta',
			product3: 'sprite'
		},
	},
	shelf2: {
		box1: 'empty',
		box2: {
			product1: 'trousers',
			product2: 't-shirt'
		},
	},
};

const store2 = {
	boot: {
		bottom: {
			'object': 'cd-rom',
			'other-object': 'diskette',
			'other-think': 'remote control'
		},
	},
};


function contains(store, product) {
	// And don't forget to share your solution on social media!

	console.log("🏬 Store: ", store);
	console.log("📦 Product: ", product);

	const storeToString = JSON.stringify(store);
	console.log(storeToString);

	let found = storeToString.includes(`:"${product}"`);
	console.log(`🔍 Search ${product}: `, found);

	if (found) {
		return true;
	} else {
		return false;
	}
};


contains(store1, 't-shirt');
contains(store2, 'gameboy');