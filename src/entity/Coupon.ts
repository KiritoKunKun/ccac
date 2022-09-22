export default class Coupon {
	constructor(readonly code: string, readonly percentage: number, readonly expiresAt: Date) {
		if (!this.isPercentageValid()) throw new Error('Invalid discount percentage!');
	}

	private isPercentageValid() {
		return this.percentage > 0 && this.percentage <= 100;
	}

	calculateDiscount(total: number) {
		return (total * this.percentage) / 100;
	}
}
