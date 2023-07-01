import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
     fahrenheitToCelsius,
     sign,
     roots,
     bmi,
     factorial,
     duplicate,
     dotProduct,
     pow,
     fib,
     enlist,
     positives,
     addList,
     invertPairs,
     listOfSymbols,
     swapper,
     average,
     standardDeviation,
     replic,
     expand,
     binary
} from "../problemario.mjs";

describe("Problemario", () => {
     it("Calculates Fahrenheit to Celsius", () => {
          const res = fahrenheitToCelsius(212.0);
          assert.strictEqual(res, 100.0);
     });
     it("Checks if a Number is positive, negative or cero", () => {
          const res = sign(-5);
          assert.strictEqual(res, -1);
     });
     it("Calculates Cuadratic Equation function", () => {
          const res = roots(4, 5, 1);
          assert.strictEqual(res, -0.25);
     });
     it("Calculates Corporal Mass Index", () => {
          const res = bmi(81, 1.6);
          assert.strictEqual(res, "obese2");
     });
     it("Returns the factorial of a positive number", () => {
          const res = factorial(5);
          assert.strictEqual(res, 120);
     });
     it("Calculates fibonacci sequence to a certain number", () => {
          const res = fib(42);
          assert.strictEqual(res, 267914296);
     });
})