import { getCabin } from "@lib/data-service";

export default async function CabinDetails({
  params,
}: {
  params: { cabinId: string };
}) {
  const cabin = await getCabin(+params.cabinId);
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
