export default function getNumCapEnd(
	endings: {
		one: string;
		two: string;
		few: string;
	},
	num: number,
): string {
	if (num % 10 === 1 && num % 100 !== 11) {
		return endings.one;
	} else if (
		num % 10 >= 2 &&
		num % 10 <= 4 &&
		(num % 100 < 10 || num % 100 >= 20)
	) {
		return endings.two;
	} else {
		return endings.few;
	}
}
