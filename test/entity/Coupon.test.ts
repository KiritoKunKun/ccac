import Coupon from '../../src/entity/Coupon';

test('Deve criar um cupom de desconto válido', function () {
	const discount = new Coupon('Cupom', 25);
	expect(discount.code).toBe('Cupom');
	expect(discount.percentage).toBe(25);
});

test('Não deve criar um cupom de desconto', function () {
	expect(() => {
		new Coupon('Cupom', 0);
	}).toThrowError('Invalid discount percentage!');
	expect(() => {
		new Coupon('Cupom', 101);
	}).toThrowError('Invalid discount percentage!');
});
