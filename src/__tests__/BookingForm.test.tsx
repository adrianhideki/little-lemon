import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BookingForm from "../Components/Booking/BookingForm";

it("renders the BookingForm heading", () => {
  render(<BookingForm getAvailableTimes={() => []} onSubmit={() => {}} />);

  const headingElement = screen.getByText("Book Now");

  expect(headingElement).toBeInTheDocument();
});

it("submits correctly", async () => {
  const submitMock = jest.fn();

  render(
    <BookingForm getAvailableTimes={() => ["18:00"]} onSubmit={submitMock} />
  );

  const dateInput = screen.getByLabelText("Choose the date");
  fireEvent.change(dateInput, { target: { value: "2025-03-07" } });

  const timeInput = screen.getByLabelText("Choose the time");
  fireEvent.change(timeInput, { target: { value: "18:00" } });

  const guestInput = screen.getByLabelText("Number of guests");
  fireEvent.change(guestInput, { target: { value: "1" } });

  const occasionInput = screen.getByLabelText("Occasion");
  fireEvent.change(occasionInput, { target: { value: "Anniversary" } });

  await waitFor(() => {
    const submit = screen.getByRole("button", {
      name: "Make Your reservation",
    });

    fireEvent.click(submit);
  });

  expect(submitMock).toHaveBeenCalled();
});
