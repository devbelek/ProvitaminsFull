import Skeleton from "react-loading-skeleton";

function GridProductCardsSkeleton() {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 lg:gap-5">
      <Skeleton className="w-full aspect-[310/435]" />
      <Skeleton className="w-full aspect-[310/435]" />
      <Skeleton className="w-full aspect-[310/435] hidden md:block" />
      <Skeleton className="w-full aspect-[310/435] hidden lg:block" />
    </div>
  );
}

export default GridProductCardsSkeleton;
