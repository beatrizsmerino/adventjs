# [Challenge 02:](https://adventjs.dev/challenges/02)<br>[Help the elf to list the gifts](https://adventjs.dev/challenges/02)

What a mess 😵! An elf is helping Santa Claus. He thought it would come to him already ordered from each gift how many units he should get... and he got a letter ✉️ Help him out!

## Description

You have received a letter ✉️ with all the gifts you have to prepare. The thing is that it is a text string and it is very difficult to read 😱. Thank goodness they have put each gift separated by space! (although **be careful**, because being children, maybe they have put more spaces than necessary).

On top of that we noticed that some words come with a `_` in front of the word, for example `_playstation`, which means **it's crossed out and doesn't have to be counted**.

Transform the text to an object containing the name of each gift and the times it appears. For example, if we have the text:

```javascript
const letter = "bike car ball _playstation bike car toy";
```

When the method is executed it should return the following:

```javascript
const gifts = listGifts(letter);

console.log(gifts);
/*
{
  bike: 2,
  car: 2,
  ball: 1,
  toy: 1
}
*/
```

Please note that the tests may be more comprehensive... 😝 **Be careful with counting blanks!**

## Complete the challenge

```javascript
export default function listGifts(letter) {
	// You can do it!
	return {};
}
```

[Solution](./js/script.js)
