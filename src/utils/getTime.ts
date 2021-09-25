export function getMinutesAndHours(date: Date): string[] {
	const hours: number = date.getHours();
	let strForHours: string = String(hours);
	if (hours < 10) strForHours = "0" + strForHours;

	const minutes: number = date.getMinutes();
	let strForMinutes: string = String(minutes);
	if (minutes < 10) strForMinutes = "0" + strForMinutes;

	return [strForHours, strForMinutes];
}

export function getTime(start: string, durationInMin: number): string {
	const date: Date = new Date(start);
	const newDate: Date = new Date(
		new Date(date).setMinutes(date.getMinutes() + durationInMin),
	);

	const startStr: string = "startH:startM - endH:endM"
		.replace("startH", getMinutesAndHours(date)[0])
		.replace("startM", getMinutesAndHours(date)[1])
		.replace("endH", getMinutesAndHours(newDate)[0])
		.replace("endM", getMinutesAndHours(newDate)[1]);

	return startStr;
}
