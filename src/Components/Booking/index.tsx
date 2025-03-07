import "./styles.css";

import { useReducer } from "react";

import Header from "../Home/Header";
import Nav from "../Home/Nav";
import Footer from "../Home/Footer";
import BookingForm from "./BookingForm";
import { BookingFormValues } from "./types";
import { bookingReducer } from "./bookingReducer";
import { initializeTimes } from "../initializeTimes";

const times = initializeTimes();

const Booking = () => {
  const [state, dispatch] = useReducer(bookingReducer, {
    reservedTimes: {},
    reservations: [],
  });

  const getAvaliableTimes = (date: string) => {
    const reservations = state.reservedTimes[date] ?? [];

    const result = times.filter(
      (item) => !(reservations.lastIndexOf(item) >= 0)
    );

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
