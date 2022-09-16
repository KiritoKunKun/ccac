import Item from "../../src/entity/Item";

test("Deve criar um item", function () {
  const item = new Item("Camiseta", 10, 2);
  expect(item.description).toBe("Camiseta");
  expect(item.price).toBe(10);
  expect(item.quantity).toBe(2);
});

test("Não deve criar um item com quantidade inválida", function () {
  expect(() => {
    new Item("Camiseta", 10, 0);
  }).toThrowError("Invalid item quantity!");
});
