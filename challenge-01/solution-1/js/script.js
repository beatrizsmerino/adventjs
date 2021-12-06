const sheepList = [
	{ name: 'Noa', color: 'blue' },
	{ name: 'Euge', color: 'red' },
	{ name: 'Navidad', color: 'red' },
	{ name: 'Ki Na Ma', color: 'red' }
];

function countSheep(sheepList) {
	// here your magic

	console.log("🐑 List sheep: ", sheepList);

	sheepList = sheepList.filter(el => el.color === 'red');
	console.log("🐑 List of red sheep: ", sheepList);

	sheepList = sheepList.filter(el => el.name.match(/(?=.*[Nn])(?=.*[Aa])/gi) !== null);
	console.log("🐑 List of sheep whose names have the letters: 'A', 'a', 'N', or 'n': ", sheepList);

	return sheepList;
}

countSheep(sheepList);