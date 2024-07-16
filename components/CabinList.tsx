import CabinCard from "@components/CabinCard";
import { getCabins } from "@lib/data-service";
import { CabinProps, FilterType } from "@lib/types";
import { unstable_noStore as noStore } from "next/cache";


async function CabinList({ filter }: { filter: FilterType }) {
  noStore();
  const cabins = await getCabins();
  if (!cabins.length) return null;

  let filteredCabins: CabinProps[] = [];

  if (filter === "all") {
    filteredCabins = cabins;
  } else if (filter === "small") {
    filteredCabins = cabins.filter((cabin) => +cabin.maxCapacity <= 3);
  } else if (filter === "medium") {
    filteredCabins = cabins.filter(
      (cabin) => cabin.maxCapacity > 3 && cabin.maxCapacity <= 7
    );
  } else if (filter === "large") {
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity > 8);
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredCabins.length > 0 &&
        filteredCabins.map((cabin) => (
          <CabinCard key={cabin.id} cabin={cabin} />
        ))}
    </div>
  );
}

export default CabinList;
