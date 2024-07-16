export type CabinProps = {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description?: string;
  image: string;
};

export type FilterType = "all" | "small" | "medium" | "large";
