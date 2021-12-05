const carta = 'bici coche balón _playstation bici coche peluche'

function listGifts(letter) {
	// ¡Tú puedes!

	console.log("✉️ List gifts: ", letter);

	const giftsRemoveExtraSpaces = letter.trim();
	const giftsArray = giftsRemoveExtraSpaces.split(' ');
	console.log("✉️ Gifts array: ", giftsArray);

	const giftsFiltered = giftsArray.filter(item => !item.startsWith('_'));
	console.log("✉️ Gifts crossed out: ", giftsFiltered);

	const giftsCounted = {};
	giftsFiltered.forEach((x) => {
		giftsCounted[x] = (giftsCounted[x] || 0) + 1;
	});

	console.log("✉️ Count gifts: ", giftsCounted);

	return giftsCounted
}

const regalos = listGifts(carta)

console.log(regalos)