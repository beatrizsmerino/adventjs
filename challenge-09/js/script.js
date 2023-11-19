function groupBy(collection, it) {
	// Don't forget to share your solution on social media!

	const group = {};
	// Recording of each step
	const log = [];

	collection.forEach(item => {
		// Determine the key (either by executing the function or accessing the property)
		const key = typeof it === 'function' ? it(item) : item[it];

		// If the key doesn't exist yet in the 'group' object, initialize it with an empty array
		if (!group[key]) {
			group[key] = [];
		}

		// Add the current item to the corresponding group
		group[key].push(item);

		// Add the current status to the registry
		log.push({
			Item: JSON.stringify(item),
			Key: key,
			CurrentGroup: JSON.stringify(group[key])
		});
	});

	// Display the log with console.table
	console.table(log);

	return group;
}

groupBy([6.1, 4.2, 6.3], Math.floor);
// { 6: [6.1, 6.3], 4: [4.2] }

groupBy(['one', 'two', 'three'], 'length');
// { 3: ['one', 'two'], 5: ['three'] }

groupBy([{ age: 23 }, { age: 24 }], 'age');
// { 23: [{age: 23}], 24: [{age: 24}] }

groupBy(
	[1397639141184, 1363223700000],
	timestamp => new Date(timestamp).getFullYear()
);
// { 2013: [1363223700000], 2014: [1397639141184] }

groupBy([
	{ title: 'JavaScript: The Good Parts', rating: 8 },
	{ title: 'Aprendiendo Git', rating: 10 },
	{ title: 'Clean Code', rating: 9 },
], 'rating');
// {
// 8:  [{ title: 'JavaScript: The Good Parts', rating: 8 }],
// 9:  [{ title: 'Clean Code', rating: 9 }],
// 10: [{ title: 'Aprendiendo Git', rating: 10 }]
// }
