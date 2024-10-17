import { multiply } from "../src/file-1";

describe("Test file 1", () => {
  it("Should run function sucessfully", async () => {
    const response = await multiply(15, 1);

    expect(response).toBe(15);
  });
});
