import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import BookingForm from "../Components/Booking/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm getAvailableTimes={() => []} onSubmit={() => {}} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
