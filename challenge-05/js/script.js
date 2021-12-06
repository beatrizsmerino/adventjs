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

const date = dateList[Math.floor(Math.random() * dateList.length)];

function daysToXmas(date) {
	// And don't forget to share your solution on social media!

	const chrismasDate = new Date('Dec 25, 2021');
	const currentDate = date;


	const dateFinishObj = {
		year: chrismasDate.getFullYear(),
		month: chrismasDate.getMonth(),
		day: chrismasDate.getDate(),
		hours: chrismasDate.getHours(),
		minutes: chrismasDate.getMinutes(),
		seconds: chrismasDate.getSeconds()
	};
	const dateStartObj = {
		year: currentDate.getFullYear(),
		month: currentDate.getMonth(),
		day: currentDate.getDate(),
		hours: currentDate.getHours(),
		minutes: currentDate.getMinutes(),
		seconds: currentDate.getSeconds()
	};
	console.log("📆 Christmas date obj: ", dateFinishObj);
	console.log("📆 Current date obj: ", dateStartObj);


	const dateFinish = new Date(dateFinishObj.year, dateFinishObj.month, dateFinishObj.day, dateFinishObj.hours, dateFinishObj.minutes, dateFinishObj.seconds);
	const dateStart = new Date(dateStartObj.year, dateStartObj.month, dateStartObj.day, dateStartObj.hours, dateStartObj.minutes, dateStartObj.seconds);

	const milisecondsDay = 1000 * 3600 * 24;
	const milisecondsPassed = dateFinish.getTime() - dateStart.getTime();
	const diffDays = Math.ceil(milisecondsPassed / milisecondsDay);


	console.log(`${diffDays} days to go Christmas!`);

	return diffDays;
}

daysToXmas(date);