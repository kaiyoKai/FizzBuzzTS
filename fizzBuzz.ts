import configData from "./fizzBuzzConfig.json";

export type FizzBuzzConfig = {
  [key: string]: number;
};
//
// Fizz: 3,
//Buzz: 5,
//Bazz: 7,
export let fizzBuzzMap: FizzBuzzConfig = configData as FizzBuzzConfig;

export const fizzBuzzer = (n: number, map: FizzBuzzConfig): string | number => {
  let result = "";
  for (const [key, divider] of Object.entries(map)) {
    if (n % divider === 0) {
      result += key;
    }
  }
  return result || n;
};

export const createRange = (start: number, end: number) => {
  if (start >= end) {
    throw new Error("Fehler: Start- und Endwerte müssen gültige Zahlen sein.");
  }
  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
};

export const testFizzBuzz = (nums: number[]): string => {
  return nums.map((n) => fizzBuzzer(n, fizzBuzzMap)).join(".\n");
};
