export default class Item {
	constructor(
		readonly id: string,
		readonly description: string,
		readonly price: number,
		readonly length: number,
		readonly width: number,
		readonly height: number,
		readonly weight: number
	) {
		if (!this.areDimensionsValid()) throw new Error('Invalid item dimensions.');
		if (!this.isWeightValid()) throw new Error('Invalid item weight.');
	}

	private areDimensionsValid() {
		return this.length > 0 && this.width > 0 && this.height > 0;
	}

	private isWeightValid() {
		return this.weight > 0;
	}
}
