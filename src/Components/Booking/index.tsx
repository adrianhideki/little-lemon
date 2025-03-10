import "./styles.css";

import { useEffect, useReducer } from "react";

import Header from "../Home/Header";
import Nav from "../Home/Nav";
import Footer from "../Home/Footer";
import BookingForm from "./BookingForm";
import { BookingFormValues } from "./types";
import { bookingReducer } from "./bookingReducer";
import { initializeTimes } from "../initializeTimes";
import { useNavigate } from "react-router";

const initialValue = '{"reservedTimes": {}, "reservations": [] }';

const Booking = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(
    bookingReducer,
    JSON.parse(localStorage.getItem("bookings") ?? initialValue)
  );

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(state));
  }, [state]);

  const getAvaliableTimes = (date: string) => {
    const reservations = state.reservedTimes[date] ?? [];
    const times = initializeTimes(date);

    const result = times.filter(
      (item) => !(reservations.lastIndexOf(item) >= 0)
    );

    return result;
  };

  const handleAddReservation = (data: BookingFormValues) => {
    dispatch({ type: "addReservation", payload: data });
    dispatch({ type: "updateTimes", payload: [data.date, data.time] });

    const result = submitAPI(data);

    if (result) navigate("/booking-confirmation");
  };

  return (
    <>
      <Nav />
      <Header showButton={false} />
      <BookingForm
        onSubmit={handleAddReservation}
        getAvailableTimes={getAvaliableTimes}
      />
      <Footer />
    </>
  );
};

export default Booking;
