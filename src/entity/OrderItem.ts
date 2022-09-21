export default class OrderItem {
	constructor(readonly itemId: string, readonly price: number, readonly quantity: number) {}

	getTotal() {
		return this.price * this.quantity;
	}
}
