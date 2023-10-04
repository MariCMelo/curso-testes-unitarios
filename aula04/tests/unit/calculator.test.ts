import calculator from "../../src/calculator";

// describe("calculator tests", () => {
//   it("should sum two numbers", async () => {
//     const sum = calculator.sum(10, 2);
//     const sub = calculator.sub(10, 2);
//     const div = calculator.div(10, 2);
//     const mul = calculator.mul(10, 2);
    
  
//     expect(sum).toBe(12);
//     expect(sub).toBe(8);
//     expect(div).toBe(5);
//     expect(mul).toBe(20);
//   });
// });

describe("calculator tests", () => {
  it("should sum two numbers", async () => {
    const result = calculator.sum(2, 3)
    expect(result).toBe(5);
  });
  it("should subtract two numbers", async () => {
    const result = calculator.sub(2, 2)
    expect(result).toBe(0);
  });
  it("should multiply two numbers", async () => {
    const result = calculator.mul(2, 3)
    expect(result).toBe(6);
  });
  it("should divide two numbers", async () => {
    const result = calculator.div(10, 5)
    expect(result).toBe(2);
  });
  it("should return 0 when diving by zero", async () => {
    const result = calculator.div(10, 0)
    expect(result).toBe(0);
  });
})