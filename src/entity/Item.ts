export default class Item {
	constructor(
		readonly id: string,
		readonly description: string,
		readonly price: number,
		readonly length: number,
		readonly width: number,
		readonly height: number
	) {
		if (!this.areDimensionsValid()) throw new Error('Invalid item dimensions.');
	}

	private areDimensionsValid() {
		return this.length > 0 && this.width > 0 && this.height > 0;
	}
}
