import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Booking from "./Components/Booking";
import BookingConfirmation from "./Components/BookingConfirmation";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/booking-confirmation" element={<BookingConfirmation />} />
    </Routes>
  );
}

export default App;
