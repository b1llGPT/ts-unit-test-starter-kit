import { describe, it, expect, beforeEach } from "vitest";
import {
  addProduct,
  addToCart,
  calculateTotal,
  clearCart,
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
});
