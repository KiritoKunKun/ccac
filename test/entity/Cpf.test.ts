import Cpf from '../../src/entity/Cpf';

test('O CPF deve ser válido com pontuação', function () {
	const cpf = new Cpf('835.179.250-04');
	expect(cpf).toBeDefined();
});

test('O CPF deve ser válido sem pontuação', function () {
	const cpf = new Cpf('83517925004');
	expect(cpf).toBeDefined();
});

test('O CPF deve ser inválido', function () {
	expect(() => new Cpf('111.444.777-05')).toThrow(new Error('Invalid cpf!'));
});

test('O CPF deve ser inválido quando for vazio', function () {
	expect(() => {
		new Cpf('');
	}).toThrow(new Error('Invalid cpf!'));
});

test('O CPF deve ser inválido quando tiver mais de 11 caracteres', function () {
	expect(() => {
		new Cpf('835.179.250-040');
	}).toThrow(new Error('Invalid cpf!'));
});

test('O CPF deve ser inválido quando todos os digitos forem iguais', function () {
	expect(() => {
		new Cpf('111.111.111-11');
	}).toThrow(new Error('Invalid cpf!'));
});
