import { sum } from "../src/file-2";

describe("Test file 2", () => {
  it("Should run function sucessfully", () => {
    const response = sum(1, 1);

    expect(response).toBe(2);
  });
});
