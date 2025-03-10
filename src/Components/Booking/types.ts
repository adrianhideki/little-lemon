export type BookingFormValues = {
  date: string;
  time: string;
  guests: number;
  occasion: string;
};

export interface BookingAction {
  type: "updateTimes" | "addReservation";
  payload?: string[] | BookingFormValues;
}

export type BookingValues = {
  reservedTimes: Record<string, string[]>;
  reservations: BookingFormValues[];
};
