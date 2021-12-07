# Challenge 06

## Description

Before we can enjoy Christmas... it's time to finish off our final exams. And it's time for a bit of maths! 😱

A function is given two parameters: an Array with numbers and the expected result.

The function must return the two values of the Array that add up to the expected result. As there **can sometimes be more than two values** that add up, the first one starting from the left that finds another pair will be returned, **no matter how far to the right**.

If it is not found, `null` is returned.

Let's look at some examples:

```javascript
sumPairs([3, 5, 7, 2], 10); // [3, 7]
sumPairs([-3, -2, 7, -5], 10); // null
sumPairs([2, 2, 3, 1], 4); // [2, 2]
sumPairs([6, 7, 1, 2], 8); // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6); // [1, 5]
```

The result has to be an array **with two numbers**.

Once you have the result... how could you make it as optimal as possible so you **don't have to go through the same situations twice 🤔?**

## Complete the challenge

```javascript
export default function sumPairs(numbers, result) {
	// And don't forget to share your solution on social media!
	return null;
}
```

[Solution](./js/script.js)
