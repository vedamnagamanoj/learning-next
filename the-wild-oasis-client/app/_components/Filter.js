"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
const cabinTypes = [
  { type: "all", size: "All cabins" },
  { type: "small", size: "1-3 guests" },
  { type: "medium", size: "4-7 guests" },
  { type: "large", size: "8-12 guests" },
];

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border border-primary-800 flex">
      {cabinTypes.map((cabinType) => (
        <Button
          filter={cabinType.type}
          handleFilter={handleFilter}
          activeFilter={activeFilter}
          key={cabinType.type}
        >
          {cabinType.size}
        </Button>
      ))}
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
