export default class Discount {
  constructor(readonly code: string, readonly percentage: number) {
    if (!this.isPercentageValid()) {
      throw new Error("Invalid discount percentage!");
    }
  }

  private isPercentageValid() {
    return this.percentage > 0 && this.percentage <= 1;
  }
}
