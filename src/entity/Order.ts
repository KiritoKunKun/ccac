import Cpf from "./Cpf";
import Discount from "./Discount";
import Item from "./Item";

export default class Order {
  total: number;

  constructor(
    readonly cpf: Cpf,
    readonly items: Item[],
    readonly discount?: Discount
  ) {
    if (!cpf.isValid) {
      throw new Error("Cannot create an order with an invalid cpf!");
    }

    this.total = this.calculateTotal();
  }

  private calculateTotal() {
    let total = this.items.reduce(
      (acc, cur) => (acc += cur.price * cur.quantity),
      0
    );

    if (this.discount) {
      total *= 1 - this.discount.percentage;
    }

    return total;
  }
}
