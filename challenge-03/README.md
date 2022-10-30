# Challenge 03

The Grinch is on the loose and wants to screw up Christmas! 😱 Let's fix the mess he's made in Santa's gift factory.

## Description

The Grinch is opening the letters that were going to Santa and leaving them in a mess. 😱

The letters are a string of text including gifts and parentheses `()`.

To know if a letter is valid ✅, you must check that the parentheses close correctly and also that they are not empty.

But watch out! Because the Grinch has left braces `{` and square brackets `[` inside the parentheses that **make them invalid**. Luckily he has only left them in the middle of the parentheses....

Examples:

```javascript
"bike car (ball) bike car toy"; // -> ✅
"(doll) console bike"; // ✅

"bike car (ball bike car"; // -> ❌
"toy (bike [car) bike car ball"; // -> ❌
"(toy {) bike"; // -> ❌
"() bike"; // ❌
```

Create a function that, by passing it the text of the letter, returns `true` if it is valid and `false` if it is not. And put an end to the Grinch's mischief!

## Complete the challenge

```javascript
export default function isValid(letter) {
	// Don't let the Grinch win!
	return true;
}
```

[Solution](./js/script.js)
