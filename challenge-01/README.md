# [Challenge 01:](https://adventjs.dev/challenges/01)</br>[Counting sheep to sleep](https://adventjs.dev/challenges/01)

With the excitement of Christmas coming, we're having a hard time sleeping quite a bit lately. Let's try using this little trick that will help us fall asleep faster 🐑.

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

Remember. **It must contain both letters `a` and `n` in the name.** Do not count sheep that have only one of the letters, they must have both.

## Complete the challenge

```javascript
export default function countSheep(sheepList) {
	// here your magic
	return sheepList;
}
```

[Solution 1](./solution-1/js/script.js)  
[Solution 2](./solution-2/js/script.js)
