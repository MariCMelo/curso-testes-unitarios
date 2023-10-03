import calculator from "calculator";

describe("calculator tests", () => {
  it("should work", async () => {
    const sum = calculator.sum(10, 2);
    const sub = calculator.sub(10, 2);
    const div = calculator.div(10, 2);
    const mul = calculator.mul(10, 2);
    
  
    expect(sum).toBe(12);
    expect(sub).toBe(8);
    expect(div).toBe(5);
    expect(mul).toBe(20);
  });
});
