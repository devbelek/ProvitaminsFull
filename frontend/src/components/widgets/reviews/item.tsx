import Image from "next/image";
import Rating from "../../shared/rating";
import { Review } from "@/src/api/reviews";

function ReviewItem({ review, icon, rating, full_name }: Review) {
  return (
    <div className="p-3.5 sm:p-4 lg:p-5 border border-stroke rounded-xl bg-white flex flex-col justify-start gap-3.5 h-full">
      <div className="flex gap-4 items-start">
        {icon && (
          <div>
            <div className="relative w-[52px] aspect-square rounded-full overflow-hidden">
              <Image src={icon} alt="user" fill priority sizes="100%" />
            </div>
          </div>
        )}
        <div className="grid gap-1.5">
          <Rating readonly value={rating} />
          <p className="font-semibold line-clamp-1 break-all">{full_name}</p>
        </div>
      </div>
      <p className="text-sm">{review}</p>
    </div>
  );
}

export default ReviewItem;
