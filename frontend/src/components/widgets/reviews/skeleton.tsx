import Skeleton from "react-loading-skeleton";

function ReviewsSkeleton() {
  return (
    <div className="overflow-hidden bg-main-light py-12 md:py-18 xl:py-24">
      <div className="container reviews">
        <h2 className="text-xl md:text-2xl xl:text-3xl font-bold pb-7">
          Отзывы
        </h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 lg:gap-5">
          <Skeleton className="w-full aspect-[392/240]" />
          <Skeleton className="w-full aspect-[392/240]" />
          <Skeleton className="w-full aspect-[392/240] hidden md:block" />
          <Skeleton className="w-full aspect-[392/240] hidden lg:block" />
        </div>
      </div>
    </div>
  );
}

export default ReviewsSkeleton;
