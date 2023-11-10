export function getSeoulTimeformDate(utcDate: string) {
	const seoulTimeZone = 'Asia/Seoul';
	const seoulDate = new Intl.DateTimeFormat('en-US', { timeZone: seoulTimeZone }).format(utcDate);
	return seoulDate;
}


export function getTime(dateString: string) {
	const dateObject = new Date(dateString);
	const hours = dateObject.getHours();
	const minutes = dateObject.getMinutes();
	const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
	return formattedTime;
}
