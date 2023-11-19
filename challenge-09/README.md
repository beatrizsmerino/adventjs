# [Challenge 09:](https://adventjs.dev/challenges/09)<br>[Automatically grouping things together](https://adventjs.dev/challenges/09)

![Challenge 09](../README/images/challenge-09.png)

We have a lot of boxes in the gift factory... and if we don't somehow automate this mess.... We might run out of Christmas!

## Description

At Santa's factory 🎅 the special day is approaching... and we still have a lot of things to tell. 😅

Luckily **Mark Zucktheelf** 🧝 has come up with a function that allows to group an array, which can be of values or objects, through a function or a property.

He brings us a bunch of **examples**:

```javascript
groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
groupBy([{age: 23}, {age: 24}], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }

groupBy(
  [1397639141184, 1363223700000],
  timestamp => new Date(timestamp).getFullYear()
)
// { 2013: [1363223700000], 2014: [1397639141184] }

groupBy([
  { title: 'JavaScript: The Good Parts', rating: 8 },
  { title: 'Aprendiendo Git', rating: 10 },
  { title: 'Clean Code', rating: 9 },
], 'rating')
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }
```

As you can see, the `groupBy` function receives a collection (array) and a function or a property, and returns an object with keys that are the values of the executed function passing as argument each element or of the property for each element. Then the values are an array of the values that have the same key.

The difficulty of the challenge is more in **understanding** the function than in the **implementation**. Good luck.

## Complete the challenge

```javascript
export default function groupBy(collection, it) {
	// ¡No olvides compartir tu solución en redes!
	return {};
}
```

[Solution](./js/script.js)
