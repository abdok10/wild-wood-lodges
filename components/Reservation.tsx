import DateSelector from "@components/DateSelector";
import ReservationForm from "@components/ReservationForm";
import { CabinTypes } from "@lib/types";
import { getBookedDatesByCabinId, getSettings } from "@lib/data-service";

export default async function Reservation({ cabin }: { cabin: CabinTypes }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector
        cabin={cabin}
        settings={settings}
        bookedDates={bookedDates}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
}
