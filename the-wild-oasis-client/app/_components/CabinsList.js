import CabinCard from "./CabinCard";
import { getCabins } from "@/app/_lib/data-service";
import { unstable_noStore as noStore } from "next/cache";

async function CabinsList() {
  noStore();
  const cabins = await getCabins();
  // const cabins = [];
  if (!cabins.length) return <p>No Cabin&apos;s data available</p>;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinsList;
