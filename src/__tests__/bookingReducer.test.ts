import "@testing-library/jest-dom";
import { bookingReducer } from "../Components/Booking/bookingReducer";

it("updates the booked times", () => {
  const result = bookingReducer(
    { reservations: [], reservedTimes: {} },
    {
      type: "updateTimes",
      payload: ["2025-01-01", "18:00"],
    }
  );

  expect(result).toStrictEqual({
    reservations: [],
    reservedTimes: { "2025-01-01": ["18:00"] },
  });
});

it("should add a reservation", () => {
  const result = bookingReducer(
    { reservations: [], reservedTimes: {} },
    {
      type: "addReservation",
      payload: {
        date: "2025-01-01",
        guests: 1,
        occasion: "Anniversary",
        time: "18:00",
      },
    }
  );

  expect(result).toStrictEqual({
    reservations: [
      { date: "2025-01-01", guests: 1, occasion: "Anniversary", time: "18:00" },
    ],
    reservedTimes: {},
  });
});
