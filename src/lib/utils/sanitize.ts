export function sanitizeString(input: string): string {
	return input.trim().toLowerCase().replaceAll('-', ' ').toWellFormed();
}

export function capitalizeString(input: string): string {
	return input
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

export function removeDiacritics(input: string): string {
	return input
		.split('') // Splits string into characters
		.map((char) => diacriticsMap.get(char) ?? char)
		.join('');
}

export const diacriticsMap = new Map([
	['č', 'c'],
	['Č', 'C'],
	['ć', 'c'],
	['Ć', 'C'],
	['ǆ', 'dz'],
	['Ǆ', 'Dz'],
	['đ', 'dj'],
	['Đ', 'Dj'],
	['š', 's'],
	['Š', 'S'],
	['ž', 'z'],
	['Ž', 'Z']
]);
