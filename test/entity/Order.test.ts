import Coupon from '../../src/entity/Coupon';
import Cpf from '../../src/entity/Cpf';
import Item from '../../src/entity/Item';
import Order from '../../src/entity/Order';

test('Deve criar um pedido com 3 itens', function () {
	const cpf = new Cpf('835.179.250-04');
	const order = new Order(cpf);
	order.addItem(new Item('1', 'Camiseta', 100, 10, 10, 10, 1), 1);
	order.addItem(new Item('2', 'Calça', 50, 10, 10, 10, 1), 3);
	order.addItem(new Item('3', 'Meia', 20, 10, 10, 10, 1), 2);
	expect(order.getTotal()).toBe(290);
});

test('Deve criar um pedido com 3 itens com cupom de desconto', function () {
	const cpf = new Cpf('835.179.250-04');
	const order = new Order(cpf);
	order.addItem(new Item('1', 'Camiseta', 100, 10, 10, 10, 1), 1);
	order.addItem(new Item('2', 'Calça', 50, 10, 10, 10, 1), 3);
	order.addItem(new Item('3', 'Meia', 20, 10, 10, 10, 1), 2);
	const couponExpiresDate = new Date();
	couponExpiresDate.setDate(couponExpiresDate.getDate() + 7);
	order.addCupom(new Coupon('VALE20', 20, couponExpiresDate));
	expect(order.getTotal()).toBe(232);
});

test('Não deve aplicar um cupom de desconto expirado ao pedido', function () {
	const cpf = new Cpf('835.179.250-04');
	const order = new Order(cpf);
	order.addItem(new Item('1', 'Camiseta', 100, 10, 10, 10, 1), 1);
	order.addItem(new Item('2', 'Calça', 50, 10, 10, 10, 1), 3);
	order.addItem(new Item('3', 'Meia', 20, 10, 10, 10, 1), 2);
	const date = new Date();
	date.setDate(date.getDate() - 1);
	expect(() => order.addCupom(new Coupon('VALE20', 20, date))).toThrow(new Error('Expired coupon.'));
});

test('A quantidade de itens no pedido não pode ser menor ou igual a zero', function () {
	const cpf = new Cpf('835.179.250-04');
	const order = new Order(cpf);
	expect(() => order.addItem(new Item('1', 'Camiseta', 100, 10, 10, 10, 1), -1)).toThrow(
		new Error('Invalid item quantity.')
	);
	expect(() => order.addItem(new Item('1', 'Camiseta', 100, 10, 10, 10, 1), 0)).toThrow(
		new Error('Invalid item quantity.')
	);
});

test('Não pode adicionar o mesmo item duas vezes em um pedido', function () {
	const cpf = new Cpf('835.179.250-04');
	const order = new Order(cpf);
	order.addItem(new Item('1', 'Camiseta', 100, 10, 10, 10, 1), 1);
	expect(() => order.addItem(new Item('1', 'Camiseta', 100, 10, 10, 10, 1), 2)).toThrow(
		new Error('Cannot add the same item twice.')
	);
});
