import Coupon from './Coupon';
import Cpf from './Cpf';
import Item from './Item';
import OrderItem from './OrderItem';

export default class Order {
	items: Item[];
	orderItems: OrderItem[];
	coupon?: Coupon;

	constructor(readonly cpf: Cpf) {
		this.items = [];
		this.orderItems = [];
	}

	addItem(item: Item, quantity: number) {
		if (!this.isItemQuantityValid(quantity)) throw new Error('Invalid item quantity.');
		if (this.itemAlreadyAdded(item)) throw new Error('Cannot add the same item twice.');
		this.items.push(item);
		this.orderItems.push(new OrderItem(item.id, item.price, quantity));
	}

	private isItemQuantityValid(quantity: number) {
		return quantity > 0;
	}

	private itemAlreadyAdded(item: Item) {
		return this.orderItems.some((orderItem) => orderItem.itemId === item.id);
	}

	addCupom(coupon: Coupon) {
		if (this.isCouponExpired(coupon)) throw new Error('Expired coupon.');
		this.coupon = coupon;
	}

	private isCouponExpired(coupon: Coupon) {
		return coupon.expiresAt.getTime() < new Date().getTime();
	}

	getTotal() {
		let total = this.orderItems.reduce((total, orderItem) => (total += orderItem.getTotal()), 0);
		if (this.coupon) {
			total -= this.coupon.calculateDiscount(total);
		}
		return total;
	}
}
