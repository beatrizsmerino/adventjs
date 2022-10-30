# [Challenge 04:](https://adventjs.dev/challenges/04)</br>[It's time to put Christmas in the house](https://adventjs.dev/challenges/04)

I think we can bring out the Christmas bonnets, the nougat... And the Christmas tree! 🎄 Let's set it up with JavaScript.

## Description

It's time to put up the Christmas tree at home! 🎄

To do this, we are going to create a function that receives the height of the tree, which will be a positive integer from 1 to, at most, 100.

If we pass it the argument `5`, it would paint this:

```javascript
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
```

We create a triangle of asterisks `*` with the proportionate height and, on the sides, we use the underscore `_` for the spaces. It is very important that our tree always has the same length on each side.

All trees, no matter how small or large, have a trunk of two `#` lines.

Another example with a tree of height `3`:

```javascript
__*__
_***_
*****
__#__
__#__
```

Note that the tree is a string and you need the line breaks `/n` for each line to form the tree properly.

## Complete the challenge

```javascript
export default function createXmasTree(height) {
	// And don't forget to put the nougats in too!
	return "";
}
```

[Solution](./js/script.js)
