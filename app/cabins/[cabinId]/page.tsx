import Cabin from "@components/Cabin";
import { getCabin, getCabins } from "@lib/data-service";
import { unstable_noStore as noStore } from "next/cache";

type ParamsProps = {
  params: { cabinId: number };
};

export async function generateMetadata({ params }: ParamsProps) {
  const { name } = await getCabin(params.cabinId);
  return {
    title: `Cabin ${name}`,
    description: "Get all the details about a cabin and reserve it today.",
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  console.log(ids);

  return ids;
}

export default async function CabinDetails({ params }: ParamsProps) {
  noStore()
  const cabin = await getCabin(params.cabinId);
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        {/* <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense> */}
      </div>
    </div>
  );
}
