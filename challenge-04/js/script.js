function createXmasTree(height) {
	// ¡Y no olvides también poner los turrones!
	console.log("🎄 Height tree:", height);
	return "";
}

function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

createXmasTree(randomIntFromInterval(1, 100));