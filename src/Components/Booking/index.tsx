import "./styles.css";

import { useReducer } from "react";

import Header from "../Home/Header";
import Nav from "../Home/Nav";
import Footer from "../Home/Footer";
import BookingForm from "./BookingForm";
import { BookingFormValues } from "./types";

interface Action {
  type: "updateTimes" | "addReservation";
  payload?: string[] | BookingFormValues;
}

type BookingValues = {
  reservedTimes: Record<string, string[]>;
  reservations: BookingFormValues[];
};

function bookingReducer(state: BookingValues, action: Action) {
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

const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const Booking = () => {
  const [state, dispatch] = useReducer(bookingReducer, {
    reservedTimes: {},
    reservations: [],
  });

  console.log(state);

  const getAvaliableTimes = (date: string) => {
    const reservations = state.reservedTimes[date] ?? [];

    const result = times.filter(
      (item) => !(reservations.lastIndexOf(item) >= 0)
    );

    console.log(result);

    return result;
  };

  const handleAddReservation = (data: BookingFormValues) => {
    dispatch({ type: "addReservation", payload: data });
    dispatch({ type: "updateTimes", payload: [data.date, data.time] });
  };

  return (
    <>
      <Nav />
      <Header showButton={false} />
      <BookingForm onSubmit={handleAddReservation} getAvailableTimes={getAvaliableTimes} />
      <Footer />
    </>
  );
};

export default Booking;
