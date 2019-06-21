import { seed } from 'ember-wolkenkit/utils/seed';

export default class Model {
	[key: string]: any;

	id?: string;

	constructor(data: object = {}) {
		seed(this, data);
	}
}
