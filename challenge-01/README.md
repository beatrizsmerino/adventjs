# Challenge 01

## Description

Consider a list/array of sheep. Each has a name and a color. Make a function that returns a list of all sheep that are `red` **and also** have a name containing both the letters `n` AND `a`, regardless of order, capitalization or spaces.

For example, if we have the sheep:

```javascript
const sheepList = [
	{ name: "Noa", color: "blue" },
	{ name: "Euge", color: "red" },
	{ name: "Navidad", color: "red" },
	{ name: "Ki Na Ma", color: "red" },
];
```

When the method is executed it should return the following:

```javascript
const sheepFiltered = countSheep(sheepList);

console.log(sheepFiltered);

// [
//  { name: 'Navidad', color: 'red' },
//  { name: 'Ki Na Ma', color: 'red' }
// ]
```

## Complete the challenge

```javascript
export default function countSheep(sheepList) {
	// here your magic
	return sheepList;
}
```

[Solution 1](./solution-1/js/script.js)  
[Solution 2](./solution-2/js/script.js)
