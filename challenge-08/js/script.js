function maxProfit(prices) {
	// Initially, the lowest price to buy is the first price in the array
	let priceMinToBuy = prices[0];
	// This will keep track of the buying price for the maximum profit
	let priceToBuyForMaxProfit = prices[0];
	// Initially, no selling price has been determined
	let priceMaxToSell = 0;
	// Initially, no profit has been found
	let maxProfit = -1;

	// Prepare an array to hold the log data for the table
	let logData = [];

	for (let i = 1; i < prices.length; i++) {
		let foundNewMin = false;
		let foundNewMax = false;

		// If the current price is lower than the lowest price found so far
		if (prices[i] < priceMinToBuy) {
			// Update the lowest price to buy
			priceMinToBuy = prices[i];
			foundNewMin = true;
		}

		// Calculate potential profit
		let potentialProfit = prices[i] - priceMinToBuy;

		// If the potential profit is greater than the highest profit found so far
		if (potentialProfit > maxProfit) {
			// Update the highest profit
			maxProfit = potentialProfit;
			// Update the highest price to sell
			priceMaxToSell = prices[i];
			foundNewMax = true;
			// Update the price to buy for the maximum profit
			priceToBuyForMaxProfit = priceMinToBuy;
		}

		logData.push({
			"Index": i,
			"Price": prices[i],
			"MinPriceToBuy": priceMinToBuy,
			"FoundNewMin": foundNewMin ? '🔽' : '',
			"priceMaxToSell": priceMaxToSell,
			"FoundNewMax": foundNewMax ? '🔼' : '',
			"PotentialProfit": potentialProfit,
		});
	}

	// Display the table with all the logged actions
	console.log("🔍 Price Comparisons and Profit Calculations:");
	console.table(logData);

	// Display the results
	testMessage(prices, priceToBuyForMaxProfit, priceMaxToSell, maxProfit);

	// If a profit has been found
	if (maxProfit > 0) {
		return maxProfit;
	} else {
		return -1;
	}
}

function testMessage(prices, priceToBuy, priceMaxToSell, maxProfit) {
	console.log("📊 Prices: ", prices);
	console.log("📉 The min price to buy for max profit:", priceToBuy);
	console.log("📈 The max price to sell: ", priceMaxToSell);
	console.log(`💰💰${(maxProfit > 0) ? "✅ Profit possible" : "❌ No profit possible"}:`, maxProfit);
	console.log(`Operation: (${priceMaxToSell} - ${priceToBuy} = ${maxProfit})`);
	console.log(`Resume: If you buy at ${priceToBuy} and sell at ${priceMaxToSell} you get ${maxProfit} profit.`);
	console.log("");
	console.log("");
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
