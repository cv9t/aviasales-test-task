export default function getDuration(durationInMit: number): string {
	const hours = Math.floor(durationInMit / 60);
	const minutes = durationInMit - hours * 60;
	const str = `${hours}ч ${minutes}м`;

	return str;
}
