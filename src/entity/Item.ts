export default class Item {
  constructor(
    readonly description: string,
    readonly price: number,
    readonly quantity: number
  ) {
    if (!this.isQuantityValid()) {
      throw new Error("Invalid item quantity!");
    }
  }

  private isQuantityValid() {
    return this.quantity > 0;
  }
}
