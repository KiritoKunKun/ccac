import Cpf from '../../src/entity/Cpf';
import Item from '../../src/entity/Item';
import Order from '../../src/entity/Order';
import Shipping from '../../src/entity/Shipping';

test('Deve calcular o frete de um pedido', () => {
	const cpf = new Cpf('835.179.250-04');
	const order = new Order(cpf);
	order.addItem(new Item('1', 'Camiseta', 100, 200, 100, 50, 3), 1); // R$ 30,00 * 1
	order.addItem(new Item('2', 'Calça', 50, 150, 100, 100, 3), 3); // R$ 30,00 * 3
	order.addItem(new Item('3', 'Meia', 20, 50, 50, 50, 1), 2); // R$ 10,00 * 2
	const distance = 1000;
	const shipping = new Shipping(order, distance);
	expect(shipping.total).toBe(140);
});
