const dateList = [
	new Date('Dec 1, 2021'),
	new Date('Dec 24, 2021 00:00:01'),
	new Date('Dec 24, 2021 23:59:59'),
	new Date("December 20, 2021 03:24:00"),
	new Date('Dec 25, 2021'),
	new Date('Dec 26, 2021'),
	new Date('Dec 31, 2021'),
	new Date('Jan 1, 2022 00:00:01'),
	new Date('Jan 1, 2022 23:59:59')
];

let date = dateList[Math.floor(Math.random() * dateList.length)];

function daysToXmas(date) {
	// ¡Y no olvides compartir tu solución en redes!

	const chrismasDate = new Date('Dec 25, 2021');
	console.log("📆", [chrismasDate]);

	const checkDate = date;
	console.log("🗓️", [checkDate]);

	return 0
}

daysToXmas(date);