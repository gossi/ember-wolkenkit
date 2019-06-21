export function seed(target: object, data: object) {
	for (const [key, value] of Object.entries(data)) {
		if (typeof (value) === 'object' && typeof (target[key]) === 'object') {
			seed(target[key], value);
		} else {
			target[key] = value;
		}
	}
}
