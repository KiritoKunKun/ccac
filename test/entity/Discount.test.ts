import Discount from "../../src/entity/Discount";

test("Deve criar um cupom de desconto válido", function () {
  const discount = new Discount("Cupom", 0.25);
  expect(discount.code).toBe("Cupom");
  expect(discount.percentage).toBe(0.25);
});

test("Não deve criar um cupom de desconto", function () {
  expect(() => {
    new Discount("Cupom", 0);
  }).toThrowError("Invalid discount percentage!");
  expect(() => {
    new Discount("Cupom", 1.01);
  }).toThrowError("Invalid discount percentage!");
});
