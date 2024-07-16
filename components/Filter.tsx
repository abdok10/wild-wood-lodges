"use client";

import { FilterType } from "@lib/types";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const activeFilter: FilterType = (searchParams.get("capacity") as FilterType) ?? "all";

  const handleFilter = (filter: FilterType) => {
    console.log(filter);
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    console.log(params.toString());
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  const filterSys: { name: string; capacity: FilterType }[] = [
    {
      name: "All cabins",
      capacity: "all",
    },
    {
      name: "1 - 3 guests",
      capacity: "small",
    },
    {
      name: "4 - 7 guests",
      capacity: "medium",
    },
    {
      name: "8 - 12 guests",
      capacity: "large",
    },
  ];

  return (
    <div className="flex border border-primary-800">
      {filterSys.map((item) => (
        <div
          key={item.capacity}
          className={clsx("hover:bg-primary-800 py-3 px-5 cursor-pointer", {
            "bg-primary-800": activeFilter === item.capacity,
          })}
          onClick={() => handleFilter(item.capacity)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};
