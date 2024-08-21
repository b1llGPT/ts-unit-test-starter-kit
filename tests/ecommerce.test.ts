import { describe, it, expect, beforeEach } from "vitest";
import {
  addProduct,
  addToCart,
  calculateTotal,
  clearCart,
  applyShippingDiscount,
} from "../src/ecommerce";

describe("E-commerce System", () => {
  beforeEach(() => {
    addProduct("Soap", 100, 10);
    addProduct("Shampoo", 200, 5);
    clearCart();
  });

  it("should calculate price of all products", () => {
    addToCart("Soap", 2);
    addToCart("Shampoo", 2);
    const sum = calculateTotal();
    expect(sum).toBe(600);
  });

  it("should add items to cart", () => {
    // arrange
    let cart = {};

    // act
    cart = addToCart("Soap", 2);

    // assert
    expect(cart["Soap"]).toBe(2);
  });

  it("Should apply shipping discount above threshold", () => {
    addToCart("Soap", 2);
    addToCart("Shampoo", 2);
    var sum = calculateTotal();
    sum = applyShippingDiscount(sum)
    expect(sum).toBe(590);
  });

  it("Should not apply shipping discount below threshold", () => {
    addToCart("Soap", 1);
    addToCart("Shampoo", 1);
    var sum = calculateTotal();
    sum = applyShippingDiscount(sum)
    expect(sum).toBe(300);
  });
});
