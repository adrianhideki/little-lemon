import { useForm } from "react-hook-form";
import { BookingFormValues } from "../types";
import { ChangeEvent, useState } from "react";

type BookingFormProps = {
  onSubmit: (data: BookingFormValues) => void;
  getAvailableTimes: (date: string) => string[];
};

const BookingForm = ({
  onSubmit: handleSubmitForm,
  getAvailableTimes,
}: BookingFormProps) => {
  const { register, handleSubmit, setValue, reset } =
    useForm<BookingFormValues>({
      defaultValues: { date: "", guests: 1, ocasion: "", time: "" },
    });
  const [times, setTimes] = useState<string[]>([]);

  const onSubmit = (data: BookingFormValues) => {
    handleSubmitForm(data);
    setTimes([]);
    reset();
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue("date", e.target.value);
    setTimes([]);
  };

  const handleDateBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setValue("date", e.target.value);

    const availableTimes = getAvailableTimes(e.target.value);

    setTimes(availableTimes);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Book Now</h2>
        <label htmlFor="res-date">Choose the date</label>
        <input
          aria-label="Choose the date"
          required
          type="date"
          id="res-date"
          {...register("date")}
          onChange={handleDateChange}
          onBlur={handleDateBlur}
        />
        <label htmlFor="time">Choose the time</label>
        <select
          aria-label="Choose the time"
          required
          id="time"
          {...register("time")}
        >
          {times.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          aria-label="Number of guests"
          required
          type="number"
          min="1"
          max="10"
          id="guests"
          {...register("guests")}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          aria-label="Choose the Occasion"
          required
          id="occasion"
          {...register("ocasion")}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
        <input
          name="Make Your reservation"
          aria-label="Make Your reservation"
          type="submit"
          value="Make Your reservation"
        />
      </form>
    </div>
  );
};

export default BookingForm;
