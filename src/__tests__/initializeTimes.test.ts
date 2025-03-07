import "@testing-library/jest-dom";
import { initializeTimes } from "../Components/initializeTimes";

it("generate initial times combination", () => {
  const result = initializeTimes();

  expect(result).toStrictEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});
