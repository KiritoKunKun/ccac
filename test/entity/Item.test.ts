import Item from '../../src/entity/Item';

test('Não deve criar um item com alguma dimensão negativa ou igual a zero', () => {
	expect(() => new Item('1', 'Camiseta', 100, -1, 10, 10, 1)).toThrow(new Error('Invalid item dimensions.'));
	expect(() => new Item('1', 'Camiseta', 100, 10, -1, 10, 1)).toThrow(new Error('Invalid item dimensions.'));
	expect(() => new Item('1', 'Camiseta', 100, 10, 10, -1, 1)).toThrow(new Error('Invalid item dimensions.'));
	expect(() => new Item('1', 'Camiseta', 100, 0, 10, 10, 1)).toThrow(new Error('Invalid item dimensions.'));
	expect(() => new Item('1', 'Camiseta', 100, 10, 0, 10, 1)).toThrow(new Error('Invalid item dimensions.'));
	expect(() => new Item('1', 'Camiseta', 100, 10, 10, 0, 1)).toThrow(new Error('Invalid item dimensions.'));
});

test('Não deve criar um item com o peso negativo ou igual a zero', () => {
	expect(() => new Item('1', 'Camiseta', 100, 10, 10, 10, -1)).toThrow(new Error('Invalid item weight.'));
	expect(() => new Item('1', 'Camiseta', 100, 10, 10, 10, 0)).toThrow(new Error('Invalid item weight.'));
});
