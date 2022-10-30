# [Challenge 07:](https://adventjs.dev/challenges/07)</br>[Searching the store](https://adventjs.dev/challenges/07)

We have a friend who works in a shop and he is not able to find the products he has in stock... Can we help him?

## Description

My friend Dani is working in a shop and with the arrival of Christmas the warehouse is a mess and he can't find anything.

We are going to create a `contains` function that receives two parameters: an object that defines the store and the product we are looking for.

The function must return a boolean that indicates if the string is found as a value at some level of the object. Let's see some examples:

```javascript
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
			product2: 't-shirt' // <- It's here!
		},
	},
};

contains(store1, 't-shirt'); // true

const store2 = {
	boot: {
		bottom: {
			'object': 'cd-rom',
			'other-object': 'diskette',
			'other-think': 'remote control'
		},
	},
};

contains(store2, 'gameboy'); // false
```

Keep in mind that the shop is huge. It has different warehouses and, as you have seen in the examples, each one can have different organisations, **the important thing is to look for that the product is in the warehouses**.

## Complete the challenge

```javascript
export default function contains(store, product) {
  // And don't forget to share your solution on social media!
  
  return false
}
```

[Solution](./js/script.js)