import { sum } from "./file-2";

export const sumTwice = (a: number, b: number) => {
  return sum(a, b) + sum(a, b);
};
