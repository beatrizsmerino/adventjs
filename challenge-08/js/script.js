function maxProfit(prices) {
	// And don't forget to share your solution on networks!

	console.log("🪙 Prices: ", prices);

	const priceMin = prices.sort((a, b) => a - b)[0];
	console.log("The min price:", priceMin);

	const priceMax = prices.sort((a, b) => b - a)[0];
	console.log("The max price: ", priceMax);

	const benefits = priceMax - priceMin;
	console.log(`${benefits} -> (buy at ${priceMin}, sell at ${priceMax})`);

	if (benefits > 0) {
		console.log("profit possible");
		return benefits;
	} else {
		console.log("no profit possible");
		return -1;
	}
}

// Analysis: The lowest price is 18, and the highest price after that point is 34.
// Result: Maximum profit is 34 - 18 = 16.
const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
maxProfit(pricesBtc);

// Analysis: The lowest price is the first in the list (10) and the highest is the last (70).
// Result: Maximum profit is 70 - 10 = 60.
const pricesEth = [10, 20, 30, 40, 50, 60, 70];
maxProfit(pricesEth);

// Analysis: Prices only go down, so there is no opportunity to buy low and sell high.
// Result: -1 (no profit possible).
const pricesDoge = [18, 15, 12, 11, 9, 7];
maxProfit(pricesDoge);

// Analysis: There is no opportunity to buy at a lower price and sell at a higher price, since all prices are equal.
// Result: -1 (no profit possible).
const pricesAda = [3, 3, 3, 3, 3];
maxProfit(pricesAda);
