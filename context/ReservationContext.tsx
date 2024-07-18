"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface DateRangeType {
  from: Date | undefined;
  to: Date | undefined;
}

interface ReservationContextType {
  range: DateRangeType;
  setRange: Dispatch<SetStateAction<DateRangeType>>;
  resetRange: () => void;
}

const initialState: ReservationContextType = {
  range: { from: undefined, to: undefined },
  setRange: () => {},
  resetRange: () => {},
};
const reservationContext = createContext<ReservationContextType>(initialState);

const ReservationProvider = ({ children }: { children: React.ReactNode }) => {
  const [range, setRange] = useState<DateRangeType>({
    from: undefined,
    to: undefined,
  });

  const resetRange = () => {
    setRange(initialState);
  };
  return (
    <reservationContext.Provider
      value={{
        range,
        setRange,
        resetRange,
      }}
    >
      {children}
    </reservationContext.Provider>
  );
};

const useReservation = () => {
  const context = useContext(reservationContext);

  if (context === undefined) {
    throw new Error("useReservation must be used within a ReservationContext");
  }

  return context;
};

export { ReservationProvider, useReservation };
