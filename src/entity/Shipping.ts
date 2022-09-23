import Item from './Item';
import Order from './Order';

export default class Shipping {
	readonly MINIMUM_SHIPPING_AMOUNT = 10;

	total: number;

	constructor(readonly order: Order, readonly distance: number) {
		this.total = this.calculateShipping();
	}

	calculateShipping() {
		const total = this.order.items.reduce((total, item) => {
			const orderItem = this.order.orderItems.find((orderItem) => orderItem.itemId === item.id);
			if (!orderItem) throw new Error('Cannot find order item.');
			return (total += this.calculateItemShipping(item, orderItem.quantity));
		}, 0);

		return total < this.MINIMUM_SHIPPING_AMOUNT ? this.MINIMUM_SHIPPING_AMOUNT : total;
	}

	private calculateItemShipping(item: Item, quantity: number) {
		const volume = (item.length / 100) * (item.width / 100) * (item.height / 100);
		const density = item.weight / volume;
		const shippingAmount = this.distance * volume * (density / 100);
		const total = shippingAmount * quantity;
		return total;
	}
}
