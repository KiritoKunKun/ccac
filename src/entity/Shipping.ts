import Item from './Item';
import Order from './Order';

export default class Shipping {
	total: number;

	constructor(readonly order: Order, readonly distance: number) {
		this.total = this.calculateShipping();
	}

	calculateShipping() {
		return this.order.items.reduce((total, item) => {
			const orderItem = this.order.orderItems.find((orderItem) => orderItem.itemId === item.id);
			if (!orderItem) throw new Error('Cannot find order item.');
			return (total += this.calculateItemShipping(item, orderItem.quantity));
		}, 0);
	}

	private calculateItemShipping(item: Item, quantity: number) {
		const volume = (item.length / 100) * (item.width / 100) * (item.height / 100);
		const density = item.weight / volume;
		const shippingAmount = this.distance * volume * (density / 100);
		const total = shippingAmount * quantity;
		return total;
	}
}
