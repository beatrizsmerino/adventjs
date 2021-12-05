const ovejas = [
	{ name: 'Noa', color: 'azul' },
	{ name: 'Euge', color: 'rojo' },
	{ name: 'Navidad', color: 'rojo' },
	{ name: 'Ki Na Ma', color: 'rojo' }
];

function contarOvejas(ovejas) {
	// aquí tu magia

	console.log("🐑 List sheep: ", ovejas);

	const letras = ["n", "a"];
	const elColor = "rojo";
	ovejas = ovejas.filter(el => el.color === elColor && letras.every(i => el.name.toLowerCase().split('').includes(i)));
	console.log("🐑 List of sheep filtered: ", ovejas);

	return ovejas
}

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)