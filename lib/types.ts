export type CabinTypes = {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description?: string;
  image: string;
};

export type FilterTypess = "all" | "small" | "medium" | "large";

export type GuestTypes = {
  id: number;
  fullName: string;
  email: string;
  nationalID: string;
  nationality: string;
  countryFlag: string;
};

export type SettingsTypes = {
  minBookingLength: number;
  maxBookingLength: number;
  maxGuestsPerBooking: number;
  breakfastPrice: number;
};

export type BookingTypes = {
  id: number;
  startDate: Date;
  endDate: Date;
  numNights: number;
  numGuests: number;
  cabinPrice: number;
  extrasPrice: number;
  totalPrice: number;
  status: string;
  hasBreakfast: boolean;
  isPaid: boolean;
  observations: string;
  cabinId: number;
  guestId: number;
};

export type CountryTypes = {
  name: string;
  flag: string;
};
