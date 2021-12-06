const ovejas = [
	{ name: 'Noa', color: 'azul' },
	{ name: 'Euge', color: 'rojo' },
	{ name: 'Navidad', color: 'rojo' },
	{ name: 'Ki Na Ma', color: 'rojo' }
];

function contarOvejas(ovejas) {
	// here your magic

	console.log("🐑 List sheep: ", ovejas);

	ovejas = ovejas.filter(el => el.color === 'rojo');
	console.log("🐑 List of red sheep: ", ovejas);

	ovejas = ovejas.filter(el => el.name.match(/(?=.*[Nn])(?=.*[Aa])/gi) !== null);
	console.log("🐑 List of sheep whose names have the letters: 'A', 'a', 'N', or 'n': ", ovejas);

	return ovejas
}

contarOvejas(ovejas);