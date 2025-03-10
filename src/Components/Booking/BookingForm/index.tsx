import * as yup from "yup";
import { useForm } from "react-hook-form";
import { BookingFormValues } from "../types";
import { ChangeEvent, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

type BookingFormProps = {
  onSubmit: (data: BookingFormValues) => void;
  getAvailableTimes: (date: string) => string[];
};

const schema = yup
  .object({
    date: yup.string().required(),
    time: yup.string().required(),
    guests: yup.number().required().min(1).max(10),
    occasion: yup.string().required(),
  })
  .required();

const BookingForm = ({
  onSubmit: handleSubmitForm,
  getAvailableTimes,
}: BookingFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<BookingFormValues>({
    defaultValues: { date: "", guests: 1, occasion: "", time: "" },
    resolver: yupResolver(schema),
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
          type="date"
          id="res-date"
          {...register("date", { required: true })}
          onChange={handleDateChange}
          onBlur={handleDateBlur}
        />
        {!!errors.date && (
          <span className="form-error">{errors.date.message}</span>
        )}
        <label htmlFor="time">Choose the time</label>
        <select
          aria-label="Choose the time"
          id="time"
          {...register("time", { required: true })}
        >
          {times.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        {!!errors.time && (
          <span className="form-error">{errors.time.message}</span>
        )}
        <label htmlFor="guests">Number of guests</label>
        <input
          aria-label="Number of guests"
          type="number"
          min="1"
          max="10"
          id="guests"
          {...register("guests")}
        />
        {!!errors.guests && (
          <span className="form-error">{errors.guests.message}</span>
        )}
        <label htmlFor="occasion">Occasion</label>
        <select
          aria-label="Choose the Occasion"
          id="occasion"
          {...register("occasion", { required: true, min: 1, max: 10 })}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
        {!!errors.occasion && (
          <span className="form-error">{errors.occasion.message}</span>
        )}
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
