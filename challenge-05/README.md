# [Challenge 05:](https://adventjs.dev/challenges/05)<br>[Counting down the days to presents](https://adventjs.dev/challenges/05)

![Challenge 05](../README/images/challenge-05.png)

I can't wait to open the presents 🎁! I'm so nervous that I can't stop counting the days to go 🤣 Can you help me by creating a schedule? Come on!

## Description

With the emotion, we are already starting to **count the days of the calendar until December 25 📆**.

To help with this, let's create a function that by passing it an instance of `Date` will tell us the number of days remaining.

Let's see some examples:

```javascript
const date1 = new Date("Dec 1, 2021");
daysToXmas(date1); // 24
const date2 = new Date("Dec 24, 2021 00:00:01");
daysToXmas(date2); // 1
const date3 = new Date("Dec 24, 2021 23:59:59");
daysToXmas(date3); // 1
const date4 = new Date("December 20, 2021 03:24:00");
daysToXmas(date4); // 5
```

The result has to be **a integer** and, as you can see, even if there is one second left until the next day, it is understood that there is still one day left.

**But be careful!** We must also indicate if the date is the same day (we would return `0`) or if it is a future date (we would return the number of days in negative `-`):

```javascript
const date = new Date("Dec 25, 2021");
daysToXmas(date); // 0
const date1 = new Date("Dec 26, 2021");
daysToXmas(date1); // -1
const date2 = new Date("Dec 31, 2021");
daysToXmas(date2); // -6
const date3 = new Date("Jan 1, 2022 00:00:01");
daysToXmas(date3); // -7
const date4 = new Date("Jan 1, 2022 23:59:59");
daysToXmas(date4); // -7
```

By the way, the reference date to know if it is `Dec 25, 2021`.

## Complete the challenge

```javascript
export default function daysToXmas(date) {
	// And don't forget to share your solution on social media!
	return 0;
}
```

[Solution](./js/script.js)
