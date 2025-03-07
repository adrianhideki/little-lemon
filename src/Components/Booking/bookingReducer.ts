import { BookingAction, BookingFormValues, BookingValues } from "./types";

export function bookingReducer(state: BookingValues, action: BookingAction) {
  if (action.type === "updateTimes") {
    const payload = action.payload as string[];
    const reservedDate = payload[0];
    const reservedTime = payload[1];

    return {
      ...state,
      reservedTimes: {
        [reservedDate]: [
          ...(state.reservedTimes[reservedDate] ?? []),
          reservedTime,
        ],
      },
    };
  }

  if (action.type === "addReservation") {
    return {
      ...state,
      reservations: [
        ...state.reservations,
        action.payload,
      ] as BookingFormValues[],
    };
  }

  return state;
}
