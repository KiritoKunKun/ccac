import Coupon from './Coupon';
import Cpf from './Cpf';
import Item from './Item';
import OrderItem from './OrderItem';

export default class Order {
	orderItems: OrderItem[];
	coupon?: Coupon;

	constructor(readonly cpf: Cpf) {
		this.orderItems = [];
	}

	addItem(item: Item, quantity: number) {
		this.orderItems.push(new OrderItem(item.id, item.price, quantity));
	}

	addCupom(coupon: Coupon) {
		this.coupon = coupon;
	}

	getTotal() {
		let total = this.orderItems.reduce((total, orderItem) => (total += orderItem.getTotal()), 0);

		if (this.coupon) {
			total -= this.coupon.calculateDiscount(total);
		}

		return total;
	}
}
