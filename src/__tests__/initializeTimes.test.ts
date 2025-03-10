import "@testing-library/jest-dom";
import { initializeTimes } from "../Components/initializeTimes";

it("generate initial times combination", () => {
  global.fetchAPI = jest.fn(() => [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const result = initializeTimes("2025-01-01");

  expect(result).toStrictEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});
