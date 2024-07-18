"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type RangeType = { from: Date | undefined; to: Date | undefined };

const ReservationContext = createContext(
  undefined as unknown as {
    range: RangeType;
    setRange: Dispatch<SetStateAction<{ from: undefined; to: undefined }>>;
    resetRange: () => void;
  }
);
const initialState = { from: undefined, to: undefined };

function ReservationProvider({ children }: { children: React.ReactNode }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);

  if (context === undefined)
    throw new Error("Context was used outside provider!");
  return context;
}

export { ReservationProvider, useReservation };
