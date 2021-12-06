const sheepList = [
	{ name: 'Noa', color: 'blue' },
	{ name: 'Euge', color: 'red' },
	{ name: 'Navidad', color: 'red' },
	{ name: 'Ki Na Ma', color: 'red' }
];

function countSheep(sheepList) {
	// here your magic

	console.log("🐑 List sheep: ", sheepList);

	const letters = ["n", "a"];
	const color = "red";
	sheepList = sheepList.filter(el => el.color === color && letters.every(i => el.name.toLowerCase().split('').includes(i)));
	console.log("🐑 List of sheep filtered: ", sheepList);

	return sheepList
}

countSheep(sheepList);