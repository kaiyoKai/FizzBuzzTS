import { fizzBuzzer, fizzBuzzMap } from "./fizzBuzz.js";
import assert from "node:assert/strict";
import { it, describe } from "node:test";

describe("FizzBuzz-Logik", () => {
  describe("Einfache Fälle", () => {
    it("sollte die Zahl selbst zurückgeben, wenn keine Regel greift", () => {
      const input = 1;
      const expected = 1;
      const result = fizzBuzzer(input, fizzBuzzMap);
      assert.strictEqual(result, expected);
    });
  });

  describe("Modulo-Regeln", () => {
    it('sollte "Fizz" bei einem Vielfachen von 3 zurückgeben', () => {
      const input = 3;
      const result = fizzBuzzer(input, fizzBuzzMap);
      assert.strictEqual(result, "Fizz");
    });

    it('sollte "Buzz" bei einem Vielfachen von 5 zurückgeben', () => {
      const input = 10;
      const result = fizzBuzzer(input, fizzBuzzMap);
      assert.strictEqual(result, "Buzz");
    });
  });
});
