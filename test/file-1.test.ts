import { sumTwice } from "../src/file-1";

describe("Test file 1", () => {
  it("Should run function sucessfully", () => {
    const response = sumTwice(1, 1);

    expect(response).toBe(4);
  });
});
