import Coupon from '../../src/entity/Coupon';

test('Deve criar um cupom de desconto válido', function () {
	const coupon = new Coupon('Cupom', 25, new Date());
	expect(coupon.code).toBe('Cupom');
	expect(coupon.percentage).toBe(25);
});

test('Não deve criar um cupom de desconto', function () {
	expect(() => {
		new Coupon('Cupom', 0, new Date());
	}).toThrowError('Invalid discount percentage.');
	expect(() => {
		new Coupon('Cupom', 101, new Date());
	}).toThrowError('Invalid discount percentage.');
});
