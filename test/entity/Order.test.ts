import Cpf from "../../src/entity/Cpf";
import Discount from "../../src/entity/Discount";
import Item from "../../src/entity/Item";
import Order from "../../src/entity/Order";

test("Não deve criar um pedido com cpf inválido", function () {
  const cpf = new Cpf("11144477705");
  const items = [new Item("Camiseta", 10, 2), new Item("Calça", 20, 1)];
  expect(() => {
    new Order(cpf, items);
  }).toThrowError("Cannot create an order with an invalid cpf!");
});

test("Deve criar um pedido com 3 itens", function () {
  const cpf = new Cpf("83517925004");
  const items = [
    new Item("Camiseta", 10, 2),
    new Item("Calça", 20, 1),
    new Item("Meia", 5, 4),
  ];
  const order = new Order(cpf, items);
  expect(order.total).toBe(60);
  expect(order.cpf.isValid).toBe(true);
  expect(order.items).toBe(items);
});

test("Deve criar um pedido com cupom de desconto", function () {
  const cpf = new Cpf("83517925004");
  const items = [new Item("Camiseta", 10, 2), new Item("Calça", 20, 1)];
  const discount = new Discount("Cupom", 0.25);
  const order = new Order(cpf, items, discount);
  expect(order.total).toBe(30);
  expect(order.discount).toBe(discount);
});
