import Cpf from "../../src/entity/Cpf";

test("O CPF deve ser válido com pontuação", function () {
  const cpf = new Cpf("835.179.250-04");
  expect(cpf.isValid).toBe(true);
});

test("O CPF deve ser válido sem pontuação", function () {
  const cpf = new Cpf("83517925004");
  expect(cpf.isValid).toBe(true);
});

test("O CPF deve ser inválido", function () {
  const cpf = new Cpf("111.444.777-05");
  expect(cpf.isValid).toBe(false);
});

test("O CPF deve ser inválido quando for vazio", function () {
  expect(() => {
    new Cpf("");
  }).toThrowError("Invalid Cpf!");
});

test("O CPF deve ser inválido quando tiver menos que 11 caracteres", function () {
  expect(() => {
    new Cpf("835179250");
  }).toThrowError("Invalid Cpf!");
});
