# Challenge 01

## Description

Consider a list/array of sheep. Each has a name and a color. Make a function that returns a list of all sheep that are red and also have a name containing both the letters n AND a, regardless of order, capitalization or spaces.

For example, if we have the sheep:

```javascript
const ovejas = [
	{ name: "Noa", color: "azul" },
	{ name: "Euge", color: "rojo" },
	{ name: "Navidad", color: "rojo" },
	{ name: "Ki Na Ma", color: "rojo" },
];
```

When the method is executed it should return the following:

```javascript
const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
```

## Complete the challenge

```javascript
export default function contarOvejas(ovejas) {
	// aquí tu magia
	return ovejas;
}
```

[Solution 1](./solution-1/js/script.js)  
[Solution 2](./solution-2/js/script.js)
