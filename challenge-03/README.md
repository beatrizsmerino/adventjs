# Challenge 03

## Description

The Grinch is opening the letters that were going to Santa and leaving them in a mess. 😱

The letters are a string of text including gifts and parentheses `()`.

To know if a letter is valid ✅, you must check that the parentheses close correctly and also that they are not empty.

But watch out! Because the Grinch has left braces `{` and square brackets `[` inside the parentheses that **make them invalid**. Luckily he has only left them in the middle of the parentheses....

Examples:

```javascript
"bici coche (balón) bici coche peluche"; // -> ✅
"(muñeca) consola bici"; // ✅

"bici coche (balón bici coche"; // -> ❌
"peluche (bici [coche) bici coche balón"; // -> ❌
"(peluche {) bici"; // -> ❌
"() bici"; // ❌
```

Create a function that, by passing it the text of the letter, returns `true` if it is valid and `false` if it is not. And put an end to the Grinch's mischief!

## Complete the challenge

```javascript
export default function isValid(letter) {
	// ¡No dejes que el Grinch gane!
	return true;
}
```

[Solution](./js/script.js)