import { faker } from "@faker-js/faker";
import { generateProtocolForPacient } from "../../src/protocols-generator";


jest.mock("uuid", () => {
  return {
    v4: () => {
      return "mocked-uuid";
    },
  };
});

// describe("generateProtocolForPacient", () => {
//   const result = generateProtocolForPacient("John", "Doe", true);

//   it("should work", async () => {
//     expect(result).toEqual({
//       priority: true,
//       date: expect.any(Date),
//       pacient: "John Doe",
//       protocol: "mocked-uuid",
//     });
//   });
// });

describe("Protocol Generator Tests", () => {
  it("should create an protocol", async () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    const protocol = generateProtocolForPacient(firstName, lastName, true);
    expect(protocol).toEqual({
      priority: true,
      date: expect.any(Date),
      pacient: `${firstName} ${lastName}`,
      protocol: "mock protocol"
    });
  });
});