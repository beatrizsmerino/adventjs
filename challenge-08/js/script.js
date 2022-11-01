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

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
maxProfit(pricesBtc);

const pricesEth = [10, 20, 30, 40, 50, 60, 70];
maxProfit(pricesEth);

const pricesDoge = [18, 15, 12, 11, 9, 7];
maxProfit(pricesDoge);

const pricesAda = [3, 3, 3, 3, 3];
maxProfit(pricesAda);
