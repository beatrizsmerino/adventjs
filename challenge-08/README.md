# [Challenge 08:](https://adventjs.dev/challenges/08)<br>[The cryptocurrency craze](https://adventjs.dev/challenges/08)

![Challenge 08](../README/images/challenge-08.png)

We have invested in cryptocurrencies... And the other day all the stocks went into the red. Instead of panicking, let's see if we can optimize new investments.

## Description

Investing in cryptocurrencies is almost a risky sport. The other day Bitmart was hacked and has caused the value of Bitcoin, and other currencies, to drop by 25%.

We are going to write a function that receives the price list of a cryptocurrency in a day and we should return the maximum profit we could make if we buy and sell the investment on the same day.

The price list is an array of numbers and represents time from left to right. So keep in mind that **you cannot buy at a price that is to the right of sell and you cannot sell at a price that is to the left of buy.**

For example:

```javascript
const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (buy at 18, sell at 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (buys at 10, sells at 70)
```

**If no profit can be made that day,** we have to return `-1` to prevent us from doing something crazy:

```javascript
const pricesDoge = [18, 15, 12, 12, 11, 9, 7]
maxProfit(pricesDoge) = // -> -1 (no profit possible)

const pricesAda = [3, 3, 3, 3, 3, 3, 3]
maxProfit(pricesAda) = // -> -1 (no profit possible)
```

## Complete the challenge

```javascript
export default function maxProfit(prices) {
	// And don't forget to share your solution on networks!
	return false
}
```
