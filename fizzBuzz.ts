import configData from "./fizzBuzzConfig.json";

export type FizzBuzzConfig = {
  [key: string]: number;
};
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
