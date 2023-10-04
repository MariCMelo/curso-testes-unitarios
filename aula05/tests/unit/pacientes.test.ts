import { v4 as uuidv4 } from "uuid";
import { generateProtocolForPacient } from "../../src/protocols-generator";

jest.mock("uuid", () => {
  return {
    v4: () => {
      return "mocked-uuid";
    },
  };
});

describe("generateProtocolForPacient", () => {
  const result = generateProtocolForPacient("John", "Doe", true);

  it("should work", async () => {
    expect(result).toEqual({
      priority: true,
      date: expect.any(Date),
      pacient: "John Doe",
      protocol: "mocked-uuid",
    });
  });
});
