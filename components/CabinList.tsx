import CabinCard from "@components/CabinCard";
import { getCabins } from "@lib/data-service";
import { unstable_noStore as noStore } from "next/cache";

async function CabinList({}) {
  noStore();
  const cabins = await getCabins();
  if (!cabins.length) return null;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap14">
      {cabins.length > 0 &&
        cabins.map((cabin) => <CabinCard key={cabin.id} cabin={cabin} />)}
    </div>
  );
}

export default CabinList;
