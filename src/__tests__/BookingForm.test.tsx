import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BookingForm from "../Components/Booking/BookingForm";
import Booking from "../Components/Booking";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router", () => ({
  ...(jest.requireActual("react-router") as any),
  useNavigate: () => mockedUsedNavigate,
}));

export const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
  length: 0,
  key: jest.fn(),
  removeItem: jest.fn(),
};

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
  fireEvent.blur(dateInput, { target: { value: "2025-03-07" } });

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

it("validate input data from user", async () => {
  const submitMock = jest.fn();

  render(
    <BookingForm getAvailableTimes={() => ["18:00"]} onSubmit={submitMock} />
  );

  await waitFor(() => {
    const submit = screen.getByRole("button", {
      name: "Make Your reservation",
    });

    fireEvent.click(submit);
  });

  expect(submitMock).toHaveBeenCalledTimes(0);
  expect(screen.getByText("date is a required field")).toBeInTheDocument();
  expect(screen.getByText("time is a required field")).toBeInTheDocument();
  expect(screen.getByText("occasion is a required field")).toBeInTheDocument();
});

it("redirects when submit correctly", async () => {
  const spySetItem = jest.spyOn(Storage.prototype, 'setItem');

  render(<Booking />);

  global.fetchAPI = jest.fn(() => ["18:00"]);
  global.submitAPI = jest.fn(() => true);

  const dateInput = screen.getByLabelText("Choose the date");
  fireEvent.blur(dateInput, { target: { value: "2025-03-07" } });

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

  expect(mockedUsedNavigate).toHaveBeenCalledWith("/booking-confirmation");
  expect(spySetItem).toHaveBeenCalled();
});
